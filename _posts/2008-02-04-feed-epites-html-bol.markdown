--- 
created_at: 2008-02-04 01:32:00 +01:00
layout: post
tags: "feed hpricot howto project"
title: "Feed építés HTML-ből [update]"
typo_id: 18
---
Longhand [Domain szemle][1] bejegyzését olvasva merült fel bennem a gondolat, hogy milyen jó lenne a várólistán levő domaineket egy RSS feedben követni. Léteznek olyan online eszközök, amelyekkel ezt könnyen meg lehet oldani, én többek között a [feed43-val][2] próbálkoztam. Sajnos nem hozta azt, amit vártam tőle, ezért úgy döntöttem, hogy egy kis Ruby szkripttel oldom meg a feladatot.

Amúgy az egészről [longhand már írt][3], én a továbbiakban pár szóban leírom, hogy milyen eszközökkel készült a dolog.

[1]: http://optimalizalas.info/domain/domain-szemle-1.php
[2]: http://feed43.com
[3]: http://optimalizalas.info/domain/domainek-rss-en.php

#### Update

Két dolog történt. Átvittem a feedeket FeedBurner-re, és a *lejáró domainekhez hozzáadtam egy PageRank sort* is. Mivel a lejáró domainek általában olyanok, amik már senkit sem érdekelnek, ezért ez legtöbb esetben nem elérhető érték, vagy 0, de előfordul egy-két normális PageRankkel rendelkező domain is.

**Várólista**: <a href="http://feeds.feedburner.com/huVarolista"><img src="http://feeds.feedburner.com/~fc/huVarolista?bg=FF9900&fg=000000&anim=0" height="26" width="88" style="border:0" alt="" /></a>

**Lejáró domainek**: <a href="http://feeds.feedburner.com/huLejaro"><img src="http://feeds.feedburner.com/~fc/huLejaro?bg=FF9900&fg=000000&anim=0" height="26" width="88" style="border:0" alt="" /></a>

### Technikai részletek

A html forrás feldolgozásához egy már [korábbi bejegyzésben][4] bemutatott [hpricot][5] gemet használtam fel. Ezzel gyerekjáték kiszedni a legkuszább html oldalból is az általunk érdekesnek ítélt részeket.

{% highlight ruby %}
doc = Hpricot(open('http://www.domain.hu/domain/varolista/ido.html'))
conv = Iconv.new('utf-8', 'iso-8859-2')

items = []
doc.at("table[@border=1]").search("tr") do |tr|
  num, domain, claimant, date = (tr / "td").map {|t| conv.iconv(t.to_plain_text)}
  more = (tr % "td a" or {})['href']
  if num =~ /^\d+$/ and more
    items << {
      :domain => domain,
      :claimant => claimant,
      :date => Chronic.parse(date),
      :more => URI.encode('http://www.domain.hu/domain/varolista/'+more)}
  end
  break if items.size >= 300
end
{% endhighlight %}

A szükséges adatok összegyűjtése után az RSS formába öntés még ennél is egyszerűbb feladat volt. Ehhez az <tt>rss/maker</tt> Standard Ruby Library volt segítségemre.

{% highlight ruby %}
content = RSS::Maker.make('2.0') do |m|
  m.channel.title = ".hu domain regisztrációs várólista"
  m.channel.link = "http://www.domain.hu/domain/varolista/ido.html"
  m.channel.description = "kéthetes .hu domain regisztrációs várólista legfrisebb elemei"
  m.items.do_sort = true

  items.each do |item|
    i = m.items.new_item
    i.title = item[:domain]
    i.link = item[:more]
    i.date = item[:date]
    i.description = item[:claimant]
  end
end
{% endhighlight %}

[4]: http://lackac.hu/2007/10/23/index-percrol-percre-twitteren.html
[5]: http://code.whytheluckystiff.net/hpricot/
