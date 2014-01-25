var Player = function (leftKey, rightKey, shootKey, jumpKey, meleeKey, useKey, moveSpeed, maxMoveSpeed, weight) {
	var blurFilter, bounds, data;

	this.leftKey = leftKey;
	this.rightKey = rightKey;
	this.shootKey = shootKey;
	this.meleeKey = meleeKey;
	this.jumpKey = jumpKey;
	this.useKey = useKey;

	this.accelX = 0;
	this.accelY = 0;

	this.moveSpeed = moveSpeed;
	this.maxMoveSpeed = maxMoveSpeed;
	this.weight = weight;

	
	this.isOnGround = false;

	this.attackRange = 20;

	this.isMining = false;

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

	this.gun = new Gun(GJ.getTargetFPS(), 6, 0, this, 0, -48);
	this.gunType = GJ.Weapons.PLAYER_GUN;

	this.waitForEffect = 0;

	var data;
	data = new createjs.SpriteSheet({
		framerate: 25,
		images: [ 
			GJ.Assets.get('MainCharacterIdle'), // 10
			GJ.Assets.get('MainCharacterRun'), 	// 17
			GJ.Assets.get('MainCharacterJump'), 	// 15
			// repeat jump sheet for landing anim // 25
			GJ.Assets.get('MainCharacterShoot') 	// 17, 10 = fire
		], 
		frames: [
			// x, y, width, height, index, regX, regY
			// the index needs to match the file with the sprites
			[0,0,67,97,0,32.3,96.65],[72,0,67,97,0,32.3,96.65],[144,0,67,97,0,32.3,96.65],[0,102,67,97,0,32.3,96.65],[72,102,67,97,0,32.3,96.65],[144,102,67,97,0,32.3,96.65],[0,204,67,97,0,32.3,96.65],[72,204,67,97,0,32.3,96.65],[144,204,67,97,0,32.3,96.65],[0,306,67,97,0,32.3,96.65],[72,306,67,97,0,32.3,96.65],[144,306,67,97,0,32.3,96.65],[0,408,67,97,0,32.3,96.65],
			[0,0,71,113,1,37.75,112.35],[71,0,71,113,1,37.75,112.35],[142,0,71,113,1,37.75,112.35],[213,0,71,113,1,37.75,112.35],[284,0,71,113,1,37.75,112.35],[355,0,71,113,1,37.75,112.35],[426,0,71,113,1,37.75,112.35],[0,113,71,113,1,37.75,112.35],[71,113,71,113,1,37.75,112.35],[142,113,71,113,1,37.75,112.35],[213,113,71,113,1,37.75,112.35],[284,113,71,113,1,37.75,112.35],[355,113,71,113,1,37.75,112.35],[426,113,71,113,1,37.75,112.35],[0,226,71,113,1,37.75,112.35],[71,226,71,113,1,37.75,112.35],[142,226,71,113,1,37.75,112.35],
			[0,0,101,104,2,47.05,99.85],[101,0,101,104,2,47.05,99.85],[202,0,101,104,2,47.05,99.85],[303,0,101,104,2,47.05,99.85],[404,0,101,104,2,47.05,99.85],[0,104,101,104,2,47.05,99.85],[101,104,101,104,2,47.05,99.85],[202,104,101,104,2,47.05,99.85],[303,104,101,104,2,47.05,99.85],[404,104,101,104,2,47.05,99.85],[0,208,101,104,2,47.05,99.85],[101,208,101,104,2,47.05,99.85],[202,208,101,104,2,47.05,99.85],[303,208,101,104,2,47.05,99.85],[404,208,101,104,2,47.05,99.85],[0,312,101,104,2,47.05,99.85],[101,312,101,104,2,47.05,99.85],[202,312,101,104,2,47.05,99.85],[303,312,101,104,2,47.05,99.85],[404,312,101,104,2,47.05,99.85],[0,416,101,104,2,47.05,99.85],[101,416,101,104,2,47.05,99.85],[202,416,101,104,2,47.05,99.85],[303,416,101,104,2,47.05,99.85],[404,416,101,104,2,47.05,99.85],[0,520,101,104,2,47.05,99.85],[101,520,101,104,2,47.05,99.85],[202,520,101,104,2,47.05,99.85],[303,520,101,104,2,47.05,99.85],[404,520,101,104,2,47.05,99.85],[0,624,101,104,2,47.05,99.85],[101,624,101,104,2,47.05,99.85],[202,624,101,104,2,47.05,99.85],[303,624,101,104,2,47.05,99.85],[404,624,101,104,2,47.05,99.85],[0,728,101,104,2,47.05,99.85],[101,728,101,104,2,47.05,99.85],[202,728,101,104,2,47.05,99.85],[303,728,101,104,2,47.05,99.85],[404,728,101,104,2,47.05,99.85],
			[0,0,132,97,3,68.1,95.85],[132,0,132,97,3,68.1,95.85],[264,0,132,97,3,68.1,95.85],[0,97,132,97,3,68.1,95.85],[132,97,132,97,3,68.1,95.85],[264,97,132,97,3,68.1,95.85],[0,194,132,97,3,68.1,95.85],[132,194,132,97,3,68.1,95.85],[264,194,132,97,3,68.1,95.85],[0,291,132,97,3,68.1,95.85],[132,291,132,97,3,68.1,95.85],[264,291,132,97,3,68.1,95.85],[0,388,132,97,3,68.1,95.85],[132,388,132,97,3,68.1,95.85],[264,388,132,97,3,68.1,95.85],[0,485,132,97,3,68.1,95.85],[132,485,132,97,3,68.1,95.85]
		],
		animations: { 
			idle: [0, 10],
			run: [11, 27],
			jump: [28, 43],
			fall: [44, 69],
			shoot: [70, 86]

			// melee: [24, 24],
			// shoot: [27, 27]
		}
	});
	this.fireShotFrame = 80;
	this.image = new createjs.Sprite(data, 'idle');



	this.height = this.image.getBounds().height;//48;

	// this.image = new createjs.Shape();
	// this.image.graphics.beginFill("red").drawCircle(0, 0, 50);
	this.image.x = 100;
	this.image.y = 100;

	// this.blurFilter = new createjs.BlurFilter(10, 10, 1);
	// this.image.filters = [this.blurFilter];
	// this.bounds = this.blurFilter.getBounds();
	// this.image.cache(-50+this.bounds.x, -50+this.bounds.y, 100+this.bounds.width, 100+this.bounds.height);

	GJ.getStage().addChild(this.image);



		// data = new createjs.SpriteSheet({
		//     'images': [GJ.Assets.get('ExplosionSmall')],
		//     'frames': {
		//     	'regX': 0, 
		//     	'height': 292, 
		//     	'count': 64, 
		//     	'regY': 0, 
		//     	'width': 165
		//     },
		//     // define two animations, run (loops, 1.5x speed) and jump (returns to run):
		//     'animations': {
		//     	'run': [0, 25, 'run', 1.5], 
		//     	'jump': [26, 63, 'run'],
		//     	'idle': [0, 0]
		//     }
	 //    });
	    // this.image = new createjs.Sprite(data, "run");
	    // this.image.setTransform(-200, 90, 0.8, 0.8);
	    // this.image.framerate = 30;
};


Player.prototype.update = function () {
	this.checkReadyToFire();
	this.checkReadyToStopShooting();

	this.handleInput();
	this.checkActorCollision();
	this.gun.update();
	this.gun.checkBulletCollisions(GJ.getActors());


	this.checkWorldCollision();
	this.applyVelocity();
	
};


Player.prototype.handleInput = function () {
	if (GJ.Input.isPressed(this.leftKey) && !this.isMining) {
		this.moveLeft();
	} else if (GJ.Input.isPressed(this.rightKey) && !this.isMining) {
		this.moveRight();
	} else {
		this.idle();
	}

	if (GJ.Input.isPressed(this.shootKey)) {
		this.shoot();
	}

	if (GJ.Input.isPressed(this.meleeKey)) {
		this.meleeAttack();
	}

	if (GJ.Input.isPressed(this.useKey)) {
		// if (GJ.getCurrentWorld().isInMineBounds()) {
		// 	this.mineGems();
		// }

		// this.buyFence();
	}

	if (GJ.Input.isPressed(this.jumpKey)) {
		this.jump();
	}
};


Player.prototype.checkReadyToFire = function () {
	if (typeof this.image.readyToFire !== 'undefined' && this.image.readyToFire) {
		this.gun.fire();
		this.image.readyToFire = undefined;

		this.image.removeEventListener('tick');
	}
};

Player.prototype.checkReadyToStopShooting = function () {
	if (typeof this.image.readyToStopShooting !== 'undefined' && this.image.readyToStopShooting) {
		this.image.readyToStopShooting = undefined;
		this.image.gotoAndPlay('idle');
		this.image.removeEventListener('animationend');
	}
};

Player.prototype.applyVelocity = function () {

	if (!this.isOnGround) {
		this.accelY += GJ.getCurrentWorld().getGravity();
	}

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

	this.waitForEffect--;
};


Player.prototype.moveLeft = function () {
	// this.image.x -= this.moveSpeed;
	this.accelX -= this.moveSpeed;

	if (this.accelX < -this.maxMoveSpeed) {
		this.accelX = -this.maxMoveSpeed;
	}

	if(this.accelX > 0 && this.waitForEffect <= 0 && this.isOnGround) {
		this.waitForEffect = 4;
		var effect = new Effect(this.image.x, this.image.y, GJ.EffectTypes.RUNNING_SMOKE, this.direction);
	}

	this.direction = GJ.Directions.LEFT;
	this.image.scaleX = -1;

	if (this.image.currentAnimation !== 'run' && this.isOnGround) {
		this.image.gotoAndPlay('run');
	}
};


Player.prototype.moveRight = function () {
	// this.image.x += this.moveSpeed;
	this.accelX += this.moveSpeed;

	if (this.accelX > this.maxMoveSpeed) {
		this.accelX = this.maxMoveSpeed;
	}

	if(this.accelX < 0 && this.waitForEffect <= 0 && this.isOnGround) {
		this.waitForEffect = 4;
		var effect = new Effect(this.image.x, this.image.y, GJ.EffectTypes.RUNNING_SMOKE, this.direction);
	}

	this.direction = GJ.Directions.RIGHT;
	this.image.scaleX = 1;

	if (this.image.currentAnimation !== 'run' && this.isOnGround) {
		this.image.gotoAndPlay('run');
	}
};


Player.prototype.meleeAttack = function () {
	var i, 
		actors = GJ.getActors(),
		attackBox = {
			x: this.image.x,
			y: this.image.y,
			width: this.image.getBounds().width,
			height: this.image.getBounds().height
		},  // use attackrange
		actorBox;

	this.dampenAcceleration();

	for (i = 0; i < actors.length; i++) {
		actorBox = {
			x: actors[i].image.x,
			y: actors[i].image.y,
			width: actors[i].image.getBounds().width,
			height: actors[i].image.getBounds().height,
		};

		if (GJ.Collisions.boundingBox(attackBox, actorBox)) {
			actors[i].kill();
		}
	}

	// this.image.gotoAndPlay('melee');
};


Player.prototype.shoot = function () {
	if (this.image.currentAnimation !== 'shoot') {
		this.image.gotoAndPlay('shoot');
		this.dampenAcceleration();

		this.image.addEventListener('tick', function (target) {
			// console.log(target.currentTarget.currentFrame);
			if (target.currentTarget.currentFrame == 80) {
				target.currentTarget.readyToFire = true;
			}
		});

		this.image.addEventListener('animationend', function (target) {
			target.currentTarget.readyToStopShooting = true;
			// console.log(event);
			// console.log(event2);
			// console.log('----');
		});
	}

	
};


Player.prototype.jump = function () {
	if (this.isOnGround) {
		this.accelY = -20;
		GJ.Sound.triggerEvent('footstep');

		if (this.image.currentAnimation !== 'jump') {
			this.image.gotoAndPlay('jump');
			var effect = new Effect(this.image.x, this.image.y, GJ.EffectTypes.JUMP_SMOKE, this.direction);
			// console.log('j');
		}
	}
};


Player.prototype.idle = function () {
	this.dampenAcceleration();

	if (this.image.currentAnimation !== 'idle' && this.isOnGround && this.image.currentAnimation !== 'shoot') {
		this.image.gotoAndPlay('idle');
	}
};


Player.prototype.dampenAcceleration = function () {
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
	var height = this.height;//this.image.getBounds().height / 2;

	if (this.image.y + this.accelY >= GJ.getCurrentWorld().getGroundHeight() ) {
		this.image.y = GJ.getCurrentWorld().getGroundHeight();

		if (this.image.currentAnimation !== 'jump') {
			this.accelY = 0;
		}

		this.isOnGround = true;
	} else {
		this.isOnGround = false;
		// this.image.gotoAndPlay('fall');
	}

	if (this.image.x < 0) {
		this.image.x = 0;
	} else if (this.image.x > GJ.getCurrentWorld().getWorldWidth()) {
		this.image.x = GJ.getCurrentWorld().getWorldWidth();
	}
};