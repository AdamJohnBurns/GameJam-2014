var Player = function (forwardKey) {
	var blurFilter, bounds;

	this.forwardKey = forwardKey;

	this.shape = new createjs.Shape();
	this.shape.graphics.beginFill("red").drawCircle(0, 0, 50);
	this.shape.x = 100;
	this.shape.y = 100;

	this.blurFilter = new createjs.BlurFilter(5, 5, 1);
	this.shape.filters = [this.blurFilter];
	this.bounds = this.blurFilter.getBounds();
// console.log(bounds.x, bounds.y, bounds.width, bounds.height);
	// MUST use a cache when using filters
	this.shape.cache(-50+this.bounds.x, -50+this.bounds.y, 100+this.bounds.width, 100+this.bounds.height);

	GJ.getStage().addChild(this.shape);
};


Player.prototype.update = function () {
	this.handleInput();
	this.checkActorCollision();
	this.checkWorldCollision();
};


Player.prototype.handleInput = function () {
	if (GJ.Input.isPressed(this.forwardKey)) {
		this.moveForward();
	}
};


Player.prototype.moveForward = function () {
	this.shape.x += 5;//GJ.toDelta(5);
};


Player.prototype.checkActorCollision = function (actor) {

	if (typeof actor !== 'undefined') {
		// can you check this with shapes!????
		var intersection = ndgmr.checkRectCollision(this.shape, actor.getBitmap());
		console.log(intersection);
	} else {
		// console.error('checkActorCollision(): actor is undefined');
	}
// intersection is null if no collision, otherwise a {x,y,width,height}-Object is returned
};


Player.prototype.checkWorldCollision = function () {
	// GJ.getCurrentWorld();
};