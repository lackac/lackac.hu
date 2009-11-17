--- 
created_at: 2008-05-30 00:38:57 +02:00
layout: post
tags: "heroku rails appengine"
title: "Heroku, majdnem Google AppEngine Railshez"
typo_id: 47
---
Minden Rails fejlesztő arról álmodozik, hogy mikor lesz [Google AppEngine-ben][1] Ruby support. Ez persze nagyon hasznos lenne, viszont van itt valami ehhez hasonló jószág, aminek [Heroku][2] a neve.

[1]: http://appengine.google.com/
[2]: http://heroku.com/

Ez egy online rendszer Rails alkalmazások fejlesztésére és hosztolására. Van webes IDE is, de persze lehet lokálisan is fejleszteni, amihez nem árt alap szintű git felhasználói ismeret, mivel a Heroku a [git][3] verziókezelőre épít.

[3]: http://git.or.cz/

Jelenleg a szolgáltatás meghívásos béta állapotban van. Én már kaptam pár hete meghívást, de sajnos még nem jutott időm alaposabban kipróbálni. Talán meg tudok pár embert hívni, ha valakit érdekel. Most viszont olvasom ezt a [Herokuval játszadozós][4] bejegyzést róla és igazán megjött hozzá a kedvem.

[4]: http://technicalpickles.com/posts/playing-with-heroku

### Mit akarsz, ez nem is AppEngine

Valóban nem AppEngine-ről van szó, de valami hasonló környezetet kapunk itt is. Az alkalmazások az Amazon EC2 elosztott rendszerén futnak, kapunk egy hasznos parancssori eszközt az alkalmazásaink karbantartására. A deployment annyiból áll, hogy kinyomunk egy lokális verziót a Heroku szerverén található git repositorynkba. A migrationöket, szerverújraindítást elintézi a rendszer helyettünk.

Szóval amit nyerünk:

 * nem nekünk kell szervert konfigurálni
 * Cloud Computing Amazon EC2-őn
 * Webes GUI és/vagy parancssoros segédeszköz és git
 * Teljes Rails környezet (gemek, pluginek)

Mindez jelenleg ingyenes, bár nem hinném, hogy béta után is így maradna. Valami hasonló modellt tudok elképzelni, mint az AppEngine-nél, de erről még nincs semmilyen információ. Bár ki tudja, lehet hogy most RailsConfon bejelentenek valamit.
