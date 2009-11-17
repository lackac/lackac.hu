--- 
created_at: 2008-02-17 14:11:00 +01:00
layout: post
tags: "gheat heatmap geocaching"
title: "Geocaching hőtérkép GHeat-tel"
typo_id: 21
---
[Gazs][] hívta fel a figyelmem a [GHeatre][1], ami egy hőtérkép készítő alkalmazás Google Mapshez. Később még [csokit is felajánlott][2] annak, akinek a szerverén ezt kipróbálhatja. Mivel amúgy is érdekelt a dolog, gondoltam adok neki egy próbát.

A teszteléshez adatok is kellettek, amihez egy kis keresgélés után a magyar geocaching közösség adatbázisát választottam. A [geocaching.hu][3] oldalról letölthető ládapozíciók alapján készítettem egy olyan hőtérképet, amelyen látható, hogy hol mennyire aktív a geocaching mozgalom.

[Gazs]: http://bergengocia.net/
[1]: http://code.google.com/p/gheat/
[2]: http://turulcsirip.hu/perma/713259472
[3]: http://geocaching.hu


A nehézséget az okozta, hogy a program Pythont használ, és a szintén Python alapú [Aspen][4] webszerveren fut. Emiatt először néhány dolgot fel kellett még telepíteni a szerverre, de ez után már tesztelhető volt a rendszer.

A pontadatbázis generálása sem volt zökkenőmentes, mert a GHeat egyelőre eléggé béta állapotú, de pár sor python kódolás után már elfogadhatóan működött ez is. Tegnap este egy közös hackelés során pedig még a megjelentítésen is finomítottunk Gazzsal. Az eredményt a [cachheat.lackac.hu][5] címen lehet megtekinteni.

Gazs amúgy a magyarországi szélessávú előfizetések elterjedtségéről készített hőtérképet: [Szélessávú előfizetők Magyarországon, 2007][6].

[4]: http://www.zetadev.com/software/aspen
[5]: http://cachheat.lackac.hu
[6]: http://bergengocia.net/szelessav/
