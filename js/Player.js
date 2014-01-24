var Player = function (leftKey, rightKey, shootKey, moveSpeed) {
	var blurFilter, bounds;

	this.leftKey = leftKey;
	this.rightKey = rightKey;
	this.shootKey = shootKey;

	this.moveSpeed = moveSpeed;

	this.image = new createjs.Shape();
	this.image.graphics.beginFill("red").drawCircle(0, 0, 50);
	this.image.x = 100;
	this.image.y = 100;

	this.blurFilter = new createjs.BlurFilter(5, 5, 1);
	this.image.filters = [this.blurFilter];
	this.bounds = this.blurFilter.getBounds();
// console.log(bounds.x, bounds.y, bounds.width, bounds.height);
	// MUST use a cache when using filters
	this.image.cache(-50+this.bounds.x, -50+this.bounds.y, 100+this.bounds.width, 100+this.bounds.height);

	GJ.getStage().addChild(this.image);
};


Player.prototype.update = function () {
	this.handleInput();
	this.checkActorCollision();
	this.checkWorldCollision();
};


Player.prototype.handleInput = function () {
	if (GJ.Input.isPressed(this.leftKey)) {
		this.moveLeft();
	} else if (GJ.Input.isPressed(this.rightKey)) {
		this.moveRight();
	}

	if (GJ.Input.isPressed(this.shootKey)) {

	}
};


Player.prototype.moveLeft = function () {
	this.image.x -= this.moveSpeed;
};


Player.prototype.moveRight = function () {
	this.image.x += this.moveSpeed;
};


Player.prototype.getImage = function () {
	return this.image;
};


Player.prototype.checkActorCollision = function (actor) {

	if (typeof actor !== 'undefined') {
		// can you check this with shapes!????
		var intersection = ndgmr.checkRectCollision(this.image, actor.getImage());
		// console.log(intersection);
	} else {
		// console.error('checkActorCollision(): actor is undefined');
	}
// intersection is null if no collision, otherwise a {x,y,width,height}-Object is returned
};


Player.prototype.checkWorldCollision = function () {
	// GJ.getCurrentWorld();
};