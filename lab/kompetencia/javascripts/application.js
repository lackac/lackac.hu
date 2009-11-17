Timer = Class.create();
Timer.prototype = {
  initialize: function() {
    this.options = Object.extend({
      update: false,
      display: 'hours',
      backwards: false,
      from: 0,
    }, arguments[0] || {});
    if (this.options.update) {
      this.options.update = $(this.options.update);
    }
    this.events = [];
    this.seconds = this.options.from-0;
    this.timer = new PeriodicalExecuter(function () {
      if (!this.options.backwards) {
        this.seconds++;
      }
      else {
        this.seconds--;
        if (this.seconds == 0 && typeof(this.options.backwards) == "function") {
          this.options.backwards();
        }
      }
      if (this.options.update) {
        this.options.update.update(this.toString());
      }
      for (var i = 0; i < this.events.length; i++) {
        if (this.events[i].time == this.seconds) {
          this.events[i].callback();
        }
      }
    }.bind(this), 1);
  },

  registerEvent: function(time, callback) {
    this.events.push({
      time: time,
      callback: callback,
    });
  },

  secondsPassed: function() {
    return this.options.backwards ? this.options.from-this.seconds : this.seconds;
  },

  stop: function() {
    this.timer.stop();
  },

  toString: function(inverse) {
    if (!inverse) {
      var sec = this.seconds;
    }
    else {
      var sec = this.options.from - this.seconds;
    }
    switch (this.options.display) {
      case 'hours':
        var hours   = Math.floor(sec/3600);
        if (hours < 10) hours = '0'+hours;
        var minutes = Math.floor((sec%3600)/60);
        if (minutes < 10) minutes = '0'+minutes;
        var seconds = sec%60;
        if (seconds < 10) seconds = '0'+seconds;
        return hours == '00' ? minutes+':'+seconds : hours+':'+minutes+':'+seconds;
      case 'minutes':
        var minutes = Math.floor(sec/60);
        if (minutes < 10) minutes = '0'+minutes;
        var seconds = sec%60;
        if (seconds < 10) seconds = '0'+seconds;
        return minutes+':'+seconds;
      case 'seconds':
        return sec;
    }
  }
}

function getViewport()
{
  var viewport = {x:0, y:0, width:0, height:0};

  if (typeof window.scrollX != 'undefined') {
    viewport.x = window.pageXOffset;
    viewport.y = window.pageYOffset;
    viewport.width = window.innerWidth;
    viewport.height = window.innerHeight;
    return viewport;
  } else {
    if (document.documentElement && (typeof document.documentElement.scrollLeft != 'undefined') &&
        (document.documentElement.scrollLeft != 0)) {
      viewport.x = document.documentElement.scrollLeft;
      viewport.y = document.documentElement.scrollTop;
      viewport.width = document.documentElement.clientWidth;
      viewport.height = document.documentElement.clientHeight;
      return viewport;
    } else {
      if (document.body && (typeof document.body.scrollLeft != 'undefined')) {
        viewport.x = document.body.scrollLeft;
        viewport.y = document.body.scrollTop;

        if (document.compatMode == "CSS1Compat") {
          viewport.width = document.body.parentNode.clientWidth;
          viewport.height = document.body.parentNode.clientHeight;
        } else {
          viewport.width = document.body.clientWidth;
          viewport.height = document.body.clientHeight;
        }
        return viewport;
      }
    }
  }

  return null;
}