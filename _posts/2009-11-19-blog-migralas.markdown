--- 
created_at: 2009-11-19 16:45:04.845890 +01:00
layout: post
title: "Blog migrálás"
---
Alapvető, bár főleg a háttérben végbement változásokon esett át a blog. A történet hosszú, megpróbálom röviden előadni, és inkább a technikai érdekességeket kiemelni. A blog már [inulása óta](/2007/04/29/greeting.html) a Typo blogmotort használta. Ennek megvolt az az előnye, hogy a mindenféle dolgokat tartalmazó hasznos blogfeature-özön mellett az egész rendszer Ruby-t használt, így könnyen tudtam hackelni rajta, ha épp az kellett. Ám egy 512MB rammal rendelkező VPS-en nem túl kellemes egy alkalmazásszerver processzenként 130MB ramot evő cuccot futtatni, hogyha mindemellett leginkább játszósszervernek tartod. (A Typo 5.x verzióiban már nagyon jó a page cache, de így is túl sok volt ez a böhöm motor a bloghoz.)

## Jekyll

A lackac.hu szerverén amúgyis már nagytakarítást akartam végezni (erről talán egy későbbi bejegyzésben), így gondoltam itt az idő blogot költöztetni. Már rég szemeztem a [Jekyll][1] statikus weboldal generátorral. Hasonló, mint a [Webby][2], igazából ízlés kérdése, hogy kinek melyik tetszik jobban. Nekem inkább a Jekyll felé húz a szívem (úgy, hogy mindkettőt használtam már). Rettentően egyszerű összerakni vele egy kisebb oldalt vagy blogot. Minden tartalmat szövegszerkesztőben írsz, és ha akarod használhatod a kedvenc leírónyelved is (markdown, textile, stb.). A Jekyll emellett tud még forráskódot színezni is a generált oldalakon. *Kódereknek találták ki, na.*

[1]: http://github.com/mojombo/jekyll
[2]: http://webby.rubyforge.org/

A Jekyll legnagyobb előnye viszont, hogy a [GitHub Pages][3] is ezt használja. Tehát ha van egy `username.github.com` repód, vagy bármelyik repódban egy `gh-pages` branch, akkor azon belül használhatsz Jekyll layoutot és szintaxist, és minden push-kor a GitHub az oldaladat automatikusan legenerálja. Itt ezeket nem is részletezem tovább, akit érdekel nézelődjön tovább a linkeken.

## A migrálás

Természetesen szerettem volna a tartalom minél nagyobb részét megtartani, és emellett úgy döntöttem, hogy a design-on sem változtatnék. Egyrészt ahhoz most nem volt kedvem, hogy új design-on törjem az agyam, másrészt nekem már szívemhez nőtt az oldal olyannak, amilyen. A tartalom migrálása a bejegyzéseket, a hozzászólásokat és az oldalsáv elemeit érintette.

### Bejegyzések

A Jekyll-hez vannak mindenféle blogmotorhoz írt [migráló szkriptek][3], és itt találtam egy Typo-hoz írtat is. Ez kiindulási alapnak jó is volt. Fontos viszont, hogy ez csak a bejegyzésekhez volt jó, minden egyéb dolgot figyelmen kívül hagyott.

[3]: http://wiki.github.com/mojombo/jekyll/blog-migrations

Ez a migráló szkript nekem viszont alapból egyáltalán nem működött. Ezért kicsit jobban bele kellett nézni a Typo adatbázisába és ahhoz igazítani a szkriptet. Az [átírt verzió][4] kicsivel több metaadatot hoz át, és nem csak a blogbejegyzésekkel, hanem az oldalakkal is foglalkozik. Fekraktam a végleges szkriptet [gist][4]-re, de nem garantálom, hogy bárkinek is out-of-the-box működni fog. Viszont ez alapján talán egyszerűbb nekiesni. Ezt amúgy is csak egyszer kell megtenni.

[4]: http://gist.github.com/238852

### Hozzászólások

Mivel egy statikus oldalgenerátor alap esetben nem ad kommentezésre lehetőséget, ezért ehhez a már bevált [Disqus](http://disqus.com/) szolgáltatást kötöttem be. Szerencsére a [Disqus API](http://wiki.disqus.net/API) segítségével az eddigi bejegyzések migrálása sem volt túl nagy kihívás. Ehhez szintén írtam egy egyszerű szkriptet, ami a Typo adatbázisából olvassa ki a migrálandó hozzászólásokat. A szkript összerakja kommenthez tartozó bejegyzés URL-jét, és az ahhoz tartozó Disqus thread-be rakja, megtartva minden metaadatot, amit csak lehet. Ha nincs még az URL-hez Disqus thread (ez az alapeset), akkor azt létre is hozza.

A [komment migrálós][5] szkript is fent van [gist][5]-en. Ebben viszont néhány dolgot biztosan át kell írni. Az egyik, hogy a 82. sort az saját blogod által használt URL patternhez kell igazítani. Ez határozza meg, hogy melyik oldalon fognak megjelenni a kommentek. Ha ez nem stimmel, akkor a hozzászólások rossz helyen vagy egyáltalán nem jelennek meg. A másik megváltoztatandó dolog a 92. sorban található. Az itt megadott címmel lesz létrehozva az olyan bejegyzésekhez tartozó új Disqus thread, amelyhez még nem lett egy komment sem migrálva.

[5]: http://gist.github.com/238863

### Oldalsáv és design

A blog további elemeinek migrálása főként manuálisan történt. A designt például úgy hoztam át, hogy az épp aktuális főoldal forrásából raktam össze a Jekyll default layout-ját, és ehhez minden képet, css-t és js-t is áthoztam. Ezen túl leszedtem minden felesleges dolgot és pár apróságon alakítottam is. Az oldalsáv tartalma pedig nagyrészt copy-paste technikával került át, bár ezen is volt néhány apró alakítás.

## Konklúzió

Mivel a blogot innentől a GitHub Pages szolgálja ki, ezért az én VPS-em memóriáját nem fogyasztja tovább. Ezen felül valószínűleg a sebessége is nőtt egy nagyságrenddel (csak tipp, méréseket nem végeztem). Viszont talán ennél is érdekesebb, hogy a [forrás elérhető][6] és a [![Creative Commons License](http://i.creativecommons.org/l/by-nc/2.5/hu/80x15.png)](http://creativecommons.org/licenses/by-nc/2.5/hu/) licenc feltételei mellett szabadon fel is használható.

[6]: http://github.com/lackac/lackac-hu
