--- 
created_at: 2009-01-19 08:15:00 +01:00
layout: post
tags: "bibliaolvaso rails app_lego haml sass compass couchdb"
title: Bibliaolvasó
typo_id: 64
---
Rég volt, hogy saját hobbiprojektről írtam, mert rég jutott időm ilyenre. Szilveszter előtt pár nappal viszont kicsit tudtam időt szánni az egyikre. A gyülekezetünkben tavaly ősszel elkezdtük együtt olvasni a Bibliát egy éves terv alapján. A terv az Ó- és Újszövetséget együtt veszi végig egy év alatt. Szombat délutánonként pedig szokott lenni a heti részekből egy kvíz, amivel az egészet játékosabbá közösségibbé tesszük. Arra gondoltam, hogy az olvasást meg lehetne támogatni a kor technikájával, és lehetne egy olyan weboldalt csinálni, ahol mindig az aktuális napra adott részt lehet elolvasni a Bibliából.

Kis tervezgetés, egy szilveszter előtti egynapos fejlesztés, domainszerzés (köszönet [Andrási Lászlónak][1] a felajánlásért) és további időben szétszórt javítgatások után végül ideje, hogy a nagyvilág is megismerje az eredményt, a [Bibliaolvasót][bo]. A Bibliaolvasó segítségével pont azt tudod megtenni, amit fent leírtam. Minden nap az aktuális részt látod, ráadásul fel tudsz iratkozni a napi részeket tartalmazó feedre is. De ha az RSS vagy Atom feedek világa idegen számodra, akkor akár emailben is feliratkozhatsz.

[1]: http://andrasi.net/
[bo]: http://bibliaolvaso.hu

Jelenleg csak a Károli bibliafordítás és ahhoz egy Ó- és Újszövetséget együtt követő olvasóterv érhető el, de tervbe van véve a Magyar Bibliatársulat fordítása is és további változatos olvasótervek. Később pedig angol fordítások és más nyelvű lokalizációk is várhatóak.

Szóval ha érdekel a Biblia, és szeretnéd egy év alatt végigolvasni, akkor *látogatsd meg az oldalt és iratkozz fel* valamilyen formában.

## Kulisszák mögött

Akit nem érdekelnek a technikai részletek, az nyugodtan kihagyhatja a hátralevő részt.

A hobbiprojekteknél mindig fontos szempont, hogy valami újat is kipróbáljak fejlesztés közben. Ebben az esetben egy halom újdonság került elő. Először is a projekt Edge Rails-re épül, amiben megtalálható [egy korábbi bejegyzésemben][2] már említett alkalmazás generáló sablon feature. Ami azt illeti épp ennek kapcsán készült el az [App LEGO][3] projekt.

[2]: http://lackac.hu/2008/12/31/rails-alkalmazas-legozas.html
[3]: http://github.com/lackac/app_lego

### Haml, Sass, Compass

Másodszor alkalmam nyílt kipróbálni a [Haml & Sass][4] párost is, és ha már így belejöttem, hozzávettem a [Compass][5] keretrendszert, ami a Sass-re építve ad nagyon jó mixineket és az ismertebb CSS keretrendszerek Sass interpretációját. Ezek közül a Blueprintet használtam a Bibliaolvasónál.

[4]: http://haml.hamptoncatlin.com/
[5]: http://github.com/chriseppstein/compass

A Haml és a Sass annyira megtetszett, hogy év elején elő is vettem cégen belül. Sikerült meggyőzni a technológiai vezetőséget, és már használjuk is a most indult projekteknél. A [Virgo Undercode][6] blogon várható egy bejegyzés, ahol ezeknek az eszközöknek az előnyeit mutatom majd be, illetve valószínűleg a budapest.rb meetupon is előkerül majd témaként.

[6]: http://www.virgo.hu/undercode/

### CouchDB

Az utolsó újdonság, amit kipróbáltam egy nagyon jó kis séma nélküli adatbázis. A [CouchDB][7]-ről annyit kell tudni, hogy nem relációs adatbázis, hanem egy nagyon ügyes *séma nélküli, REST elvekre épülő JSON adatformátumú adatbázis*. Teljesen másképp kell hozzáállni, mint a hagyományos relációs társaihoz. Itt nem táblák, sorok, azokban meg oszlopok vannak, hanem egyszerűen dokumentumok. Ebben az értelemben sokkal jobban illeszkedik a webhez, hiszen a legtöbb webes projekt is elsősorban dokumentumokra épül (blogbejegyzések, hírek, adatlapok, képek, videók, stb.).

[7]: http://couchdb.apache.org/

A dokumentumok sem sokban hasonlítanak egy relációs adatbázis valamelyik táblájának egy sorához. Sokkal összetettebbek lehetnek. Például lehet egy blogbejegyzés dokumentumom, aminek része a hozzá tartozó összes címke egy tömbként, illetve ugyanígy az összes kommentje is az összes róluk ismert információval együtt hashek tömbjeként.

Az adatok lekérése éppen ezért szintén másképp történik, mint a relációs esetben. A *CouchDB a MapReduce mintára épít*. Azaz egy lekérés úgy indul, hogy a Map fázisban az összes elemből kiszedjük a releváns információkat, majd az opcionális Reduce fázisban pedig ezeket összerakjuk valamilyen módon. A módszer hatalmas előnye, hogy a fázisok önmagukban párhuzamosíthatóak, egyszerre így egy lekérésén akár egy teljes szerverpark is dolgozhat. <del>Tulajdonképpen a Google keresője is ezen az elven működik, és a módszert is ők publikálták.</del> A MapReduce-t a Google mérnökei találták ki, a Google publikálta, és számos belső, terabájtokat megmozgató adatfeldolgozás megy MapReduce-szal. (helyesbítés by pts)

A CouchDB-ben *az algoritmusok JavaScript nyelven íródnak*. Fontos megjegyezni, hogy ezeket lehetséges, de általában nem érdemes on-the-fly létrehozni, mivel az egész adatbázis feldolgozása elég sok időt igénybe vehet. Ehelyett a CouchDB design dokumentumokkal dolgozik, amelyekben leírhatjuk, hogy milyen MapReduce algoritmusokat szeretnénk az adatbázisunkon használni. Így a CouchDB első használatkor készít egy teljes indexet, amivel aztán sokkal gyorsabban tud dolgozni. Sajnos annyira nem tudtam még utánanézni a témának, hogy teljesítménybeli összehasonlításokat is adjak, de önmagában a sokkal egyszerűbb és hatékonyabb skálázhatóság már meggyőző érv lehet.

A Bibliaolvasó esetében egyelőre persze nem ezek az előnyök vezéreltek, inkább csak a kísérletezés. Jelenleg az egész Biblia és az olvasóterv is CouchDB-ben van. A Biblia minden egyes fejezete külön dokumentum (elsőre így tűnt a legkezelhetőbbnek) és az olvasóterv ugyanebben az adatbázisban található különálló dokumentum. Későbbiekben az újabb fordítások külön adatbázisként hasonló módon lesznek felépítve. Lehet, hogy nem ez a legjobb megoldás, és már most is van egy-két trükkös lekérés, de ezt a területet egyelőre ízlelgetni kell. Ha kicsit több tapasztalatot sikerül összeszedni, akkor erről is várható egy mélyebb bejegyzés és talán egy előadás is valamelyik meetupon.
