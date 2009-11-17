Clock = Class.create();
Clock.config = {
  defaultRadius: 85,
  renderRadius: 100,
  defaultSkin: "classic",
  skins: {
    classic: {
      outerBorder: { lineWidth: 185, radius:1, color: "#CCCCFF", alpha: 1 },
      smallIndicator: { lineWidth: 2, startAt: 89, endAt: 94, color: "#3366CC", alpha: 1 },
      largeIndicator: { lineWidth: 4, startAt: 83, endAt: 94, color: "#3366CC", alpha: 1 },
      secondHand: { lineWidth: 1, startAt: -20, endAt: 85, color: "red", alpha: .85 },
      secondDecoration: { lineWidth: 3, startAt: 0, radius: 2, fillColor: "black", color: "black", alpha: 1 }
    },
    classicOkFeedback: {
      outerBorder: { lineWidth: 185, radius:1, color: "#FFFFCC", alpha: 1 },
      smallIndicator: { lineWidth: 2, startAt: 89, endAt: 94, color: "#3366CC", alpha: 1 },
      largeIndicator: { lineWidth: 4, startAt: 83, endAt: 94, color: "#3366CC", alpha: 1 },
      secondHand: { lineWidth: 1, startAt: -20, endAt: 85, color: "red", alpha: .85 },
      secondDecoration: { lineWidth: 3, startAt: 0, radius: 2, fillColor: "black", color: "black", alpha: 1 }
    },
    classicFalseFeedback: {
      outerBorder: { lineWidth: 185, radius:1, color: "#FFFFCC", alpha: 1 },
      smallIndicator: { lineWidth: 2, startAt: 89, endAt: 94, color: "#3366CC", alpha: 1 },
      largeIndicator: { lineWidth: 4, startAt: 83, endAt: 94, color: "#3366CC", alpha: 1 },
      secondHand: { lineWidth: 1, startAt: -20, endAt: 85, color: "red", alpha: .85 },
      secondDecoration: { lineWidth: 3, startAt: 0, radius: 2, fillColor: "black", color: "black", alpha: 1 }
    },
  }
};
Clock.prototype = {
  initialize: function(canvas, skin, displayRadius) {
    this.canvas = $(canvas);
    this.skinName = skin || Clock.config.defaultSkin;
    this.skinSelected = this.skinName;
    this.displayRadius = displayRadius || Clock.config.defaultRadius;

    this.canvas.setAttribute("width", this.displayRadius*2);
    this.canvas.setAttribute("height", this.displayRadius*2);
    this.canvas.style.width  = this.displayRadius*2+"px";
    this.canvas.style.height = this.displayRadius*2+"px";

    this.renderRadius = Clock.config.renderRadius; 

    this.scale = this.displayRadius / this.renderRadius;
    this.ctx = this.canvas.getContext("2d");
    this.ctx.scale(this.scale, this.scale);

    this.sec = 0;
    this.render();
  },

  fullCircle: function(skin) {
    this.fullCircleAt(this.renderRadius, this.renderRadius, skin);
  },

  fullCircleAt: function(x, y, skin) {
    with (this.ctx) {
      save();
      globalAlpha = skin.alpha;
      lineWidth = skin.lineWidth;
      if (document.all && !window.opera) {
        // excanvas doesn't scale line width so we will do it here
        lineWidth = lineWidth * this.scale;
      }
      arc(x, y, skin.radius, 0, 2*Math.PI, false);
      if (document.all && !window.opera) {
        // excanvas doesn't close the circle so let's color in the gap
        arc(x, y, skin.radius, -0.1, 0.1, false);
      }
      if (skin.fillColor) {
        fillStyle = skin.fillColor;
        fill();
      }
      else {
        // XXX why not stroke and fill
        strokeStyle = skin.color;
        stroke();
      }
      restore();
    }
  },

  radialLineAtAngle: function(angleFraction,skin) {
    with (this.ctx) {
      save();
      translate(this.renderRadius, this.renderRadius);
      rotate(Math.PI * (2 * angleFraction - 0.5));
      globalAlpha = skin.alpha;
      strokeStyle = skin.color;
      lineWidth = skin.lineWidth;
      if (document.all && !window.opera) {
        // excanvas doesn't scale line width so we will do it here
        lineWidth = lineWidth * this.scale;
      }
      if (skin.radius) {
        this.fullCircleAt(skin.startAt, 0, skin)
      }
      else {
        beginPath();
        moveTo(skin.startAt, 0)
        lineTo(skin.endAt, 0);
        stroke();
      }
      restore();
    }
  },

  render: function() {
    skin = Clock.config.skins[this.skinSelected];
    this.ctx.clearRect(0, 0, this.renderRadius*2, this.renderRadius*2);
    this.fullCircle(skin.outerBorder);

    for (var i = 0; i < 60; i++) {
      this.radialLineAtAngle(i/60, skin[ i%5 ? "smallIndicator" : "largeIndicator"]);
    }

    this.radialLineAtAngle(this.sec/60, skin.secondHand);
    if (!document.all || window.opera) {
      // decoration doesn't render right in IE so lets turn it off
      this.radialLineAtAngle(this.sec/60, skin.secondDecoration);
    }
  },

  tick: function() {
    this.sec++;
    this.render();
  },

  tickTick: function() {
    this.sec += 2;
    this.render();
  },

  setFeedback: function(result) {
    this.skinSelected = this.skinName+(result ? "OkFeedback" : "FalseFeedback");
    this.render();
  },

  clearFeedback: function() {
    this.skinSelected = this.skinName;
    this.render();
  }
}

