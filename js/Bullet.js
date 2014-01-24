var Bullet = function (x, y, velX, velY) {
	this.velX = velX;
	this.velY = velY;

	this.image = new createjs.Shape();
	this.image.graphics.beginFill("blue").drawCircle(0, 0, 5);
	this.image.x = x;
	this.image.y = y;

	GJ.getStage().addChild(this.image);
};


Bullet.prototype.update = function () {
	this.image.x += this.velX;
	this.image.y += this.velY;
};


Bullet.prototype.checkCollision = function (object) {
	// return GV.Collisions.boundingBox(this.image, object.image);
};