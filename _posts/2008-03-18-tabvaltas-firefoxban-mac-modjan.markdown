--- 
created_at: 2008-03-18 02:27:00 +01:00
layout: post
tags: "firefox extension project prevnext"
title: "Tabváltás Firefoxban Mac módján [update]"
typo_id: 31
---
Sokáig nem tudtam eldönteni, hogy elsősorban Safarit vagy Firefoxot használjak-e böngészésre. Végül a Firefox mellett döntöttem, mivel nem tudtam meglenni a millió plusz egy kiterjesztés nélkül. A Safari féle tabváltás billentyűkombinációk viszont mindig is hiányoztak. Safariban az előző / következő tab a <code>Cmd+Shift+[</code> / <code>Cmd+Shift+]</code> billentyűkombinációkkal érhető el, ami azért nagyon kényelmes, mert egy kézzel le lehet ütni, szóval kézre áll, na. Ráadásul a legtöbb Apple alkalmazás szintén ezt használja (pl. az általam szintén gyakran használt Terminal is).


Próbálkoztam a [SwiftTabs][1] kiterjesztéssel, ami mindaddig jól is működött, míg át nem tértem Firefox 3 bétára. Végül úgy döntöttem, hogy megírom saját magamnak. Fogadjátok hát tőlem a *Prev/Next* Firefox 3 kiterjesztést. Ez létrehoz két menüelemet a <code>Window</code> menü alatt a tabváltáshoz, és ezen felül ezeket a fent említett standard mac-es billentyűkombinációkhoz rendeli. A dolog szépsége, hogy mivel menüelemként is implementálva van, ezért a Mac OS X System Preferencesben átállítható más tetszőleges billentyűkombinációra is.

**Telepítés**: [Prev/Next 1.0.1](https://lackac.hu/lab/prevnext/prevnext_1.0.1.xpi)

#### Update

Az 1.0.1-es verzió már támogatja a magyar billentyűzetkiosztást is. Később ha lesz időm, akkor mindezt Firefoxból konfigurálhatóvá fogom tenni.

[1]: https://addons.mozilla.org/en-US/firefox/addon/380
