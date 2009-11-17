--- 
created_at: 2008-06-10 11:28:24 +02:00
layout: post
tags: "greasemonkey project netpincer"
title: "Nemkívánatos ételek szűrése Netpincéren, Greasemonkey script"
typo_id: 51
---
Nem eszek sertéshúst. Meg néhány más húst sem. Akit jobban érdekel, hogy miért nem, az [Mózes 3. könyvében a 11. fejezetben][1] megtalálja a magyarázatot. Szóval eléggé zavar, amikor netpincéren egy több oldalas listában kell végigböngésznem, hogy mi az ami jó nekem.

[1]: http://biblia.biblia.hu/read.php?t=1&b=3&c=11&v=0&vs=

Ennek megkönnyítésére csináltam egy Greasemonkey Scriptet, ami kiszedi azokat a sorokat, amik biztos nem lesznek jók. Látva a twitteres lelkesedést a szkript iránt ezt itt is elérhetővé teszem. Mások is használhatják, hogy mondjuk kiszűrjék az ananászt, tengeri herkentyűket, etc. tartalmazó ételeket.

**Telepítés**: [Netpincer 0.1][2]

[2]: http://lackac.hu/lab/netpincer.user.js

Beállítható, hogy milyen összetevőkre szűrjön a szkript. Ezt az <a href="about:config">about:config</a> oldalon lehet megtenni. Érdemes előtte, de már a szkript telepítése után legalább egyszer meglátogatni a [Netpincér][3] oldalát. Ekkor elérhető lesz egy <code>greasemonkey.scriptvals.http://lackac.hu/Netpincer.pattern</code> nevű beállítás, amit át kell állítani arra, ami nekünk tetszik. Ez lehet egy vesszővel elválasztott lista azokról, amiket nem szeretünk, vagy egy reguláris kifejezés. Például "sonka, ananász, csiga" v. "/sonk[aá]|ananáss?z|csig[aá]/i". A példában említetthez hasonló konverziót a vesszővel elválasztott listán végrehajtok, így reguláris kifejezést az ennél bonyolultabb szűrésekhez érdemes csinálni.

[3]: http://netpincer.hu/

Tapasztalatokat, feature requesteket kommentekbe írjátok.

