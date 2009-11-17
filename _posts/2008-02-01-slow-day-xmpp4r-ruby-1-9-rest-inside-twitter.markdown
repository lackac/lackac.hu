--- 
created_at: 2008-02-01 01:59:44 +01:00
layout: post
tags: "misc xmpp4r jabber ruby"
title: "Slow day: XMPP4R, Ruby 1.9, REST, Inside Twitter"
typo_id: 17
---
A mai napra nem volt sok teendőm, így elővettem a [Someday listámat][1] és elkezdtem szemezgetni belőle. Sor került xmpp gem kipróbálásra, Ruby 1.9 telepítésre, REST Webservice videóra és Twitter főhadiszállás bemutatóra.

[1]: http://neonomad.hu/2008/01/09/szegeny-ember-gtdje/

## XMPP4R

Kezdjük egyből a legérdekesebbel. A héten olvastam valahol az [XMPP4R][2] Ruby gemről, és gondoltam most ki is próbálom. Az XMPP ismertebb nevén Jabber egy nyílt Instant Messaging protokoll. Ezt használja például a GTalk is. Ennél bővebben azonban nem megyek bele, ezt a témát inkább meghagyom [Aadaamnak][3].

Az xmpp4r Ruby gem segítségével pedig ezt a protokollt tudjuk egyszerűen használni alkalmazásainkban. Írhatunk vele chat klienst, vagy [Twitterhez][4] hasonlóan webalkalmazás APIt.

Az elinduláshoz a [RubyFleebie postját][5] használtam, de csak óvatosan vele, mert nem minden működik benne rendesen. Érdemesebb talán a [gem dokumentációját][6] kézbe venni.

## Ruby 1.9

Karácsonykor jelentette be Matz, hogy elérhető a Ruby 1.9. Ez nem egy stabil kiadás, hanem fejlesztői verzió, amit azonban mindenkinek érdemes kipróblálni. Ez a verzió hozza az eddigi verzióváltások közül a legnagyobb változásokat. Az újdonságok között ott van a nagyságrendekkel gyorsabb futtatást lehetővé tevő YARV Virtual Machine, String encoding támogatás, beépített RubyGems és Rake, valamit sok szintaktikai változás.

Az elinduláshoz ajánlom [Bruce Williams postját][7] és a [followupot][8].

## REST

A RESTful webservices témával ismerkedőknek lehet hasznos a [The Future of Web Services][9] előadás, amit Gregg Pollack tartott. Személy szerint sok újdonságot nem találtam az előadásban, viszont tetszett, hogy az előadó mellett a slideok is megjelentek a videón.

## Inside Twitter

Kicsit más vizekre evezve a <tt>Movies/ToWatch</tt> könyvtáramból megnéztem a Scobleshow egy epizódját, amelyben a [Twitter főhadiszállás][10] kerül bemutatásra. Régóta kiváncsi voltam rá, hogy nézhetnek ki belülről, és igazsság szerint ez a videó már jóideje ott csücsült a gépemen. Eddig azonban nem sikerült rávegyem magam arra, hogy végig is nézzem. Ma este viszont beizzítottam MPlayerben 1,25x-ös sebességget megadva. Így majdnem tíz perccel kevesebb időbe került megnézni és a hangjuk is sokkal viccesebb.

[2]: http://home.gna.org/xmpp4r/
[3]: http://jabbermania.blogspot.com/
[4]: http://blog.twitter.com/2006/11/twitters-jabber-support-released-under.html
[5]: http://www.rubyfleebie.com/im-integration-with-xmpp4r-part-2/
[6]: http://home.gna.org/xmpp4r/rdoc/
[7]: http://codefluency.com/articles/2007/12/02/it-s-time-to-play-with-1-9/
[8]: http://codefluency.com/articles/2007/12/03/syntax-changes-in-1-9/
[9]: http://www.railsenvy.com/2007/12/17/the-future-of-web-services
[10]: http://www.podtech.net/scobleshow/technology/1588/an-inside-look-at-twitter
