// MilyenNap
// version 0.1
// 2008-05-04
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
// @name           MilyenNap
// @namespace      http://lackac.hu
// @description    Kitölti neked a milyen nap van ma spam filter mezőt.
// @include        *
// ==/UserScript==

var MilyenNap = {
  init: function() {
    var field = document.getElementById('milyennapmost');
    if (field) {
      field.value = ['vasárnap', 'hétfő', 'kedd', 'szerda', 'csütörtök', 'péntek', 'szombat'][(new Date()).getDay()];
    }
  }
}

addEventListener('load', function () { MilyenNap.init(); }, false);
