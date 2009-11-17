// TurulRewind
// version 0.1
// 2008-04-01
// Copyright (c) 2008, László Bácsi, http://lackac.hu
//
// --------------------------------------------------------------------
//
// Ez egy Greasemonkey felhasználói szkript.
//
// A telepítéséhez szükséged lesz Greasemonkeyra: http://greasemonkey.mozdev.org/
// Ha ez megvan indítsd újra a Firefoxot, és telepítsd fel ezt a szkriptet.
// A szkript CsiripRóka kiterjesztésből csak az 1.2 és újabb verziókat támogatja.
//
// --------------------------------------------------------------------
//
// ==UserScript==
// @name           TurulRewind
// @namespace      http://lackac.hu
// @description    Visszatekeri a TurulCsiripet a legutóbbi csiripedig
// @include        http://turulcsirip.hu/
// @include        http://turulcsirip.hu/?setmod*
// @include        http://turulcsirip.hu/firefox-sidebar
// @include        http://turulcsirip.hu/firefox-sidebar?setmod*
// ==/UserScript==

var TurulRewind = {
  iframe: null,
  msgList: null,
  tmpList: null,
  firstId: null,
  lastId:  null,
  lastPage: null,
  archiveUrl: null,
  tmsgCount: 0,
  msgCount: 0,
  pageCount: 0,

  init: function() {
    //console.log('finding nick');
    var small  = document.getElementById('hozzaszolasok').getElementsByTagName('small')[0];
    var header = document.getElementById('header').getElementsByTagName('div')[0];
    var nick; 
    if ((nick = small.innerHTML.match(/Be vagy jelentkezve mint ([^\[]*) \[/)) ||
        (nick = header.innerHTML.match(/^([^\[]*) \[/))) {
      TurulRewind.nick = nick[1];
      //console.log('found nick:'+TurulRewind.nick);

      var links = document.getElementsByTagName('a');
      for (var i = links.length-1; i >= 0; i--) {
        var link = links[i];
        var m;
        if (m = link.href.match(/^(.*\?archiv=)25$/)) {
          TurulRewind.archiveUrl = m[1];
          var rewindLink = document.createElement('a');
          rewindLink.href = '#';
          rewindLink.innerHTML = 'Rewind &raquo;&raquo;';
          rewindLink.addEventListener('click', TurulRewind.rewind, false);
          var br = document.createElement('br');
          link.parentNode.insertBefore(rewindLink, link.nextSibling);
          link.parentNode.insertBefore(br, rewindLink);
          break;
        }
      }

      TurulRewind.msgList = document.getElementById('hozzalista');
      TurulRewind.iframe = document.createElement('iframe');
      TurulRewind.iframe.width = 0;
      TurulRewind.iframe.height = 0;
      document.body.appendChild(TurulRewind.iframe);
    }
  },

  getMsgId: function(li) {
    var links = li.getElementsByTagName('a');
    for (var j = 0; j < links.length; j++) {
      var link = links[j];
      var m;
      if (m = link.href.match(/http:\/\/turulcsirip.hu\/perma\/(\d+)/)) {
        return Number(m[1]);
      }
    }
  },

  requestPage: function(url, callback) {
    TurulRewind.iframe.addEventListener('load', function() {
      callback(this.contentDocument);
      TurulRewind.iframe.removeEventListener('load', arguments.callee, false);
    }, false);
    //console.log('requesting ', url);
    TurulRewind.iframe.src = url;
  },

  changeUpdateBehaviour: function() {
    if (unsafeWindow.do_rf_cb) {
      // do not allow changes to the list through innerHTML
      TurulRewind.msgList.wrappedJSObject.watch('innerHTML', function() {return this.innerHTML;});

      var original = unsafeWindow.do_rf_cb;
      unsafeWindow.do_rf_cb = function (result) {
        var tmp = document.createElement('ul');
        tmp.innerHTML = result;
        var list = tmp.getElementsByTagName('li');
        for (var i = list.length-1; i >= 0; i--) {
          var li = list[i];
          var id = TurulRewind.getMsgId(li);
          if (id > TurulRewind.lastId) {
            TurulRewind.lastId = id;
            TurulRewind.msgList.insertBefore(li, TurulRewind.msgList.getElementsByTagName('li')[0]);
          }
        }
        delete tmp;
        original(result);
      };
      TurulRewind.lastId = TurulRewind.getMsgId(TurulRewind.msgList.getElementsByTagName('li')[0]);
    }
  },

  rewind: function(ev) {
    if (ev) {
      ev.stopPropagation();
      ev.preventDefault();
      console.time('rewinding');
    }
    var page = TurulRewind.lastPage;
    if (!page) { // this is the first rewind
      TurulRewind.changeUpdateBehaviour();
      var msgs = TurulRewind.msgList.getElementsByTagName('li');
      TurulRewind.firstId = TurulRewind.getMsgId(msgs[msgs.length-1]);
    }
    var n = page ? page * 25 : 25;
    TurulRewind.requestPage(TurulRewind.archiveUrl+n, TurulRewind.handlePage);
  },

  handlePage: function(doc) {
    var list = doc.getElementById('hozzalista');
    if (list) {
      list = list.getElementsByTagName('li');
      TurulRewind.pageCount++;
      var hasMe = false;
      while (list.length) {
        TurulRewind.tmsgCount++;
        var li = list[0];
        var id = TurulRewind.getMsgId(li);
        if (id < TurulRewind.firstId) {
          TurulRewind.msgCount++;
          TurulRewind.firstId = id;
          TurulRewind.msgList.appendChild(li);
          if (li.className.match(/\ben\b/)) {
            hasMe = true;
          }
        } else {
          li.parentNode.removeChild(li);
        }
      }
      if (!TurulRewind.lastPage) TurulRewind.lastPage = 1;
      TurulRewind.lastPage += 1;
      if (!hasMe) {
        TurulRewind.rewind();
      } else {
        //console.log('found my last message, finishing rewind');
        //console.log('stats: pageCount=%d, tmsgCount=%d, msgCount=%d', TurulRewind.pageCount, TurulRewind.tmsgCount, TurulRewind.msgCount);
        //console.timeEnd('rewinding');
      }
    }
  },
}

addEventListener('load', TurulRewind.init, false);
