--- 
created_at: 2008-04-16 00:18:00 +02:00
layout: post
tags: "css hack ie7 tip"
title: "Napi CSS tipp"
typo_id: 35
---
Mostanában kicsit többet szívok az IE6 és IE7 sajátos CSS és JavaScript implementációja miatt. Az egyszerűbbeket szerencsére már csuklóból javítom, de ez a két böngésző mindig meglep valami újdonsággal. Mai munkám során a [vinobilia.com][1] fejlécét javítgattam, ahol egy érdekes IE7 bugba ütköztem. A fejléc jól nézett ki a legtöbb böngészőben, de IE7 alatt az egyik háttér elcsúszott.

[1]: http://vinobilia.com

<div class="centered"><img src="http://img.skitch.com/20080415-grw4tk16qd1y3ied9wt98px6kk.jpg" alt="ie7 bug in vinobilia.com header"/></div>

Egy kis találgatás után sikerült rájönni, hogy a háttérrel rendelkező adott html elemhez rendelt <code>padding</code> érték miatt tolódik el a kép, de azt nem sikerült megfejteni, hogy ezt mi okozza. Szóval ha a kedves olvasó hasonló helyzetben találná magát, és reménytelenül boklászik az interneten megoldás után kutatva, tegyen egy próbát a következő CSS paraméterrel:

{% highlight css %}
div.header {
  zoom: 1;
}
{% endhighlight %}

És láss csodát, a háttér viszakerült a helyére. Persze ezt az egészet szépen elrejtettük, hogy csak az IE7 lássa. Egyéb mellékhatást még nem sikerült felfedezni. Ja, és ha valaki esetleg tudja, hogy az adott bugot mi hozza elő, akkor ne felejtse kommentben velem is megosztani.

Mai CSS hacker rovatunkat olvasták. <del>Függöny.</del>
