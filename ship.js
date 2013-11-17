(function (root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Ship = Asteroids.Ship = function (startPos, game) {
    Asteroids.MovingObject.call(this, startPos, [0, 0], Ship.RADIUS, Ship.COLOR);

    this.startPos = startPos;
    this.game = game;
  };

  Ship.inherits(Asteroids.MovingObject);

  Ship.prototype.fireBullet = function () {
    var norm = Asteroids.Util.norm(this.vel);

    if (norm == 0) {
      return;
    } else {
      var mult = Asteroids.Bullet.SPEED / norm;
      var bulletVel = [mult * this.vel[0], mult * this.vel[1]];
      return new Asteroids.Bullet(this.pos, bulletVel, this.game);
    }
  };

  Ship.prototype.power = function (impulse) {
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
  };

  Ship.prototype.remove = function () {
    this.pos = this.startPos;
  };

  Ship.RADIUS = 5;
  Ship.COLOR = "red";
})(this);
