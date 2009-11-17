--- 
created_at: 2008-05-22 13:17:40 +02:00
layout: post
tags: "rake bash tip"
title: "Parancssori kiegészítés rakehez"
typo_id: 45
---
Az egyre növekvő [rake][1] task lista sokszor gondot okoz, ha valamilyen feladatnak nem tudjuk a pontos nevét. Ilyenkor segíthet a parancssori kiegészítés (a.k.a. [bash completion][2]). Ehhez fel kell rakni a <code>bash-completion</code> csomagot, aminek a mikéntjébe itt nem megyek bele.

[1]: http://rake.rubyforge.org/
[2]: http://www.caliban.org/bash/#completion

Legszebb a dologban, hogy saját kiegészítési stratégiákat is írhatunk tetszőleges programhoz. A fent említett rake szituációhoz írtam az alábbi kiegészítőt:

{% highlight bash %}
_rake()
{
    COMP_WORDBREAKS=${COMP_WORDBREAKS//:}
    local curw
    COMPREPLY=()
    curw=${COMP_WORDS[COMP_CWORD]}
    local tasks="$(rake -T 2>/dev/null | cut -d\  -f2)"
    COMPREPLY=($(compgen -W '$tasks' -- $curw));
    return 0
}
complete -F _rake rake
complete -F _rake jrake
{% endhighlight %}

Ezt így ahogy van hozzá kell vágni a <code>.bashrc</code> fájlunk végére, terminál újra megnyit, és innentől kezdve ha beírjuk például, hogy <code>rake db:</code> és <code>TAB</code>-ot nyomunk, már látjuk is, hogy milyen lehetőségeink vannak.

**Bónusz tipp**: hasonló elven működős [gem könyvtárt Textmateben megnyitós][3].

[3]: http://effectif.com/2008/3/29/opening-ruby-gems-in-textmate

