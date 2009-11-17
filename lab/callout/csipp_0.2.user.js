// Csipp
// version 0.2
// 2008-03-26
// Copyright (c) 2008, László Bácsi, http://lackac.hu
//
// --------------------------------------------------------------------
//
// Ez egy Greasemonkey felhasználói szkript.
//
// A telepítéséhez szükséged lesz a Greasemonkeyra: http://greasemonkey.mozdev.org/
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
// @include        http://turulcsirip.hu/*
// @exclude        http://turulcsirip.hu/mobil*
// @exclude        http://turulcsirip.hu/rss*
// @exclude        http://turulcsirip.hu/csiriproka*
// @exclude        http://turulcsirip.hu/user/*
// @exclude        http://turulcsirip.hu/perma/*
// ==/UserScript==

(function() {

var csiripLogo = "data:image/png,%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%20%00%00%00%20%08%06%00%00%00szz%F4%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%9A%9C%18%00%00%06qIDATX%85%EDU%7DLU%E7%1D~%DE%F7%3D%F7%1B%E4%A3%7C%14%90%2Fq%80%87%12%B0%17%91%C2pYcI%11%04%9A%E5PA%E6%07%0B%B7%B6%11%3B%82%AE%9D5%DE%91%A5%1D%23%D8%D0%2Cq%82%5D%5B%AD%AB%F5%DAv%13%5D7%A3%94%8F%26twm%B9%9B%C4dS%A9%14%2B%1DT)%8A%97%8F%CB9%E7%B7%3F%E4%A6%A4)%D2%A6%7F%8E'9%C9y%CF%FB%BE%BF%DF%F3%FC%CE%FB%7B%5E%60%09KX%02%80%CC%07W%D3%AE%BA%BA.%00%C2%FF%CD%E5r%09EQ%04%111%22b%DF'%3E%11%B1%D6%D6V%03%00%1C%3Bvl%5DiY%E9%9BJE%C5%0F%01%80%01%40eU%95n6%9B%D9%C0'%03%EF%E5%E5%3C%F4%A2%DB%ED%1E%3B%7F%FE%FC%DF%19c%00%40%8A%A2%08%008y%F2%A4%F6%1Ds3%A7%D3)%00%A0%A1%A1Au8%B6%AF%BDte%B05%3A%26%16o%BC~4%0F%80%17%00%E0%FC%95s%E6g5%D5j%D2%0FV%12%80%99%FB%A3%A3%A8%BC%A2%E2%FD%BF%9C%3D%BB%EE%EA%D5Nsoo%AF%05%00%14E%11~2%8B)%C6%DDj%B2%B9%B1T%B3%C3qzY%F02%FAq%C1%FA%BF~m%1D%90%9E%91%DE%98%97%9FG%BB%EA%EAf%E4tY%05%A0%87GFP%CC%F2%E5S%8F%14%AC%9F.%2C%DE%F0~~~%FE%8F%E6%F6%F1%7B%90%60%FE9%22%12%00%8C%23%23%23%B9%3F%DD%B6%BD%23uU*%15%14n%E8z%E9%E0A%BB_%CC%FC%8D%D2%8E'%9F%3C%BD%26'%9Bl%01V%15%00%01%D0%E2%12%E3%B5%A0%E0%60%02%40%7B%F7%3DG%BFij%EC%01%90%EF'2%3F%80%CB%E5%12%FE%C0D%C4%E3%E2%E2%8A%E54%F9NJj%EAThX(efe9%E7%E6%8D%FE%CA%CC%0F%A2FFDlMIN%1D%DF%FD%CC%B3%A2%E6%09%071%0E%AE%AB%1A7%18%25p%89%EB%C7%8F%BF%A9%99%CC%B6%FC%E2%D2%8D%9Dii%A9%1B%01%E8%00%24%22b%8A%A2%88%8B%17%2F2%22%E2%92Y%DAPRV2%3E44tB2%18lw%BC%13%3Dr%AA%FC%B4%E7%C3%0F%5B%00%40%96e%7DN%E0Wp%3A%9D%12%00%1C%7F%DBU%F4%EB%17%5E%D0v%EE%AA%25%83%D1%40%00%C8j%B3%92q%EE%3D%3E!A%7D%BE%F1y_%D5%D6-%94%9C%9C%BC%7F%9E%22ttumL%CFL%BF%13%B3%3Cz%3A6%3E%9Eb%E3b%7D%B9%B9%D9E%FE_3%EFY%10%02%00%84%10E%F65YjdT%A4%0A%06%DD%16%60%A3%E0%D0%60%92%8C%12Yl%16Z%B12I%3F%D8%D6%AA%AFHZ%A1%09!J%00%A0%BA%A6%A6%24%3Bg%AD%CA%05%A7%90%D0%10%EF%B6%EA%EDS%CF%EC%DD%BF%11%00%ECv%BBA%96e%23%BEM%2B%D7%D6%D6%9A%00%60%DD%C3%0F%3B%E3%13%13%08%80%1A%15%13Mi%0F%A4%93%C5j%A6%C6%E6fz%A4%F0Qzn%DF%5E%FA%A8%EFc%DAP%5C%3C%B3%B9%AAr%DCj%B3%FA%00%CC%06%05%05%91%C3%E1h%06%00%87%C3q7%F1W%E2%FC%87%93%CD%F7%96odED%01u%F5%7B~%F1%5E%E7%B9%A7.x%FE%15%20I%92%C9h4%20%3C2%02ee%8F%E1%DF%FF%B9%84cG%8Fb%E8%D3Aj%3A%D0%CC%86%AF%7FN%A5%A5%25%F0%F9%7C%0C%60%13g%CE%B47%85%85%86%BD%D4%DE%DE%3E%01%20%08%C0Taa!%8B%CC%CEf%AF54L%CF%CBcX%B0%1A%0E%87%C3%00%00%E9%19%E9%07L%16%13%ED%D8%B9S%DD%B2u%0BUn%AE%A0%8E%CE%0E%EA%FD%A0%97RV%A5P%9F%C7C%83%D7%AE%D1%D6%EAm%24%A7%A7%D1%E3%95%15%FA%EF%0E%1D%A2%9F%D7%D7%9F%90%E5%A4G%7F%B9%F7YJM%5B%F5%16%03zVgd4%03%80%DB%ED%BE%8F%88%02%89%88%7Dc%3F%3B%89%F8%8B%25%25DD%96i%9F%AFu%DA%EB%5D622%CA%A3b%A2PZR%8A%A6%DF6%E1%D4%99S%E8%FFg%3F.%5D%B9%84%C0%A0%60%FC%E9%9Dw%F0%DF%E1%EB%C8%CCX%CD%FEv%BA%5D%D3f%A6%1F%C8%CA%CEy%5C%D9%B4I%8C%0E%7D*%7FI%22~%7F%5B%5B%D6%81%B6%B6%DDzpH%3D%03%3Dea%08%5D%F0%60%10%11g%8C%E9%9E%FE%FE%A2%9E%9E%9ESQ%11at%E2%84K%F2%A9%1A%06%06.%E3%CB%9B7PY%B5%05%A4%EB%B0%DB%ED%08%0B%0F%87%26%19%11%12%17%8F%B7%CFu%60lt%84%8A6m%A6%9CP%1Bo%EF%E8%D2%D5%15%89H%B2%3F%C8%C7n%DC%81%C69%D6X%05V%99%0D%F7l%0B%06%80%EA%9D%CE0Oo%EF%60%F4%FD%91%B6%95%C9)%B8%7D%EB%262W%DBq%F3%8B%1B%B8%D0%7F%01%9E%3E%0Fv%EF%D9%83%80%C2%C7%F0%8F%B1%DB(%8B%8D%C0%1A%03%83%0E%60%16%04%E8%C0%5B%B3%0C%99%7C%16%81%AA%0AH%12%84%0E%04%09%C0%26%98%BA%A0%AF%3B%9DN%DE%DD%DDM1%E1Q%F6%F1%89%5B%B7%AE%5E%B9%FC%AE%DB%ED%CE%1D%BAv%CD%F0%C5%E8(%7C3%3E%BC%F2%EA%AB%C8%CB%7D%08O%D4%EEB%A7%B0%40%E3%1C%05V%0E%1Bt%40W!q%40%05%F0%EE%C88z%26f%F1%F1%B4%8E%3E%AF%0F%BD%93*.%FBtdZ%0D%7CA%02%DD%DD%DD%04%00%8A%F2%93%CF%5E%3Fr%E4%DC%BE%7D%0D%DA%99%D3%ED%8E%E1%EB%C3%00%91j4%19%99N%C4%AA6W%EA%F1%89%89%EA%073%9C%0D%FB4v%9F%24%90d%920E%80J%0Cf%C6%10a4%40p%8E%14%A3%40%9CI%20L%12%F0L%CE%22%D9%2C%A9%8B%99%03%03%40%87%0F%B7D%1E%FE%C3%1B%03Bp%93%24I*%17%06%F3%C0%C0%15_bB%C2%94%D9j%B3%C4%86%86%18%F3Z%DA%F0%FB%B1iD%09%06%D3%9C%C1%EBL%E0H%5C%20%CE%DE%9E%C1%CB7%A6%10%26q0F%B8%AD%E9Xi2%A21%DA%06i%11%02%04%00%7F%3C%FE%E7C%93%93%93%97%FB%3ErW%0F~6%12x%C1%D3%B7)*!%F1T%9E%DD~%D6%EDv%17%25%24%24d%1BC%2Ck9c%EB%AF%FBf%BD%3A%81%7B%09%08%E7%0CV%E8%887%00%05%01%06X8%87%60%3A%BC%3Ax%5E%A0i%92%13%BD%BC%A8%3D%12%91hii%89%88%89%89%B9Y%5E%5E%EE%BB%C7%3A%13%00%13%BE~%D1%DC%5B%9Cw%B1%0A%801%A6%01%F8%5CQ%14%E1%BFrq%D7V%B5%F2%F2r%CD%E5r%09Y%96%05%80Y%C6%D8%CC%B7L%EE'%BD%B0%13.a%09%FF7%F8%1Fy%3E%B3%B81%F4%26%AD%00%00%00%00IEND%AEB%60%82";

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
      this.avatar = csiripLogo;
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
    this.avatar = options.avatar || csiripLogo;
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
