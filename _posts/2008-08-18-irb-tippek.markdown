--- 
created_at: 2008-08-18 10:51:19 +02:00
layout: post
tags: "ruby irb tip wirble utility_belt"
title: "IRB tippek"
typo_id: 55
---
Fejlesztés közben sokszor előfordul, hogy ki szeretnénk próbálni valami új gemet, letesztelni egy osztály működését, vagy csak felfedező körútra indulnánk. Ilyenkor a legjobb nyitni egy terminált és indítani egy [IRB][1] promptot. Jól beállítva és helyesen kezelve a Ruby programozó leghasznosabb eszköze lehet. Az alábbiakban adok pár tippet, amivel még hatékonyabban tudjuk használni a programot.

[1]: http://www.rubycentral.com/pickaxe/irb.html

Aki esetleg nem ismerné, hogy mi is ez az egész: az IRB az *Interaktív Ruby Shell* rövidítése. Elindítás után egy promptot kapunk. Írjunk ide valamilyen Ruby kifejezést, és nyomjunk entert. Azonnal meg is kapjuk a kifejezés értékét. Itt minden megengedett, ami amúgy a Rubyban az. Betölthetünk külső könyvtárakat, írhatunk komplett osztályokat és modulokat, egyszóval mindent.

{% highlight irb %}
>> 1+3
=> 4
>> "chunky bacon".split
=> ["chunky", "bacon"]
>> 3.14.class
=> Float
{% endhighlight %}

#### <code>.irbrc</code>, Wirble

Itt jön a fontos rész. Az IRB induláskor megnézi, hogy van-e a <code>$HOME</code> könyvtárunkban egy <code>.irbrc</code> nevű fájl. Ha van, akkor ezt betölti. Mivel maga az IRB is egy Ruby osztály, ami kezeli a program futását, ezért természetesen az <code>.irbrc</code> fájl is egy ruby szkript. Minden amit itt csinálunk, az le fog futni az IRB indulása előtt. Első és legfontosabb tipp:

{% highlight ruby %}
require 'rubygems'
{% endhighlight %}

Innentől kezdve nem kell mindig kiadnunk ezt a parancsot, ha egy gemet szeretnénk használni. A következő lépés a [Wirble][2] gem telepítése. Ez olyan további hasznos dolgokkal egészíti ki az IRB-t, mint például *history*, *tab-completion* és a *visszatérési értékek színezése*. Ha fent van, akkor a fenti sorhoz a következőket lehet még hozzáadni:

[2]: http://pablotron.org/software/wirble/

{% highlight ruby %}
require 'wirble'
Wirble.init
Wirble.colorize
{% endhighlight %}

Az utolsó sor nem is szükséges, ha nem szeretnénk színes IRB-t.

#### Hol van definiálva?

Tovább fejleszthetjük az <code>.irbrc</code> fájlunk a Unix rendszerekből ismerős <code><em>which</em></code> parancshoz hasonló metódussal. A ["Where is this defined?"][3] metódus segítségével egy blokkon belüli metódushívásból el tudjuk dönteni, hogy az adott metódus hol van definiálva (a példában <code>which</code>-re aliasolva).

[3]: http://programmingishard.com/code/507

{% highlight irb %}
>> which { Time.zone }
=> "ActiveSupport::CoreExtensions::Time::Zones::ClassMethods received message 'zone', Line #14 of /usr/local/lib/ruby/gems/1.8/gems/activesupport-2.1.0/lib/active_support/core_ext/time/zones.rb"
>> which { [].map(&:name) }
=> "Symbol received message 'to_proc', Line #10 of /usr/local/lib/ruby/gems/1.8/gems/activesupport-2.1.0/lib/active_support/core_ext/symbol.rb"
{% endhighlight %}

Az utolsó példából az is látszik, hogy a metódus bonyolultabb kifejezésekkel is megbírkózik. Néha azonban előfordul, hogy nem pont azt találja meg, amit keresünk, vagy éppen nem talál semmit. Mindenesetre néha hasznos tud lenni.

#### String#to_proc

A Rails <code>ActiveSupport</code> moduljából ismerős lehet a [<code>Symbol#to_proc</code>][4] metódus, aminek a segítségével könnyen tudunk iterációkat írni.

[4]: http://apidock.com/rails/Symbol/to_proc

{% highlight ruby %}
users.select(&:active?).collect(&:email)
{% endhighlight %}

Ennél sokkal rugalmasabb Reginald Braithwaite [<code>String#to_proc</code>][5] implementációja. Pár példa, hogy mikre képes (bővebb bemutatót a hivatkozott blogbejegyzésben láthattok):

[5]: http://weblog.raganwald.com/2007/10/stringtoproc.html

{% highlight ruby %}
(1..5).map &'*2'   # => [2, 4, 6, 8, 10]
(1..5).inject &'+' # => 15
users.map &'.albums.first.title'
{% endhighlight %}

Az általam jelenleg használt <code>.irbrc</code> fájl tartalmazza az összes említett feature-t. Megtekinthető és [letölthető Gistről][6]. Használjátok kedvetek szerint.

[6]: http://gist.github.com/5148

#### Utility Belt

Korábban már hallottam egy Wirble-nél még több mindenre képes IRB enhancement gemről, aminek [Utility Belt][7] a neve. A bejegyzés írása közben ismét rátaláltam. Ez tudja mindazt amit a Wirble (tulajdonképpen arra épül), és tartalmazza a <code>String#to_proc</code> metódust is. Ezen túl még nagyon sok minden hasznos dolgot nyújt. Próbáljátok ki ezt is. Én biztos megteszem.

[7]: http://utilitybelt.rubyforge.org/
