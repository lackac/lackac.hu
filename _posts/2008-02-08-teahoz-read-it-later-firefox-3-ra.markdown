--- 
created_at: 2008-02-08 15:29:00 +01:00
layout: post
tags: "firefox extension project teatime"
title: "Teához: Read It Later Firefox 3-ra"
typo_id: 20
---
Biztos előfordult már veled is, hogy egy rakás érdekes cikket találtál böngészés közben, de épp nem volt időd elolvasni. Nálam ilyenkor egyre csak gyűlnek a nyitott tabok Firefoxban. Ez egy idő után nagyon frusztráló tud lenni, és ráadásul amikor jut is időm elolvasni valamit, a tabok végtelen sorából nem tudom mit válasszak.

[Wyctim ájánlotta][1] twitteren a [Read It Later][2] Firefox kiterjesztést, ami meg is oldotta volna a problémát, de ekkor már Firefox 3 bétát használtam. A legújabb Firefox verzióban teljesen ujjászületett a könyvjelző rendszer *Places* néven, és emiatt ez a kiterjesztés nem működött. Amúgy is rég ki akartam próbálni a Firefox Extension fejlesztést, és most itt az eredmény: **TeaTime**.

[1]: http://turulcsirip.hu/perma/633003062
[2]: http://www.ideashower.com/ideas/launched/read-it-later/

## A türelmetleneknek

**Telepítés:** [TeaTime 1.0b1](https://lackac.hu/lab/teatime/teatime_1.0b1.xpi)

Jelenleg még nincs update lehetőség beépítve, és előfordulhatnak apróbb hibák. A Firefox 3b2-ben még mindig elég bugos a Places, így *ajánlatos telepítés előtt a könyvjelzőkről egy biztonsági mentést készíteni*. Bármilyen észrevételt szívesen fogadok.

## Működés

A TeaTime a Firefox 3 könyvjelzőit használja fel olvasólistának, és ezek közül választ egy véletlen elemet a felhasználó számára. Firefox 3 alatt az oldalak url-je mellett, ott ahol az RSS ikon is meg szokott jelenni van egy *csillag ikon*, amire kattintva egyszerűen lehet bookmarkolni (magyarul?) egy oldalt. Ilyenkor a bookmark az "Unfiled Bookmarks" könyvtárba kerül. A kiterjesztés egyrészt ebből a könyvtárból válogat véletlenszerűen, másrészt az összes 'later' taggel megjelölt könyvjelző közül.

A <tt>Command</tt> (Windowson <tt>Control</tt>) billentyű nyomva tartásával az oldal új tabban nyílik meg. A toolbar ikon melletti kis nyíl segítségével pedig az egész olvaslistát meg tudjuk jeleníteni. Azok is kényelemben érezhetik magukat, akik a billentyűzettől nem szívesen mozdítják el a kezüket. Bookmarkolni így is lehet, az olvasó funkciót pedig a <tt>Cmd+E</tt> (Windowson <tt>Ctrl+E</tt>), új tabhoz pedig <tt>Cmd+Alt+E</tt> (Windowson <tt>Ctrl+Alt+E</tt>) billentyűkombináció segítségével érhetjük el.

## Elnevezés

Általában olyankor szoktam régóta tartogatott cikkek olvasásába belekezdeni, amikor kis pihenőt tartok a munkából. Más ilyenkor kávézik (vö. [Webisztán kávéhoz rovat][3]), de én nem szeretem a kávét, így inkább teázok. Szóval innen született a név.

## Fejlesztés

A fejlesztés egy egyéjszakás projekt volt. Ennyi kellett ahhoz, hogy *nulla* Firefox Extension fejlesztési tapasztalattal (de erős JavaScript, XML ismeretekkel) indulva ez elkészüljön. A következő oldalak voltak nagyon hasznosak fejlesztés közben:

* induláshoz [a legrövidebb Firefox Extension fejlesztési tutorial][4],
* egy nagyon hasznos [kiterjesztés vázat generáló eszköz][5],
* és persze a [hivatalos fejlesztői dokumentáció][6].

## Disclaimer

Ez az első Firefox kiterjesztésem. Lehetnek vele apróbb hibák (talán nagyobbak is). Ehhez mérten kezeljétek. Azért igyekeztem letesztelni amennyire lehetett. Vegyétek úgy ezt, mint egy publikus béta tesztet, amire meghívok mindenkit. Várom a visszajelzéseiteket! Addig is készül a honlap a kiterjesztés számára (nem akar vki megajándékozni egy single-column layout-tal?).

[update] a fenti telepítő link mostmár nem a letöltést indítja el.

[3]: http://webisztan.blog.hu/tags/k%C3%A1v%C3%A9hoz
[4]: http://www.devilsworkshop.org/2007/09/28/shortest-tutorial-for-firefox-extensiontoolbar-development/
[5]: http://ted.mielczarek.org/code/mozilla/extensionwiz/
[6]: http://developer.mozilla.org/en/docs/Extensions
