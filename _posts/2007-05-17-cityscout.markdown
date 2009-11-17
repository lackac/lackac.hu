--- 
created_at: 2007-05-17 23:46:00 +02:00
layout: post
tags: "project cityscout symbian google_maps yahoo_maps"
title: "Fedezd fel a várost mobillal"
typo_id: 9
---
<img src="http://www.kitchenbudapest.hu/files/imagecache/page_teaser_image/files/teaser4kibu.png" alt="CityScout" class="sideimage" />

Végre elkészült amin az utóbbi pár héten dolgoztam. A mű nem más, mint egy mobil alkalmazás, amely a telefonodon jeleníti meg a közelben található [jó-helyeket](http://jo-hely.hu). Az alkalmazás neve *CityScout*, a továbbiaknál bővebb leírást a [projekt oldalán](http://cityscout.lackac.hu/) találsz róla angol nyelven.

A program jelenleg egy read-only jó-hely.hu mobil kliens, de reményeim szerint fejlődni fog. Amiben leginkább eltér a jó-helytől az
az, hogy ez nem Google Maps APIt használ, hanem a konkurens Yahoo Local APIját. Bár jobban kedvelem a Google térkép szolgáltatását, a probléma az vele, hogy csupán webre érhető el az API, azaz mobil alkalmazásba csak nagyon nehézkesen lehetne beépíteni. A Yahoo ezzel szemben kínál egy [Map Image APIt](http://developer.yahoo.com/maps/rest/V1/mapImage.html) is, ami nagyjából arról szól, hogy megmondom melyik koordináta érdekel, mekkora képet akarok, és milyen nagyításban, a Yahoo erre meg kiköp nekem egy GIF vagy PNG formátumú képet. Még mindig nem az igazi, mert pontokat és útvonalakat erre is macerás felvinni, de legalább megjeleníthető bárhol.

A CityScout az első nagyobb Symbian platformra írt programom, és talán nem is az utolsó. Bár a C++ fejlesztést nem szerettem meg nagyon -- főleg nem azt a dialektust, amit a Symbian konvenciók kényszerítenek a fejlesztőre -- viszont a mobil eszközök programozása már régóta érdekel. Ha minden jól megy, akkor az alkalmazás fejlődni fog. Terveket még nem árulok el, de ha van valami javaslat, akkor azt szívesen fogadok.
