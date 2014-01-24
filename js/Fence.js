var Fence = function () {
	this.image = new createjs.Shape();
	this.image.graphics.beginFill("green").drawRect(0, 0, 10, 100);
	this.image.x = x;
	this.image.y = y;

	GJ.getStage().addChild(this.image);
};


Fence.prototype.update = function () {
	
};


Fence.prototype.checkCollision = function (object) {
	return GJ.Collisions.boundingBox(this.image, object.image);
};