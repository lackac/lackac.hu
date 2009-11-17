// ==UserScript==
// @name          Callout testing
// @namespace     http://lackac.hu
// @description   This is just some testing...
// @include       http://lackac.hu/about
// ==/UserScript==


var images = document.getElementsByTagName('img');
for (var i = 0; i < images.length; i++) {
  var image = images[i];
  if (image.className.indexOf('sideimage') != -1) {
    image.addEventListener('click', function (e) {
      e.stopPropagation();
      callout.notify("That's me!", "⬅ LacKac", {icon:e.target.src, href:'http://lackac.hu'});
    }, true);
  }
}