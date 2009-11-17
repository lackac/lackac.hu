Math._random = Math.random;
Math.random = function() {
  var n;
  if (!isNaN(n = Number(arguments[0]))) {
    return Math.floor(Math._random() * Math.floor(n));
  } else {
    return Math._random();
  }
}

Array.prototype.random = function() {
  return this[Math.random(this.length)];
}
ObjectRange.prototype.random = function() {
  return this.toArray().random();
}

NameGen = {
  VOWELS:      $A(["a", "e", "i", "o", "u"]),
  CONSONANTS:  $A(["b", "c", "d", "f", "g", "h", "j",
                   "k", "l", "m", "n", "p", "q", "r",
                   "s", "t", "v", "w", "x", "y", "z"]),
  HVOWELS:     $A(["a", "á", "e", "é", "i", "í", "o",
                   "ó", "ö", "ő", "u", "ú", "ü", "ű"]),
  HCONSONANTS: $A(["b",  "c", "cs", "d", "dz", "dzs", "f", "g",
                   "gy", "h", "j",  "k", "l",  "ly",  "m", "n",
                   "ny", "p", "q",  "r", "s",  "sz",  "t", "ty",
                   "v",  "w", "x",  "y", "z",  "zs"]),
  WORDTMPL: new Template("<li>#{word}</li>"),

  randomWord: function () {
    var op = Object.extend({
      min: 3,
      max: 5,
      q: 0.33,
    }, arguments[0] || { });

    return $R(1, $R(op.min, op.max).random()-1).inject(
      String.fromCharCode('a'.charCodeAt(0) + Math.random(26)),
      function (s) {
        return s + (Math.random() < (NameGen.VOWELS.include(s[s.length-1]) ? op.q : 1-op.q) ? NameGen.VOWELS.random() : NameGen.CONSONANTS.random());
      }
    );
  },

  randomHunWord: function () {
    var op = Object.extend({
      min: 3,
      max: 5,
      q: 0.33
    }, arguments[0] || { });

    var i = Math.random(44);
    return $R(1, $R(op.min, op.max).random()-1).inject(
      i < 14 ? NameGen.HVOWELS[i] : NameGen.HCONSONANTS[i-14],
      function (s) {
        return s + (Math.random() < (NameGen.HVOWELS.include(s[s.length-1]) ? op.q : 1-op.q) ? NameGen.HVOWELS.random() : NameGen.HCONSONANTS.random());
      }
    );
  },

  setupPage: function () {
    $('gen-form').observe('submit', NameGen.generate);
    $('words').observe('click', NameGen.selectWord);
    $('flagged').observe('click', NameGen.removeFlagged);
    NameGen.validateNum('gen-num', 120, 1, 500);
    NameGen.validateNum('gen-min-length', 3, 1, 8);
    NameGen.validateNum('gen-max-length', 5, 1, 8);
    NameGen.validateNum('gen-q', 0.33, 0, 1, true);
  },

  validateNum: function (element, def, min, max, fl) {
    $(element).observe('change', function () {
      var n = Number($F(element));
      if (isNaN(n)) {
        $(element).value = def;
      } else {
        $(element).value = Math.max(min, Math.min(max, fl ? n : Math.floor(n)));
      }
    });
  },

  generate: function (e) {
    Event.stop(e);
    var num = Math.floor(Number($F('gen-num'))) || 120;
    var min = Math.floor(Number($F('gen-min-length'))) || 3;
    var max = Math.floor(Number($F('gen-max-length'))) || 5;
    var q   = Number($F('gen-q')) || 0.33;
    var include = $F('gen-include') || '';
    var where = $F('gen-where');
    if (where != '^' && where != '$') where = '.';
    if (max < include.length) max = include.length;
    var words = $('words');
    words.update('');
    var generator = $F('gen-hun') ? NameGen.randomHunWord : NameGen.randomWord;
    for (var i = 0; i < num; i++) {
      if (include == '') {
        words.insert(NameGen.WORDTMPL.evaluate(
          {word: generator({min: min, max: max, q: q})}
        ));
      } else {
        if (where == '^') {
          words.insert(NameGen.WORDTMPL.evaluate(
            {word: '<em>'+include+'</em>' + generator({
              min: Math.max(1, min-include.length),
              max: max-include.length, q: q})}
          ));
        } else if (where == '$') {
          words.insert(NameGen.WORDTMPL.evaluate(
            {word: generator({
              min: Math.max(1, min-include.length),
              max: max-include.length, q: q}) + '<em>'+include+'</em>'}
          ));
        } else {
          var wl = Math.max(0, min + Math.random(max - min + 1) - include.length);
          if (wl > 0) {
            var bl = Math.random(wl+1);
            var el = wl-bl;
            var begin = bl > 0 ? generator({min: bl, max: bl, q: q}) : '';
            var end   = el > 0 ? generator({min: el, max: el, q: q}) : '';
            words.insert(NameGen.WORDTMPL.evaluate({word: begin + '<em>'+include+'</em>' + end}));
          } else {
            words.insert(NameGen.WORDTMPL.evaluate({word: include}));
          }
        }
      }
    }
  },

  selectWord: function (e) {
    Event.stop(e);
    var w = Event.element(e);
    if (w.tagName.toLowerCase() == 'li') {
      if (w.hasClassName('flagged')) {
        w.removeClassName('flagged');
        $('flagged').childElements().each(function (li) {
          if (li.innerHTML == w.innerHTML) {
            li.remove();
            throw $break;
          }
        });
      } else {
        w.addClassName('flagged');
        $('flagged').insert(NameGen.WORDTMPL.evaluate({word: w.innerHTML}));
      }
    }
  },

  removeFlagged: function (e) {
    Event.stop(e);
    var w = Event.element(e);
    if (w.tagName.toLowerCase() == 'li') {
      w.remove();
    }
  }
}

Event.observe(window, 'load', NameGen.setupPage);
