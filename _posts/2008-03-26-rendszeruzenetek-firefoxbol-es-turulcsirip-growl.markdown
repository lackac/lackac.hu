--- 
created_at: 2008-03-26 14:31:47 +01:00
layout: post
tags: "firefox extension project callout growl turulcsirip csipp greasemonkey"
title: "Rendszerüzenetek Firefoxból és Turulcsirip Growl [update 3]"
typo_id: 32
---
Az elmúlt héten egy olyan Firefox kiterjesztést fejlesztgettem, ami lehetővé teszi, hogy JavaScript kódból küldjünk üzeneteket a felhasználónak. Persze nem a mindenki által utált <code>alert('hello world')</code> módon, hanem úgy, hogy az Macen [Growl][1] segítségével, Windowson az ottani jobb alsó sarokban felbújó rendszerüzenetben, Linuxon pedig valami hasonló módon jelenjen meg.

Könnyen végig lehet gondolni, hogy ez milyen hasznos lehet, ha valami olyan folyamatosan változó oldalt szeretnénk követni, mint például a [Turulcsirip][2]. Ehhez csak egy [Greasemonkey][3] user szkriptet kellene írni, ami az új csiripeket a kiterjesztés által biztosított API-n keresztül elküldi nekünk ezen a csatornán is.

Ne aggódjatok, ezzel nektek már nem kell foglalkozni. Minden szükséges összetevő elkészült és itt le is tölthető.

[1]: http://growl.info/
[2]: http://turulcsirip.hu/
[3]: https://addons.mozilla.org/en-US/firefox/addon/748


### Türelmetleneknek

* **Callout** telepítés: [Callout 0.3.2](http://lackac.hu/lab/callout/callout.xpi) (a fent említett kiterjesztés)
* **Csipp** telepítés: [Csipp 0.3](http://lackac.hu/lab/callout/csipp.user.js) (a turulcsiripes greasemonkey szkript)
* **CsiripRóka**: [CsiripRóka][4] (az új verzió kell ahhoz, hogy a sidebarban menjen a *Csipp*)

[4]: http://turulcsirip.hu/csiriproka/

### Callout

Az említett kiterjesztés telepítés után egy <code>callout</code> objektumot tesz minden oldal és GreaseMonkey szkript számára elérhetővé. Ennek segítségével tudnak üzenni a felhasználónak az alábbi módon (<a href="#" onclick="if (typeof(callout) != 'undefined') {callout.notify('Hello', 'World!');} else {alert('nincs még fent a callout kiterjesztés :(');}; return false;">demo</a>):

{% highlight js %}
callout.notify('title', 'message');
{% endhighlight %}

Lehetőség van az ikon megváltoztatására is. Ehhez a harmadik opcionális paraméterben kell megadni az ikon url-jét (<a href="#" onclick="if (typeof(callout) != 'undefined') {callout.notify('Hello World!', 'this is a ninja!', {icon: 'http://lackac.hu/lab/callout/ninja.png'});} else {alert('nincs még fent a callout kiterjesztés :(');}; return false;">demo</a>):

{% highlight js %}
callout.notify('title', 'message',
  {icon: 'http://example.com/icon.png'});
{% endhighlight %}

Végiggondolva, hogy milyen idegesítő lehet, ha minden oldal elkezdi ezt az apit használni, egyelőre egy három állású kapcsolót építettem be a kiterjesztés beállításaiba. Ezzel lehet szabályozni, hogy bárki küldhessen üzenetet (alapbeállítás), csak GreaseMonkey-ból jöhet üzenet, vagy akár teljesen ki is lehet kapcsolni az egészet. Később lehet majd url alapján is szűrni.

A kiterjesztés a Firefox 2 és az a fölötti verziókat támogatja, beleértve a legújabb Firefox 3 bétákat is, és telepítéséhez szükséges egy 0.7-es, vagy annál újabb GreaseMonkey is.

#### Update

Az új [0.3-as verzióhoz](http://lackac.hu/lab/callout/callout_0.3.xpi) már nem szükséges, hogy a GreaseMonkey telepítve legyen. E nélkül is működik ha valamilyen oldalból hívják meg.

#### Update 2

Új feature került a kiterjesztésbe, mely akkor is lehetővé teszi az üzenet kattinthatóságát, ha amúgy az üzenetben nincs url. Ennek ötlete akkor jött, amikor egy [nemzetközibb példaszkriptet][10] írtam a kiterjesztéshez. Ha a szövegben nincs is url, a <code>notify</code> metódus harmadik <code>options</code> paraméterében meg lehet adni a <code>href</code> értékeként egy url-t (<a href="#" onclick="if (typeof(callout) != 'undefined') {callout.notify('lackac.hu', 'LacKac blogja', {href: 'http://lackac.hu'});} else {alert('nincs még fent a callout kiterjesztés :(');}; return false;">demo</a>):

{% highlight js %}
callout.notify('lackac.hu', 'LacKac blogja',
  {href: 'http://lackac.hu'});
{% endhighlight %}

[10]: http://lackac.hu/2008/04/04/digg-kovetese-rendszeruzenetekben.html

#### Update 3

Javítva egy bug, ami miatt egy idő után a GreaseMonkey kiterjesztések nem működtek (pl. TurulRewind sem).

### Csipp

Az első példa GreaseMonkey szkript [András][5] ötlete alapján egy olyan user script, ami az új csiripeket küldi ki. Igazából ez adta a motivációt a kiterjesztés kifejlesztésére is, amire szintén András késztetett. Amikor Benedeknek mutattam az elkészült alkotást, annyira belelkesült, hogy azonnal elkezdte a Csippet beleépíteni a Turulcsiripbe. Ha ez megtörténik, akkor erre a GM szkriptre már nem is lesz szükség. Bár valószínűleg a sidebarban úgy még nem fog működni.

[5]: http://barthazi.hu

Van egy másik példaszkript is, ami egyszerűbb. Ez a [callouttesting][7] szkript, ami itt a [Rólam][8] oldalan működik, és a képemre való kattintáskor hoz fel egy üzenetet. A *Csipp* mindegyik turulcsirip módban működik (twitterikus, barátkozós, mindent bele), viszont a csiriprókában való használathoz új verziót kell feltelepíteni.

[7]: http://lackac.hu/lab/callout/callouttesting.user.js
[8]: http://lackac.hu/pages/about.html

#### Update

Az új [0.3-as verzióban](http://lackac.hu/lab/callout/csipp_0.3.user.js) lekorlátoztam a *Csipp*et a sidebarra, mivel Benedek elkészítette a [Turulcsirip update-et][9]. Ezen kívül pedig már itt is működik az avatar mutatása az üzenetek mellett (eddig egy Turulcsirip logo volt itt).

[9]: http://turulcsirip.hu/notify/

### CsiripRóka új verzió

Az új CsiripRókára azért volt szükség, mert a GreaseMonkey nem épül be a sidebarban megnyitott oldalakba. Szerencsére azonban a GM fejlesztők egy nyílt service-en keresztül elérhetővé tették a kiterjesztés API-ját más kiterjesztés fejlesztők felé is. Ennek segítségével bárhova beépíthetővé válnak a GM szkriptek. Tulajdonképpen csupán ezt az újítást hozza be a friss CsiripRóka verzió.

### Köszönetnyilvánítás

Anyukámnak, apukámnak, hogy felneveltek. Kedvesemnek, Editnek, hogy mindenkinél jobban szeret :). [Bártházi Andrásnak][6], akitől az alapötlet származik, és minden turulcsiripes ismerősnek, akit a teszteléssel zaklattam.

[6]: http://turulcsirip.hu/perma/777343162
