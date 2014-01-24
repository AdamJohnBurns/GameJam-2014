World = function (goalX, goalY, groundOffset, gravity) {
	var stageWidth = GJ.getStage().canvas.width,
		stageHeight = GJ.getStage().canvas.height;

	this.groundHeight = stageHeight - groundOffset;
	this.gravity = gravity;

	this.goalX = goalX;
	this.goalY = goalY;

	this.shape = new createjs.Shape();
	this.shape.graphics.beginFill("red").drawRect(0, this.groundHeight, stageWidth, stageHeight);

	this.gems = new createjs.Shape();
	this.gems.graphics.beginFill("orange").drawRect(0, 30, 30, 30);
	this.gems.x = this.goalX - 15;
	this.gems.y = this.goalY - 15;

	GJ.getStage().addChild(this.shape);
	GJ.getStage().addChild(this.gems);
};


World.prototype.update = function () {
};



World.prototype.getGroundHeight = function () {
	return this.groundHeight;
};


World.prototype.getGravity = function () {
	return this.gravity;
};


World.prototype.handleGravity = function (object) {

	var height = object.getBounds().height / 2;

	if (object.y + height < this.groundHeight) {
		// object.y += this.gravity;
	} else {
		object.y = this.groundHeight - height;
		// object.
	}
};


World.prototype.getGoalX = function () {
	return this.goalX;
};