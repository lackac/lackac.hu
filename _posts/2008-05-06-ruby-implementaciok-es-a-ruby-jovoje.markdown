--- 
created_at: 2008-05-06 01:25:54 +02:00
layout: post
tags: "ruby jruby rubinius ironruby macruby yarv"
title: "Ruby implementációk és a Ruby jövője"
typo_id: 41
---
A hosszú hétvégém kicsit másképp alakult, mint [ahogy terveztem][1], így nem jutott még időm jobban belemélyülni a JRuby rejtelmeibe. Ehelyett elolvastam Charles Nutter szép hosszú írását a [különböző Ruby implementációk ígéreteiről és veszélyeiről][2]. Charles, aki a JRuby egyik fejlesztője, a cikkben a főbb Ruby implementációk történetét, jelenlegi állapotát és jövőjét elemzi. Ajánlom mindenkinek, akit kicsit is érdekel a téma, érdekes és hasznos olvasmány.

[1]: http://lackac.hu/2008/04/29/minden-hetre-egy-uj-dolog.html
[2]: http://headius.blogspot.com/2008/04/promise-and-peril-for-alternative-ruby.html

<del>Röviden</del> Összefoglalom, hogy mik a fő meglátásai. Egy implementáció életében szingularitásnak tekinthető, amikor képes gond nélkül futtatni Rails keretrendszerre épülő alkalmazásokat. Egyrészt mivel erről szól ma a Ruby világ nagy része, másrészt mert ez magával vonz más sok hasznos dependenciát is (IRB, RubyGems, Rake). Ennél talán lényegesebb szingularitás definíció lehet egy implementáció életére nézve, amikor ezt képes a Ruby 1.8 sebességénél gyorsabban megtenni.

A [**Ruby 1.8**][3] (MRI, Matz Ruby Interpreter) jelenleg a kvázi sztenderd implementáció. Azért csak kvázi, mivel nincs hivatalos specifikáció (de erről majd később). Lassú, nincs natív szálkezelés és nagy a memóriaigénye. Mégis ez a legelterjedtebb, erre készülnek elsősorban az alkalmazások, ezzel kompatibilisek a gemek. Sok Rails skálázási probléma visszavezethető a Ruby 1.8 hiányosságaira. Idővel azonban ez az implementáció idejétmúlt lesz, a fejlesztők továbblépnek, és egy szebb világ köszön ránk.

[3]: http://www.ruby-lang.org/

A [**Ruby 1.9**][4] fejlesztésénél nagy hangsúlyt fektettek a Ruby 1.8 fent említett hátrányaira. Beépítették a *YARV* ("Yet Another Ruby VM") Bytecode alapú futtató motort, ami Koichi Sasada munkája. Van több szintaktikai újítás is, normális Unicode támogatás, de a Ruby jövője szempontjából sokkal fontosabb az új memória modell és a Bytecode alapú futtatás. A Ruby 1.9 azt jelképezi, ahova a többi implementáció kell majd valamikor eljusson. Már most gyorsabb az 1.8-nál és gyakorlatilag használható állapotban van. Még mindig mozgó célpont, sok dolog még nincs véglegesítve, de jelenlegi állapotában elmondható róla, hogy nagyjából elérte a második szingularitást. A Ruby 1.9 problémája, hogy bár gyors, még mindig nem eléggé. Teljes alkalmazásokon tesztelve a sebességnövekedés általában nem éri el még az 50%-ot sem.

[4]: http://www.ruby-lang.org/en/community/ruby-core/

A [**JRuby**][5] egy Java alapú Ruby implementáció. Szinte teljes egészében kompatibilis a Ruby 1.8 implementációval, és a fejlesztők több dolgot is átvettek az 1.9-ből. Szintén képes nagyobb Rails alkalmazásokat futtatni. Gyorsabb, mint az 1.8 interpretált és fordított módban is. Interpretált módban nagyjából 15-20%-kal, fordított módban többszörösen gyorsabb. Mivel a JVM-re épül, annak a objektum modelljét, Garbage Collector-át és bináris reprezentációját használja. További előnye a JVM alapoknak, hogy képes Java osztályokkal is kommunikálni, ami előny nagyvállalati környezetben való alkalmazáskor.

[5]: http://jruby.codehaus.org/

Az alternatív implementációk közül a JRuby áll a legjobb helyen, és nem csak a stabilitás, gyorsaság és kompatibilitás területén, hanem a fejlesztői aktivitás területén is. Két fő fejlesztője 2006 óta a Sun alkalmazásában dolgozik főállásban a projekten. Charles a cikkben a JRuby 2.0-át teljes Java integrációval év végére jósolja.

Fejlettségét tekintve a JRubyt a [**Rubinius**][6] követi. Evan Phoenix által indított projekt célja egy olyan Ruby implementáció elkészítése, ami minél nagyobb részben Rubyban íródik. A kód nagy részét a sebesség vagy néhol a kód függőségek miatt kénytelenek C-ben írni, így jelenleg nagyjából 50-50% a két nyelv aránya. Ez nyilván a Ruby oldalára dönti a mérleg nyelvét, hiszen ugyanannyi sor forráskód Rubyban sokkal többet tud kifejezni, mint C-ben.

[6]: http://rubini.us/

A Rubinius ígérete, hogy ha sikerül kompatibilissé tenni, és gyorsabbá, mint az 1.8, akkor ez akkár jobb implementáció lehet az 1.9-nél is. Mivel a kód nagy része Rubyban van, ezért ha elérik, hogy a Ruby kód gyorsan fusson, akkor az ezekre is hatással lesz. A Rubinius veszélyei a legnagyobb előnyéből fakadnak. Míg a kompatibilitással nagyon nem lesznek gondjaik, addig a teljesítménnyel kapcsolatban nagy kihívások elé néznek.

Tavaly az [**IronRuby**][7] implementáció bejelentése villanyozott fel. Ez egy .NET alapú implementáció, és ebben a tekintetben hasonlít a JRuby projektre. A fejlesztést a Microsoft indította, bár a kódba beemelték egy korábbi .NET alapú implementáció, a Ruby.NET lényegi részeit. Az IronRuby az IronPythonhoz hasonlóan a Microsoft DLR-jére épül (Dynamic Language Runtime), aminek a segítségével könnyen lehet .NET-en futó dinamikus nyelv implementációkat készíteni. A projekt a Microsoft OSS licensze alatt fut, de sajnos a fejlesztés nem folyik hagyományos Open Source szellemben. Főként néhány MS fejlesztő dolgozik rajta, akiket John Lam vezet, a meetingek zárt falak mögött folynak, és a forráskódhoz sincsen "élő" hozzáférés.

[7]: http://www.ironruby.net/

Az IronRuby segítségével lehetőség lesz Windows Desktop alkalmazások fejlesztésére is. Silverlightra már most is lehet fejleszteni. Ezzel együtt az IronRuby legnagyobb ígérete egy gyors és jól használható Windows alatt futó Ruby implementáció. A Windows eddig a mostohagyerek szerepét töltötte be a Ruby világban. Én pár éve próbálkoztam egyszer Windowson Railst futtatni, de egy napi szenvedés után feladtam. Valamit sikerült összehozni, de közel se éreztem magam olyan otthonosan a kialakított fejlesztőkörnyezetben, mint Linuxon vagy MacOSX-en.

> Windows support in Ruby has always lagged behind UNIX support, partially because Windows "sucks" for various definitions of "sucks".

Kompatibilitás tekintetében sokat kell még a projektnek fejlődnie. Még messze áll attól, hogy Railst tudjon futtatni. Sebesség tekintetében viszont hasonló eredményeket érhet el, mint a JRuby.

A főbb implementációk közül az utolsóként említett meglepett. A [**MacRuby**][8] az Apple alkalmazásában álló Laurent Sansonetti műve, és célja egy olyan Ruby 1.9-re alapozott implementáció, mely Objective C környezetben fut. Az eddigiek közül erről még nem hallottam, viszont igazán ígéretesnek tartom. A Ruby 1.9-re alapozás érdekes választás, hiszen az 1.9 még sokat változhat a jövőben, másrészt viszont érhető, mert így annak sok előnye megtartható. A MacRuby leginkább a JRubyhoz, vagy az IronRubyhoz hasonlítható. Ez egy olyan implementáció, ami sok előnyt kovácsolhat a Objective C környezetbe való integráltságból. Valószínűleg gyorsabb lesz az 1.9-nél is, és segítségével sokkal egyszerűbben lehet majd MacOSX alkalmazásokat (akár iPhone alkalmazásokat?) fejleszteni.

[8]: http://trac.macosforge.org/projects/ruby/wiki/MacRuby

Jelenlegi állapotában még nem képes nagyobb alkalmazásokat futtatni, és távol áll attól, hogy Railst futtasson, de ahogy valaki a kommentek között rámutat, a MacRubynak nem a gyorsabb Rails futtatás lesz a legnagyobb előnye, hanem a szoros integráció a MacOSX rendszerrel.

#### Záró gondolatok

Valamelyik blogon pár hónapja olvastam egy kritikát a sok implementáció negatív hatásairól (most nem találom a cikket). Már akkor sem értettem teljesen, hogy miért lenne probléma a sok különböző implementáció. Egyrész mindegyiknek megvan a maga felhasználási területe, másrészt nagy előnye ezeknek a projekteknek, hogy a különböző implementációk fejlesztői együtt dolgoznak egy [Ruby specifikációs projekten][9], amivel elkerülhetők a inkompatibilitási problémák.

Véleményem szerint ezek a projektek együtt fejlődve tovább finomítják a nyelvet, és stimulálják a Ruby közösséget. A fejlesztők közötti egészséges versenyszellem pedig szintén a közösség javára válik, akik stabil és gyors implementációkat kapnak minden fontosabb környezethez.

Egy későbbi bejegyzésben mindenféleképpen visszatérek a JRubyra. Azért is érdekel a téma, mert lehet hogy lesz jövője a Virgos munkám során is, lévén ők eddig leginkább Java és .NET rendszereken dolgoztak. És ha már kísérletezgetek, vetek egy pillantást majd a MacRuby projektre is.

[9]: http://blog.emptyway.com/2008/04/27/the-value-of-the-rubyspecs/
