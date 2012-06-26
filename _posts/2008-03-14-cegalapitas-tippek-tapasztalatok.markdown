--- 
created_at: 2008-03-14 01:40:00 +01:00
layout: post
tags: "ceg cegalapitas tippek"
title: "Cégalapítás tippek, tapasztalatok"
typo_id: 29
---
A cégalapítási terveim már nagyon régóta húzódnak. Mindeddig nem volt meg a megfelelő motiváció, hogy belevágjak, most azonban több dolog miatt is előnyösebb lenne céges keretek között folytatnom a munkáimat. Eredetileg úgy terveztem, hogy mivel nem értek a cégindításhoz szükséges dolgokhoz, és jó lenne tapasztaltabbaktól tanácsokat gyűjteni, ezért indítok egy blogot a témáról. Előbb twitteren indítottam el egy kérdést, és végül úgy alakult, hogy ennyi elég is volt az elinduláshoz.

Egy újabb blog indítása helyett ezért inkább itt fogom megosztani a tapasztalataimat. Igyekszem minden olyan dolgot leírni, ami számomra új volt, vagy ami nem egyértelmű. Emiatt lehet, hogy ezek a bejegyzések hosszabbak lesznek a szokásosnál. Remélem hasznosak lesznek majd valaki számára.

Kezdjünk bele.

Először is az alapok. Főként *webalkalmazás fejlesztéssel és tanácsadással* foglalkozom, és elkötelezett híve vagyok az [*agile fejlesztésnek*][16]. Főként [*Rubyt*][1], [*Railst*][2] és a feladatnak megfelelő *JavaScript* keretrendszert használok. Az utóbbi időben jellemzővé vált, hogy több projekten dolgozom párhuzamosan és ezek több ügyfélt érintenek. Néha pedig jó lenne néhány részfeladatot kiadni külső fejlesztőnek. Főként ezek az okok vezettek oda, hogy mostmár jó lenne mindezt egy cégen keresztül folytatni. Ezen túl pedig van néhány webalkalmazás ötletem, amihez érdemes lenne tőkét gyűjteni, beindítani, és majd meg is gazdagodni belőle :).

[16]: http://en.wikipedia.org/wiki/Agile_software_development
[1]: http://www.ruby-lang.org/en/
[2]: http://www.rubyonrails.org/

### Elindulás

Előre leszögezem, hogy nem fogok minden részletbe belemenni, és minden lehetőséget kivesézni, csak a saját tapasztalataimat írom le. Legtöbben azt ajánlták, hogy az ügyeket ne magam intézzem, hanem az egészet bízzam szakértőre (a tovȧbbiakban *ügyintéző*). Találtam két cegalapítással [foglalkozó][3] [céget][4], akiknél alaposan körbenéztem, illetve [Benedek][5] ajánlott egy hölgyet, aki tapasztalata szerint nagyon profin elintéz mindent.

[3]: http://www.cegalapito.hu/
[4]: http://www.cegalapitas.net/index.html
[5]: http://tothbenedek.hu/

> Ezzel a csajjal dolgozni viszont egy élmény, nekem két nap alatt megvolt minden. [...] nagyon durva volt, hogy a nő elém tolt 80 papírt, hogy írjam alá mindet [...] egyedül a bankszámláért és az aláírási címpéldányért kell elmenni, de az is egy nap alatt megvan.

Az árakat tekintve az *elektronikus gyorsított cégeljárás* éri meg leginkább. Ebben az esetben a társasági szerződés egy mintához kötött, így ez az út csak egyszerűbb esetekben járható. Én egy egyszemélyes Kft alapításába fogtam, így itt ezzel nincs probléma. Munkadíjjal, illetékekkel, aláírási címpéldányokkal egyben így a végösszeg 60 és 150 ezer forint között mozog. Én végül a Benedek által ajánlott hölgyet választottam, megbeszéltem vele egy időpontot és átbeszéltük a részleteket.

Mielőtt a találkozóra sor került volna képbe akartam kerülni az alapfogalmakat illetően. Ebben a [magyarorszag.hu kapcsolódó oldala][6] és a fent említett cégalapítással foglalkozó oldal [ismertetője][7] volt segítségemre. Alaposan végigolvastam mindent és kijegyzeteltem mindent, ami nem volt világos, hogy a kérdéseket a találkozó során fel tudjam tenni.

[6]: http://www.magyarorszag.hu/vallalkozas/ugyek/vallalkmuk/cegalap/kft20070827.html/ugyleirasjogi
[7]: http://www.cegalapitas.net/ujgt.html

### Cégforma

Van [Kkt][], [Bt][], [Kft][] és [Rt][]. Utóbbiból van nyílt és zárt, de ezekkel most itt nem foglalkozunk. Az első kettő jogi személyiséggel nem rendelkező, és legalább egy tag a teljes vagyonáig felelős a társaság tevékenységeiért. Épp ezért ezekről mindenki lebeszélt. Jelenleg a Bt és Kft között *pénzügyileg alig van különbség*. Alapításkor a Kft-nél van egy minimálisan 500 ezer forintos tőke szükséglet, de ezt bejegyzés után már fel is lehet használni. Ettől eltekintve viszont semmivel sem "drágább" egy Kft, mint egy Bt. Emiatt *érdemesebb inkább Kft-t* alapítani.

[Kkt]: http://hu.wikipedia.org/wiki/K%C3%B6zkereseti_t%C3%A1rsas%C3%A1g
[Bt]:  http://hu.wikipedia.org/wiki/Bet%C3%A9ti_t%C3%A1rsas%C3%A1g
[Kft]: http://hu.wikipedia.org/wiki/Korl%C3%A1tolt_felel%C5%91ss%C3%A9g%C5%B1_t%C3%A1rsas%C3%A1g
[Rt]:  http://hu.wikipedia.org/wiki/R%C3%A9szv%C3%A9nyt%C3%A1rsas%C3%A1g

### Név, tevékenységek, egyéb paraméterek

A **név** volt nagyjából az utolsó dolog, amit eldöntöttem, és még most sem végleges. A névtalálás mizériájában nagy segítség lehet [egy jó névgenerátor][8]. Nyilván olyan nevet kell választani, amely még nem foglalt. Pontosabban az nem baj, ha már létezik ugyanolyan nevű cég, csak ne legyenek a tevékenységekben átfedések. Az [e-cégjegyzékben][10] lehet ellenőrizni, hogy az általunk választott cégnév foglalt-e már. Emelett az internetes jelenléthez választanunk kell majd egy domain nevet, aminek a foglaltságát <code>.hu</code> TLD esetében a [domain.hu][12] oldalon ellenőrizhetjük.

[8]: http://lackac.hu/2008/03/11/veletlenszo-generator.html
[10]: https://www.e-cegjegyzek.hu/info/page/ceginfo
[12]: http://www.domain.hu/domain/domainsearch/

A **tevékenységek** összegyűjtése régebben úgy történt, hogy az összes elképzelhető tevékenységet felsorolták a társasági szerződésbe, mivel később újat hozzáadni a társasági szerződés módosítás miatt költséges volt. Ez az utóbbi időkben sokat változott. Már nem szükséges a tevékenységeket a szerződésbe foglalni, az új tevékenységeket elég csupán az apechnek bejelenteni. Emiatt nem érdemes az egész [TEÁOR-t][9] felsorolni, csak a valóban fontosakat. Érdemes 10 alá szorítani ezek számát, mert ha túl sok valójában nem használt tevékenység van, akkor ebből később gondok adódhatnak. Azt nem sikerült megtudni, hogy pontosan milyen jellegű gondok, valami "beszámolási kötelességet" említettek. Rosszul hangzik, mi?

[9]: http://www.cegalapitas.net/teaor03.htm

Egy hasznos tipp a tevékenységek összegyűjtéséhez, hogy érdemes megnézni a hasonló ismerős cégek és a konkurens vállalatok tevékenységeit. Ezt is az [e-cégjegyzékben][10] tehetjük meg könnyedén, ha nem zavar, hogy minden kattintás után egy captchát kell megfejteni. Aki viszont most készül céget alapítani, az figyeljen arra, hogy idén januárban változott a tevékenységek listája. Most a TEÁOR '08 az aktuális, emiatt talán hasznosabb csak ezt végigböngészni, és kiválogatni a szükségeseket.

Kell még egy **székhely** is, de ez lehet a saját lakhelyed is. Amennyiben nem saját tulajdonú, akkor a tulajdonostól kell hozzájárulás, hogy használhatod székhelyként. Mindenféleképp kell tulajdonlap, amit földhivataltól lehet beszerezni, de ezt jobb esetben az ügyintéző megteszi helyetted. Könyvelő tippje, hogyha saját lakás a székhely, akkor érdemes egy **telephelyet** is hozzávenni, hogy az irodai cuccok elszámolásába az apech ne köthessen bele. Például, ha otthonra veszel egy íróasztalt, és elszámolod költségként, akkor az apach beleköthet, hogy azt magán célra is használod. A telephely lehet egy barátod lakása is akár, ahol kijelöltök egy sarkot, hogy akkor azt hivatalosan te használod.

Most picit elmerengtem azon, hogy lesz-e nekem problémám abból, hogy ezt a tippet ide leírtam. Szóljatok, ha igen, és kiszedem. :)

Végül az induláshoz **tőke** is kell, ami Kft esetében minimum 500 ezer forint. Ennek egy része lehet nem pénzbeli hozzájárulás ún. *apport* is, ám ezt érdemes elkerülni, mert az apportként behozott dolgok értékeibe később beleköthetnek, és akkor meg lehet pereskedni. Amúgy is a tőkét bejegyzés után akár azonnal fel lehet használni.

### Könyvelő

Talán ezt a részt kellett volna első helyre tenni, mivel a cég későbbi élete szempontjából ez a legfontosabb. Szinte mindenkinek az volt a legelső tanácsa, hogy a könyvelőt válogassam meg a legjobban. Ezen *nem szabad nagyon spórolni*. Van az a könyvelő, aki szakképzett adatrögzítő módjára szépen elkönyveli a számláidat, adóbevallást készít, stb., de ezen túl nem sokat segít. És van az a könyvelő, aki már a legelső könyvelés előtt vagyonokat spórol meg neked azzal, hogy a tevékenységedhez igazítva hasznos tippeket ad, hogy mit hogyan számlázz és mit hogyan költs. Az ilyen könyvelő gondolkozva végzi a dolgát, és sokszorosan behozza a munkája árát. Ilyet érdemes keresni.

Itt is az ismerősök között való kérdezősködéssel kezdtem. Egy hasznos tipp a könyvelő választáshoz, hogy készíts vele "interjút". Az első találkozóra kérdésekkel felkészülve menj. Keress olyan nem triviális kérdéseket, amik úgy érzed, hogy a céged könyvelése során fontosak lesznek. Ilyeneket szintén ismerős cégek vezetőitől lehet szerezni. Ha ezekre olyan választ kapsz, hogy "Hát, ezt meg kell még néznünk..." és "Majd felhívjuk, hogy mit találtunk...", akkor lehet tudni, hogy más helyen kell keresgélni. Ezekkel a válaszokkal az a gond, hogy nem számíthatsz rá, hogy ha valahol spórolhattál volna 10%-ot, akkor ezt a könyvelőd észre fogja venni.

### Hasznos bölcsességek

A tapasztaltabb ismerősök mind elláttak néhány jótanáccsal. A legfontosabb ezek közül, hogy *nem szabad sohasem kapkodni*. Avagy [*Don't Panic*][11].

[11]: http://en.wikipedia.org/wiki/Don%27t_Panic_(Hitchhiker%27s_Guide_to_the_Galaxy)

Fontos tudni, hogy egy cég életében az első néhány év a legnehezebb. Az első év általában még veszteséges a sok kezdeti kiadás miatt. Az ajánlattételekhez ki kell számolni egy órabért, amennyi alá nem szabad menni. Ez az az ár, aminél nullszaldós vagy (havi fix költségek és a béreket fedezi). Ehhez kell még hozzászámolni a profitot. És még egy hasznos tanács Benedektől:

> Írj egy egyoldalas esszét magadnak arról, hogy *"hogyan fog a cégem egy év múlva havi nettó 2 millió forgalmat elkönyvelni"*

A tanácsokért, ötletekért hálás köszönetem a [magyar twitter ismerőseimnek][13], főként [Benedeknek][5] és [Bártházi Andrásnak][14]. Köszönet [Ambrus Andrásnak][15] is, a hasznos tanácsaiért.

[13]: http://turulcsirip.hu/
[14]: http://barthazi.hu/
[15]: http://www.europrofil.hu/

### Disclaimer

Mint ez már biztos kiderült, kezdő vagyok a témában, így a bejegyzésben található esetleges pontatlanságokért nem vállalok semmilyen felelősséget. Emellett szívesen fogadok minden pontosítást, észrevételt, jótanácsot és konstruktív kritikát itt kommentben, vagy pedig emailen.

Amint végére érek a cégalapítási mizériának várható egy következő bejegyzés, amiben összefoglalom az egész folyamatot.

Végül, ha valaki késztetést érez, hogy egy kezdő vállalkozást támogasson tetszőleges összeggel, akkor ne habozzon:

<form action="https://www.paypal.com/cgi-bin/webscr" method="post">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="image" src="https://www.paypal.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1">
<input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----
">
</form>
