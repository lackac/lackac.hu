--- 
created_at: 2008-05-20 20:56:19 +02:00
layout: post
tags: "jruby ruby"
title: "JRuby tapasztalatok"
typo_id: 44
---
A hétvégén volt időm játszadozni egy kicsit JRubyval, de arra már nem jutott, hogy össze is foglaljam a tapasztalataimat. Most megpróbálom a lényeget leírni.

Korábban már volt szó itt a blogon arról, hogy [mi is a JRuby][1]. A projekt jelenleg a 1.1.1-es verziónál tart és jelenlegi állapotában már akár élesben is használható. A nyelvi elemek és a core library tekintetében 99%-ban kompatibilis a Ruby 1.8.6-al, viszont van néhány limitáció illetve implementációs különbség, amire oda kell figyelni. Ezekről, Rails futtatásról, Java integerációról és GUI programozásról lesz most itt szó.

[1]: http://lackac.hu/2008/05/06/ruby-implementaciok-es-a-ruby-jovoje.html

### Limitációk

A JRuby teljes egészében Java-ban írt Ruby implementáció. A platformfüggetlenség jegyében *nincs mód arra, hogy részben C-ben írt gemeket telepítsünk* hozzá. Ez persze nem minden esetben probléma. Például a mongrel és hpricot gemek képesek java kódra is fordítani a külső függőségüket, hála a [Ragel állapotgép fordító][2] rugalmasságának. (mellékszál: erről is kellene írnom egyszer, mármint a Ragelről). Más gemekhez pedig készülnek java alapú implementációk (pl. [rmagick4j][3]). Mindenesetre érdemes figyelni arra, hogy szükségünk van-e ilyen gemekre.

[2]: http://www.zedshaw.com/tips/ragel_state_charts.html
[3]: http://code.google.com/p/rmagick4j/

Szintén a Java nyelvből adódó [további limitáció][4], hogy a JRuby *nem támogatja a folytatódásokat* (continuation, mi ez magyarul?), ami tulajdonképpen nem nagy probléma, mivel ez úgysem lesz a Ruby 2.0 része sem. A JRuby *nem rendelkezik finom időzítővel*, bár ezt a hiányosságot egy jövőbeni JVM verzió orvosolhatja. Szintén JVM-ből adódó hiányosság *néhány POSIX metódus hiánya* (főleg fájlkezelés területén). Ezeket a hiányosságokat általában meg lehet kerülni, illetve nagyobb részük későbbi fejlesztések során pótolva lesz.

[4]: http://jruby.codehaus.org/Limitations

Megint hasonlóan a hivatalos Ruby implementáció következő verziójához a JRuby a JVM jóvoltából natív szálakkal rendelkezik. Ezt talán nem is a limitációk között kellene felsorolni, hiszen ennek köszönhetően sokkal hatékonyabb többszálú programok készíthetők. Mindenesetre ez egy újabb pont, ahol figyelnünk kell az ebből adódó különbségekre.

### Rails alkalmazások futtatása

Nem meglepő módon ennek a témának van talán [a legnagyobb irodalma][5] (oldal alján linkek). Egy Rails alkalmazás futtatása szinte ugyanolyan egyszerű, mint a hagyományos Ruby interpreterrel. Amire oda kell figyelni, hogy az ActiveRecord működéséhez szükséges az [ActiveRecord-JDBC][6] gem, és természetesen az adatbázis szerver JDBC drivere is.

[5]: http://wiki.jruby.org/wiki/JRuby_on_Rails
[6]: http://wiki.jruby.org/wiki/Running_Rails_with_ActiveRecord-JDBC

Teljesítmény szempontból, bár pontos méréseket nem végeztem, az indulás kivételével sokkal gyorsabbnak tűntek az alkalmazások, mint MRI-vel. Az indulás általában lassabb, ami leginkább a jirb (JRuby irb) esetében idegesítő. Maga a Rails alkalmazás viszont még tovább gyorsítható [AOT fordítás][7] segítségével. Ezt Rails alkalmazáson nem próbáltam még.

[7]: http://wiki.jruby.org/wiki/Rails_AOT

Nem mozgok túl otthonosan a Java alkalmazás szerverek világában, de a [JRuby wiki][8] alapján úgy tűnt, hogy ezek nagy része szintén támogatott. Lehet Rails alkalmazást futtatni Tomcat, WebSphere és GlassFish környezetben is. Ez igazán hasznos lehet Javaban írt enterprise rendszerekkel való integrálás elősegítésében. Az enterprise környezet beli alkalmazásról további tapasztalatok olvashatók egy [Fortune 100 egyikének dolgozó feljlesztőtől][9].

[8]: http://wiki.jruby.org/wiki/Main_Page
[9]: http://www.matthewdavidwilliams.com/2008/04/20/jruby-or-how-i-manage-to-write-ruby-in-a-strict-corporate-environment/

### Java integráció

Az eddigiekből már valószínűleg kiderült, hogy a JRuby legnagyobb előnye társaival szemben a java integráció. És ez nem csupán a JVM előnyeiben merül ki, hanem *lehetőség van kétirányú kapcsolatra is Ruby és Java kód között*. A legegyszerűbb talán egy rövid példával illusztrálni:

{% highlight ruby %}
require 'java'
include_class 'java.util.ArrayList'

list = ArrayList.new
list.add(1)
list.add(7)
list.add "negyvenketto"
list.each {|i| puts i} # prints "1\n7\nnegyvenketto\n"
list.remove(7)
list.add "bye"
list.each {|i| puts i} # prints "1\nnegyvenketto\nbye\n"
{% endhighlight %}

Persze a példa kicsit buta, de a lényeget szemlélteti. Az <code>include\_class</code> metódushoz hasonlóan lehetőség van teljes package-et is betölteni: <code>include\_package('javax.swing')</code>.

Ennél picit bonyolultabb a másik irány. Még nem sikerült magamon erőt vennem, hogy 10 sornál több Java kódot írjak, ezért ezt még nem próbáltam, de a vállalkozó kedvűek [erről is találhatnak][10] bőven dokumentációt.

[10]: http://wiki.jruby.org/wiki/Java_Integration

### GUI programozás

Köszönhetően a jól kiforrott Java-ás GUI programozási lehetőségeknek, már ez sem olyan terület, ahol a derék programozó csak fejvakarva áll. Persze eddig is [voltak][11] [megoldások][12], de korántsem voltak mindenre alkalmasak. Persze a Ruby nem is olyan nyelv, ami elsősorban erre hivatott, de ezek a lehetőségek mégis nagyon hasznosak tudnak lenni a gyors prototipizálásban.

[11]: http://code.whytheluckystiff.net/shoes/
[12]: http://rubycocoa.sourceforge.net/HomePage

Hogy még egyszerűbb legyen a helyzet itt egy lista [a Javas GUI könyvtárakhoz írt segédkönyvtárakról][13]. KiBus múltamból kifolyólag engem egy itt nem említett fogott meg. A JRuby lehetőségeit kihasználva egy srác írt egy keretrendszert a népszerű [Processing][14] vizualizációs környezethez. A [Ruby-Processing][15] segítségével mindazt meg lehet valósítani, amit processingben, még külső library-k betöltésére is van lehetőség. Egyre azért érdemes figyelni. A JRuby alapesetben JIT módban futtat, ami valós idejű vizualizációhoz lassú. Az AOT mód segíthet, de még így is lassabb lesz, mint a natív Java.

[13]: http://wiki.jruby.org/wiki/GUI_Frameworks
[14]: http://processing.org/
[15]: http://www.the-shoebox.org/apps/44

### Overall tapasztalatok, összegzés

Legyen az webalkalmazás keretrendszer, vagy GUI programozás a JRuby mindegyik esetben jól használható. A fent említett limitációkon kívűl más kompatibilitási problémába nem ütköztem. Az integrációt szépen megoldották, és ezen a területen a Java 1.7 megjelenésével még további javulások várhatóak.

Ugyanakkor fontos figyelni arra, hogy minden helyzethez a megfelelő eszközt alkalmazzuk. Webalkalmazás futtásra a JRuby már most nagyon jól használható, és jó alternatíva lehet Java-ás rendszerek helyett, vagy akár azokkal integrálva is. Ahol lehet ott, érdemes előre fordítani a kódot, mivel a JIT fordítás nem hoz sok javulást az MRI-hez képest. A számítás intenzív és grafikus feladatokat pedig ha lehet hagyjuk a Java-ra. Azért van az is ott, hogy segítsen.

Végül pár hasznos forrás és tutorial:

* [Getting Started with JRuby](http://jruby.codehaus.org/The+JRuby+Tutorial+Part+1+-+Getting+Started)
* [JIRB, Swing alapok](http://jruby.codehaus.org/The+JRuby+Tutorial+Part+1.5+-+Using+JIRB+to+Check+Java+Behaviour)
* [A web 2.0 "Hello World" alkalmazása (gy.k. blogmotor) JRubyval](http://jruby.codehaus.org/The+JRuby+Tutorial+Part+2+-+Going+Camping)
* [JRuby wiki](http://wiki.jruby.org/wiki/Main_Page)
* [Ruby-Processing wiki](http://github.com/jashkenas/ruby-processing/wikis)
