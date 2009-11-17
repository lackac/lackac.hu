// Netpincer
// version 0.1
// 2008-06-10
// Copyright (c) 2008, László Bácsi, http://lackac.hu
//
// --------------------------------------------------------------------
//
// Ez egy Greasemonkey felhasználói szkript.
//
// A telepítéséhez szükséged lesz Greasemonkeyra: http://greasemonkey.mozdev.org/
// Ha ez megvan indítsd újra a Firefoxot, és telepítsd fel ezt a szkriptet.
//
// --------------------------------------------------------------------
//
// ==UserScript==
// @name           Netpincer
// @namespace      http://lackac.hu
// @description    Kiszedi azokat az étlap elemeket, amikben nem kívánatos dolog van. Ezeket a greasemonkey.scriptvals.http://lackac.hu/Netpincer.pattern preferenceben (about:config) lehet beállítani.
// @include        http://netpincer.hu/*
// ==/UserScript==

var Netpincer = {
  DEFAULT_PATTERN: "sonka, bacon, szalonna, szalámi, tengeri finomságok, tarja, sertés, kolbász",

  init: function() {
    var goods = document.getElementsByTagName('div');
    var pattern = GM_getValue("pattern");
    if (!pattern) {
      pattern = Netpincer.DEFAULT_PATTERN;
      GM_setValue("pattern", pattern);
    }
    if (!pattern.match(/^\/.*\/[igm]*$/)) {
      pattern = pattern.replace(/,\s+/g, "|");
      pattern = pattern.replace(/\s+/, "\\s+");
      pattern += "|";
      pattern = pattern.replace(/a\|/g, "[aá]|");
      pattern = pattern.replace(/e\|/g, "[eé]|");
      pattern = pattern.replace(/o\|/g, "[oó]|");
      pattern = pattern.replace(/ö\|/g, "[öő]|");
      pattern = pattern.replace(/u\|/g, "[uú]|");
      pattern = pattern.replace(/ü\|/g, "[üű]|");
      pattern = pattern.replace(/cs\|/g, "cc?s|");
      pattern = pattern.replace(/gy\|/g, "gg?y|");
      pattern = pattern.replace(/ly\|/g, "ll?y|");
      pattern = pattern.replace(/ny\|/g, "nn?y|");
      pattern = pattern.replace(/sz\|/g, "ss?z|");
      pattern = pattern.replace(/ty\|/g, "tt?y|");
      pattern = pattern.replace(/zs\|/g, "zz?s|");
      pattern = pattern.substring(0, pattern.length-1);
    } else {
      var m = pattern.match(/^\/(.*)\/([igm]*)$/);
      pattern = new RegExp(m[1], m[2]);
    }
    for (var i = 0; i < goods.length; i++) {
      var good = goods[i];
      console.log(good);
      if ((good.className == "menu_gooddescript" || good.className == "menu_goodname") &&
          good.innerHTML.match(pattern)) {
        do {
          good = good.parentNode;
        } while (good.tagName.toUpperCase() != "TABLE" && good.tagName.toUpperCase() != "BODY");
        if (good.tagName.toUpperCase() == "TABLE") {
          good.style.display = "none";
        }
      }
    }
  }
}

addEventListener('load', function () { Netpincer.init(); }, false);
