World = function (groundOffset, gravity) {
	var stageWidth = GJ.getStage().canvas.width,
		stageHeight = GJ.getStage().canvas.height;

	this.groundHeight = stageHeight - groundOffset;
	this.gravity = gravity;

	this.shape = new createjs.Shape();
	this.shape.graphics.beginFill("red").drawRect(0, this.groundHeight, stageWidth, stageHeight);

	GJ.getStage().addChild(this.shape);
};


World.prototype.update = function () {
};



// World.prototype.getGroundHeight = function () {
// 	return this.groundHeight;
// };


// World.prototype.getGravity = function () {
// 	return this.gravity;
// };


World.prototype.handleGravity = function (object) {

	var height = object.getBounds().height / 2;

	if (object.y + height < this.groundHeight) {
		object.y += this.gravity;
	} else {
		object.y = this.groundHeight - height;
	}
};