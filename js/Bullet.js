var Bullet = function (x, y, velX, velY) {
	this.active = true;

	this.velX = velX;
	this.velY = velY;

	this.image = new createjs.Shape();
	this.image.graphics.beginFill("blue").drawCircle(0, 0, 5);
	this.image.x = x;
	this.image.y = y;

	GJ.getStage().addChild(this.image);
};


Bullet.prototype.update = function () {
	if (this.active) {
		this.image.x += this.velX;
		this.image.y += this.velY;
	}
};


Bullet.prototype.checkCollision = function (object) {
	return ndgmr.checkRectCollision(this.image, object.image);
};


Bullet.prototype.kill = function () {
	this.active = false;
	GJ.getStage().removeChild(this.image);
}