var Player = function (forwardKey) {
	this.forwardKey = forwardKey;

	this.shape = new createjs.Shape();
	this.shape.graphics.beginFill("red").drawCircle(0, 0, 50);
	this.shape.x = 100;
	this.shape.y = 100;

	GJ.getStage().addChild(this.shape);
};


Player.prototype.update = function () {
	this.handleInput();
	this.checkActorCollision();
	this.checkWorldCollision();
};


Player.prototype.handleInput = function () {
	if (GJ.Input.isPressed(this.forwardKey)) {
		console.log('forward');
		this.moveForward();
	}
};


Player.prototype.moveForward = function () {
	this.shape.x += 5;//GJ.toDelta(5);
};


Player.prototype.checkActorCollision = function () {
};


Player.prototype.checkWorldCollision = function () {
	// GJ.getCurrentWorld();
};