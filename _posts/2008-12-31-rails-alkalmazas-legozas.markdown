--- 
created_at: 2008-12-31 11:36:00 +01:00
layout: post
tags: "rails edge lego project"
title: "Rails alkalmazás legózás"
typo_id: 63
---
<img src="/images/app_lego.png" alt="LEGO pieces" class="sideimage"/>

Edge Railsben elérhető egy olyan funkció alkalmazás generáláskor illetve később rake taszkként, aminek a segítségével valamilyen sablonon keresztül jobban tudjuk befolyásolni, hogy milyen legyen az induló alkalmazásunk. Az *application template*-ekről [Pratik írt egy hosszabb ismertetőt][1], kezdésnek azt érdemes elolvasni. A template rendszer alkotója, Jeremy McAnally pedig összerakott egy [template kollekciót][2], amiből könnyen ki lehet indulni, ha sajátot szeretnénk írni.

Ezt tettem én is, amikor a tegnapi nap során összeraktam egy saját, modulokra bontott template kollekciót. A neve [App LEGO][3]. Az *App LEGO* segítségével a generálás során dönthetünk, hogy melyik sablonokat akarjuk alkalmazni. További információkért katt a linkre.

Ez a sablonos [sic!] megoldás nagyon meg tudja könnyíteni az alkalmazásfejlesztés kezdeti lépéseit. Aki már több mint két Rails alkalmazáson túl van, tudhatja, hogy miről van szó. Egy idő után már gépiesen végzett dolgokról, mint repository létrehozás, felesleges fájlok kitörlése, mindig használt pluginek telepítése, alap layout megalkotása, RSpec, jQuery és egyéb közepesen nagy átalakításokkal járó dolgok belövése, konfigurációk beállítása, és így tovább. Most elég ezeket egyszer megírni és onnan használni.

Az App LEGO repositoryt lehet szabadon forkolni, és tovább bővíteni. **A jobb ötletekről küldjetek pull requestet!**

[1]: http://m.onkey.org/2008/12/4/rails-templates
[2]: http://github.com/jeremymcanally/rails-templates/tree/master
[3]: http://github.com/lackac/app_lego
