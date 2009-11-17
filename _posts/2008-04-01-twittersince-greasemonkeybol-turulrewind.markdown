--- 
created_at: 2008-04-01 20:18:57 +02:00
layout: post
tags: "turulcsirip twitter greasemonkey project"
title: "Twittersince Greasemonkeyból: TurulRewind"
typo_id: 33
---
Szűk egy hete a legfrissebb Turulcsirip üzenetek követését [tettem lehetővé][1] egy Firefox kiterjesztés és egy Greasemonkey szkript kombinációjával. A mai szkript ezzel szemben a régebbi üzenetek könnyebb áttekintését teszi lehetővé. A **TurulRewind** egy olyan Greasemonkey szkript, ami képes visszatekerni a Turulcsiripet a legutolsó üzenetedig.

**Telepítés**: [TurulRewind 0.1](http://lackac.hu/lab/turulrewind.user.js)

[1]: http://lackac.hu/2008/03/26/rendszeruzenetek-firefoxbol-es-turulcsirip-growl.html

### Mit?

A szkript a Turulcsirip főoldalán tetszőleges módban az oldal aljára rak egy *Rewind* feliratú linket. Erre kattintva a csirip lista aljára berakja a korábbi csiripeket, egészen addig, amíg nem talál köztük egy saját csiripet. Ugyanakkor pedig ezekkel együtt a friss csiripek is fixen ott maradnak az oldalon, akkor is ha új üzenet érkezik. Azok a lista tetejére kerülnek, de nem 'túrnak' ki régebbi csiripeket.

### Miért?

A történet ott kezdődött, hogy Szántó Gábor elkészítette a [Twittersince][2] Twitter mashupot, ami azt tudja, hogy kilistázza a barátaim összes üzenetét egészen az én legutolsó üzenetemig. Emellett a listából csinál szófelhőt és kiszedi a linkeket is. Ez tetszett is mindenkinek, csak hát nem a legkényelmesebb ehhez egy külön oldalt meglátogatni, ahol újra meg kell adnom a felhasználónevem és jelszavam. [Eszpee ötlete][3] volt, hogy ebből érdemes lenne egy Greasemonkey szkriptet készíteni.

[2]: http://twittersince.imect.com/
[3]: http://twitter.com/eszpee/statuses/558498062

A *TurulRewind*nak van több előnye is a Twittersince-hez képest, azon túl is, hogy itt nem szükséges újra bejelentkezni. Mindig zavart, hogy ha kíváncsi vagyok arra, hogy mi történt a barátaimmal twitteren, és ezért azt tervezem, hogy hazaértemkor visszapörgetem az eseményeket, akkor nem merek út közben twitterezni. Hiszen ha írok valamit mondjuk mobilról, akkor már nem tudom használni a Twittersince-et, mert csak eddig a pontig tudna így visszamenni. A *TurulRewind* ezzel szemben addig megy vissza amíg a Turulcsirip engedi (Benedek információja szerint ez egy hét). Mindössze annyit kell tenni, hogy miután visszatekerte az oldal a csiripeket valamelyik üzenetedig, újra rákattintasz a *Rewind* linkre az oldal legalján.

Mindössze pár óra alatt dobtam össze a szkriptet (ha nem számítjuk bele a másik pár órás bug vadászatot), nyilván előfordulhatnak olyan hibák, amiket nem vettem észre. Szóljatok, ha ilyet találtok.
