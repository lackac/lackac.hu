--- 
created_at: 2008-03-11 15:45:00 +01:00
layout: post
tags: "javascript project cegalapitas"
title: "Véletlenszó generátor [update]"
typo_id: 26
---
Tegnap végre leültem cégnevet brainstormingolni. Twitteren ajánlottak [sok][1] [véletlen][2] [név generátort][3], amiket ki is próbálgattam. Amellett, hogy kevés igazán jó nevet ajánlanak, a legnagyobb gond ezekkel, hogy a jobb nevek már mind foglaltak. Mikor nekiindultam a dolognak egy olyan elképzelésem volt, hogy a név legyen *rövid*, *könnyen betűzhető*, de *nem magyar*. Játszottam olyan nevekkel is, amiben szerepelt a *ruby*, és ezen a vonalon össze is gyűjtöttem pár jelöltet. Ezután a teljesen véletlen szavak következtek.

A türelmetleneknek itt a végeredmény, egy Javascriptben írt név generátor: [NameGen][4].

[1]: http://www.dotomator.com/index.html
[2]: http://www.iq0.com/startup.html
[3]: http://www.dotomator.com/web20.html
[4]: http://lackac.hu/lab/namegen/

A véletlen szavakhoz először írtam egy pársorost <code>irb</code>-ben, amivel aztán eljátszadoztam:

{% highlight ruby %}
class Array; def random; self[rand(self.size)]; end; end
module Enumerable; def random; self.to_a.random; end; end
A = "aeiou".split('')
B = ('a'..'z').to_a - A;
def rname q = 0.33, r = (3..5)
  (1..(r.random-1)).inject((?a + rand(26)).chr) do |s, i|
    s + (rand < (A.include?(s[-1].chr) ? q : 1-q) ? A.random : B.random)
  end
end
def rnames n = 100, q = 0.33, r = (3..5)
  (1..n).map {|i| rname q, r}.each do |s|
    STDOUT << s + (" " * (r.end+1-s.length))
  end
end
{% endhighlight %}

A fentiek után az <code>rnames</code> ismételgetése <code>irb</code>-ben mindig újabb 100 random szót köp ki. Ezzel még mindig nem voltam megelégedve, mert nehézkes volt terminálban böngészni a szavakat, úgyhogy az egészet átírtam Javascriptben. Nézzétek meg az elkészült [név generátort][4].

A paraméterek közül talán csak a *q* szorul némi magyarázatra. Ez annak a valószínűsége, hogy egy mássalhangzót mássalhangzó, illetve magánhangzót magánhangzó követ. Egy szóra kattintva azt kirakja oldalra egy listába, így lehet gyűjtögetni a jól hangzókat. Onnan pedig szintén kattintással lehet törölni.

Játszadozzatok nyugodtan vele, és írjátok ide kommentbe, ha találtok valami igazán jó, vagy vicces nevet.

<small>Diszklémer: a szerző nem állítja, hogy ennek az egésznek van bármi értelme.</small>

#### Update

Olvasói kérésre belekerült a név generátorba a tartalmazott szó feature. Így már tényleg sokkal hasznosabb: [NameGen][4].
