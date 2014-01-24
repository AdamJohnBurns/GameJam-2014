var Player = function (leftKey, rightKey, shootKey, jumpKey, moveSpeed, maxMoveSpeed, weight) {
	var blurFilter, bounds, data;

	this.leftKey = leftKey;
	this.rightKey = rightKey;
	this.shootKey = shootKey;
	this.jumpKey = jumpKey;

	this.accelX = 0;
	this.accelY = 0;

	this.moveSpeed = moveSpeed;
	this.maxMoveSpeed = maxMoveSpeed;
	this.weight = weight;

	this.direction = GJ.Directions.RIGHT;

	// data = new createjs.SpriteSheet({
 //            'images': [GJ.Assets.get('playerSS')],
 //            'frames': {
 //            	'regX': 0, 
 //            	'height': 292, 
 //            	'count': 64, 
 //            	'regY': 0, 
 //            	'width': 165
 //            },
 //            // define two animations, run (loops, 1.5x speed) and jump (returns to run):
 //            'animations': {
 //            	'run': [0, 25, 'run', 1.5], 
 //            	'jump': [26, 63, 'run'],
 //            	'idle': [0, 0]
 //            }
 //    });
 //    this.image = new createjs.Sprite(data, "run");
 //    this.image.setTransform(-200, 90, 0.8, 0.8);
 //    this.image.framerate = 30;

	this.image = new createjs.Shape();
	this.image.graphics.beginFill("red").drawCircle(0, 0, 50);
	this.image.x = 100;
	this.image.y = 100;

	this.blurFilter = new createjs.BlurFilter(10, 10, 1);
	this.image.filters = [this.blurFilter];
	this.bounds = this.blurFilter.getBounds();
// console.log(bounds.x, bounds.y, bounds.width, bounds.height);
	// MUST use a cache when using filters
	this.image.cache(-50+this.bounds.x, -50+this.bounds.y, 100+this.bounds.width, 100+this.bounds.height);

	GJ.getStage().addChild(this.image);

	this.gun = new Gun(GJ.getTargetFPS(), 6, 0, this);
	this.gunType = GJ.Weapons.PLAYER_GUN;
};


Player.prototype.update = function () {
	this.handleInput();
	this.checkActorCollision();
	this.checkWorldCollision();
	this.gun.update();
	this.gun.checkBulletCollisions(GJ.getActors());

	this.applyVelocity();
	this.checkWorldCollision();
};


Player.prototype.handleInput = function () {
	if (GJ.Input.isPressed(this.leftKey)) {
		this.moveLeft();
	} else if (GJ.Input.isPressed(this.rightKey)) {
		this.moveRight();
	} else {
		this.idle();
	}

	if (GJ.Input.isPressed(this.shootKey)) {
		this.gun.fire();
	}

	if (GJ.Input.isPressed(this.jumpKey)) {
		this.jump();
	}
};


Player.prototype.applyVelocity = function () {

	if (this.accelX > this.maxMoveSpeed) {
		this.accelX = this.maxMoveSpeed;
	} else if (this.accelX < -this.maxMoveSpeed) {
		this.accelX = -this.maxMoveSpeed;
	}

	this.accelY += GJ.getCurrentWorld().getGravity();

	// if (this.accelY > 0) {
	// 	this.accelY -= GJ.getCurrentWorld().getGravity();

	// 	if (this.accelY < 0) {
	// 		this.accelY = 0;
	// 	}		
	// } else if (this.accelY < 0) {
	// 	// if (this.accelY < -this.maxMoveSpeed) {
	// 	// 	this.accelY = -this.maxMoveSpeed;
	// 	// }
	// }

	this.image.x += this.accelX;
	this.image.y += this.accelY;
};


Player.prototype.moveLeft = function () {
	// this.image.x -= this.moveSpeed;
	this.accelX -= this.moveSpeed;
	this.direction = GJ.Directions.LEFT;
	this.image.scaleX = 1;
	// this.image.gotoAndPlay('run');
};


Player.prototype.moveRight = function () {
	// this.image.x += this.moveSpeed;
	this.accelX += this.moveSpeed;
	this.direction = GJ.Directions.RIGHT;
	this.image.scaleX = -1;
	// this.image.gotoAndPlay('run');
};


Player.prototype.jump = function () {
	if (this.image.y >= GJ.getCurrentWorld().getGroundHeight()) {
		console.log('true');
		this.accelY = 500;
		// this.image.gotoAndPlay('jump');
	} else {
		console.log('false');
	}
};


Player.prototype.idle = function () {
	if (this.accelX > 0) {
		this.accelX -= this.weight;

		if (this.accelX < 0) {
			this.accelX = 0;
		}
	} else if (this.accelX < 0) {
		this.accelX += this.weight;

		if (this.accelX > 0) {
			this.accelX = 0;
		}
	}

	// this.image.gotoAndPlay('idle');
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
	var height = this.image.getBounds().height / 2;

	if (this.image.y + height > this.groundHeight) {
		this.image.y = GJ.getCurrentWorld().getGroundHeight();
		this.accelY = 0;
	}
};