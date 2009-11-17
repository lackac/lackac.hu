--- 
created_at: 2007-10-23 23:37:00 +02:00
layout: post
tags: "ruby twitter index hpricot howto"
title: "Index percről percre twitteren"
typo_id: 15
---
Előbb egy kis kitérő. Elég régóta nem írtam ide semmit, és ezt sajnálom. Ez a blog eredetileg Rubyról és Railsről akart szólni, de pont miután elindult úgy alakult az életem/munkám/projektjeim, hogy ezekkel keveset foglalkoztam, és kicsit le is vagyok maradva. Viszont tegnap kibírhatatlanná váltak az elvonási tünetek, és így kapóra jött ez a kis ujjgyakorlat.

Az Index percről percre rovatait biztosan ismeri mindenki. Olyanok, mint például amiket most írnak az [okt. 23-i zavargásokról](http://index.hu/politika/belfold/pp07okt23/). Már nem is tudom ki vetette fel, hogy milyen jó lenne ezeket twitteren megkapni. Mindig is zavart, hogy ezeket nem lehet rendesen követni, így hát nekifogtam a projektnek, és pár óra alatt el is készült a [twitteres tükre](http://twitter.com/pp07okt23) az Index rovatának.

#### Probléma

A percről percre rovatok nem kerülnek bele az Index rss feedjeibe, és sehol sem sikerült olyan feedet találnom, ami ezeket bárhogy is tartalmazná. Amennyiben létezne ilyen, úgy a probléma megoldása a [twitterfeed.com](http://twitterfeed.com/) szolgáltatásának alkalmazásával triviális lenne (ahogy ezt eszpee is [megmondta](http://turulcsirip.hu/perma/357547072/)). Ennek hiányában írtam egy egyszerű Ruby szkriptet, ami mindig letölti a rovat első oldalát, megkeresi a legutóbb twitterre csiripelt bejegyzést, és az annál újabbakat elcsiripeli.

#### Megoldás

Az egész kódot nem fogom elmagyarázni, akinek kedve van hozzá [letöltheti](http://gist.github.com/236071). Amit érdemes tudni róla, hogy a html feldolgozásához a [Hpricot](http://code.whytheluckystiff.net/hpricot/) gemet használja. Ez gyakorlatilag egy xml feldolgozó erejével rendelkező html parser. Segítségével lehet XPath és CSS alapján is keresni a html struktúrában, és módosítani, javítani is lehet a dokumentumot. Ezen kívül a [twitter gemet](http://twitter.rubyforge.org/) használtam még, mivel ezzel sokkal egyszerűbb a csiripelés, mintha saját magam találnám fel a spanyol viaszt.

Pár szó még a problémákról, amelyekbe beleütköztem. Először is a twitter 140 karakteres limitje. Ennél a percről perce bejegyzései néhányszor nagyobbak. Általában 3-4 csirip egy bejegyzés. Emiatt ezeket csiripelés előtt fel kellett darabolni. Ezt megtoldottam egy pár másodperces késleltetéssel a csiripek között, hogy nagyobb valószínűséggel kerüljenek megfelelő sorrendben a twitterbe. A késleltetés nélkül sokszor össze-vissza jöttek a bejegyzések részei.

Az Index oldalának letöltéséhez hibakezelést kellett rakni. Ez talán alapvető mindenkinek, én mégis kispóroltam először, amíg rá nem jöttem, hogy hálózati kapcsolat használatakor ez kötelező.

#### Használat

A használatról pár szót még. Ha valaki alapvető Ruby ismeretek nélkül szeretné kipróbálni, annak egy Ruby és Rubygems telepítésen, és a hpricot és twitter gemek telepítésén kell túlesnie. Ezután már gyerekjáték a szkript használata. Három paramétert vár: az Index percről percre rovat url-jét, a twitteres user-t és hozzá a jelszót. Opcionális negyedik paraméterként meg lehet adni, hogy hány másodpercenként nézze meg az Index oldalt új bejegyzések után kutatva.

A szkript jelenleg a szerveremen fut, és úgy tűnik már elég stabil. Esetleges bugreportok jöhetnek a hozzászólásokban, emailen vagy twitteren.
