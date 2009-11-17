// Csipp
// version 0.3
// 2008-03-26
// Copyright (c) 2008, László Bácsi, http://lackac.hu
//
// --------------------------------------------------------------------
//
// Ez egy Greasemonkey felhasználói szkript.
//
// A telepítéséhez szükséged lesz Greasemonkeyra: http://greasemonkey.mozdev.org/
// A működéshez szükség lesz a Callout Firefox 3 kiterjesztésre is.
// Ezt a következő címen tudod megszerezni:
//   http://lackac.hu/articles/2008/03/26/rendszeruzenetek-firefoxbol-es-turulcsirip-growl
// Ha ezek megvannak indítsd újra a Firefoxot, és telepítsd fel ezt a szkriptet.
// A szkript csak az 1.2 és újabb CsiripRóka kiterjesztéseket támogatja.
//
// --------------------------------------------------------------------
//
// ==UserScript==
// @name           Csipp
// @namespace      http://lackac.hu
// @description    "Ultimate produktivitás csökkentő" Turulcsiripek rendszerüznetként (Growl, Windows alerts)
// @include        http://turulcsirip.hu/firefox-sidebar*
// ==/UserScript==

(function() {

function convertToText(html) {
  var tarea = document.createElement('textarea');
  var with_smileys = html.replace(/<img[^>]*alt="([^"]+)"[^>]*>/, "$1");
  tarea.innerHTML = with_smileys.replace(/<[^>]*>/g, '');
  var ret = tarea.value;
  delete tarea;
  return ret;
}

function Message(options) {
  if (options.getElementsByTagName) {
    var li = options;
    this.types = li.className.split(/\s+/);
    var links = li.getElementsByTagName('a');
    this.message = convertToText(li.getElementsByTagName('p')[0].innerHTML);
    var avatar = links[0];
    this.name = avatar.title;
    this.nick = convertToText(avatar.innerHTML);
    var avatar_img = avatar.getElementsByTagName('img');
    if (avatar_img && avatar_img[0]){
      this.avatar = avatar_img[0].src;
    } else {
      this.avatar = 'http://avatar.turulcsirip.hu/avatar/'+this.nick+'/normal.jpg';
    }
    for (var i = 0; i < links.length; i++) {
      var link = links[i];
      var m;
      if (m = link.href.match(/http:\/\/turulcsirip.hu\/perma\/(\d+)/)) {
        this.id = Number(m[1]);
        break;
      }
    }
  } else {
    this.id = options.id;
    this.name = options.name;
    this.nick = options.nick;
    this.message = options.message;
    this.types = options.types;
    this.avatar = options.avatar;
  }
}
Message.lastId = null;
Message.prototype.callout = function() {
  callout.notify(this.nick, this.message, {icon:this.avatar});
};
Message.prototype.handle = function() {
  if (Message.lastId != null && this.id > Message.lastId && this.types.indexOf('en') == -1) {
    this.callout();
  }
};

if (unsafeWindow.do_rf_cb) {
  var original = unsafeWindow.do_rf_cb;
  unsafeWindow.do_rf_cb = function (result) {
    original(result);
    var list = document.getElementById("hozzalista").getElementsByTagName('li');
    var lastId;
    for (var i = list.length-1; i >= 0; i--) {
      var li = list[i];
      var message = new Message(li);
      message.handle();
      //li.addEventListener('click', function() {return message.callout.apply(message);}, true);
      lastId = message.id;
    }
    Message.lastId = lastId;
  };
  var list = document.getElementById("hozzalista");
  Message.lastId = (new Message(list.getElementsByTagName('li')[0])).id;
  unsafeWindow.do_rf_cb(list.innerHTML);
}

})();
