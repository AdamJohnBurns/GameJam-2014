var Bullet = function (x, y, velX, velY) {
	this.active = true;

	this.velX = velX;
	this.velY = velY;

	this.image = new createjs.Bitmap(GJ.Assets.get('BulletGem'));
	this.image.regX = this.image.getBounds().width / 2;
	this.image.regY = this.image.getBounds().height / 2;

	this.image.x = x;
	this.image.y = y;

	GJ.getStage().addChild(this.image);
};


Bullet.prototype.update = function () {
	if (this.active) {
		this.image.x += this.velX;
		this.image.y += this.velY;

		this.image.rotation += 25;
	}
};


Bullet.prototype.checkCollision = function (object) {
	return ndgmr.checkRectCollision(this.image, object.image);
};


Bullet.prototype.kill = function () {
	this.active = false;
	GJ.getStage().removeChild(this.image);
}