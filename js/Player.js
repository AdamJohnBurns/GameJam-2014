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

	this.footstepDelay = 30;
	this.footstepTimer = this.footstepDelay;
	
	this.isOnGround = false;

	this.attackRange = 20;

	this.isMining = false;

	this.hitDelay = 100;
	this.hitTimer = 0;

	this.direction = GJ.Directions.RIGHT;

	this.gun = new Gun(10, 6, 0, this, 0, -48);
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
			GJ.Assets.get('MainCharacterShoot'), 	// 17, 10 = fire
			GJ.Assets.get('MainCharacterPickaxe'), 	// 104
			GJ.Assets.get('MainCharacterMelee') 	// 14
		], 
		frames: [
			// x, y, width, height, index, regX, regY
			// the index needs to match the file with the sprites
			[0,0,67,97,0,32.3,96.65],[72,0,67,97,0,32.3,96.65],[144,0,67,97,0,32.3,96.65],[0,102,67,97,0,32.3,96.65],[72,102,67,97,0,32.3,96.65],[144,102,67,97,0,32.3,96.65],[0,204,67,97,0,32.3,96.65],[72,204,67,97,0,32.3,96.65],[144,204,67,97,0,32.3,96.65],[0,306,67,97,0,32.3,96.65],[72,306,67,97,0,32.3,96.65],[144,306,67,97,0,32.3,96.65],[0,408,67,97,0,32.3,96.65],
			[0,0,71,113,1,37.75,112.35],[71,0,71,113,1,37.75,112.35],[142,0,71,113,1,37.75,112.35],[213,0,71,113,1,37.75,112.35],[284,0,71,113,1,37.75,112.35],[355,0,71,113,1,37.75,112.35],[426,0,71,113,1,37.75,112.35],[0,113,71,113,1,37.75,112.35],[71,113,71,113,1,37.75,112.35],[142,113,71,113,1,37.75,112.35],[213,113,71,113,1,37.75,112.35],[284,113,71,113,1,37.75,112.35],[355,113,71,113,1,37.75,112.35],[426,113,71,113,1,37.75,112.35],[0,226,71,113,1,37.75,112.35],[71,226,71,113,1,37.75,112.35],[142,226,71,113,1,37.75,112.35],
			[0,0,101,104,2,47.05,99.85],[101,0,101,104,2,47.05,99.85],[202,0,101,104,2,47.05,99.85],[303,0,101,104,2,47.05,99.85],[404,0,101,104,2,47.05,99.85],[0,104,101,104,2,47.05,99.85],[101,104,101,104,2,47.05,99.85],[202,104,101,104,2,47.05,99.85],[303,104,101,104,2,47.05,99.85],[404,104,101,104,2,47.05,99.85],[0,208,101,104,2,47.05,99.85],[101,208,101,104,2,47.05,99.85],[202,208,101,104,2,47.05,99.85],[303,208,101,104,2,47.05,99.85],[404,208,101,104,2,47.05,99.85],[0,312,101,104,2,47.05,99.85],[101,312,101,104,2,47.05,99.85],[202,312,101,104,2,47.05,99.85],[303,312,101,104,2,47.05,99.85],[404,312,101,104,2,47.05,99.85],[0,416,101,104,2,47.05,99.85],[101,416,101,104,2,47.05,99.85],[202,416,101,104,2,47.05,99.85],[303,416,101,104,2,47.05,99.85],[404,416,101,104,2,47.05,99.85],[0,520,101,104,2,47.05,99.85],[101,520,101,104,2,47.05,99.85],[202,520,101,104,2,47.05,99.85],[303,520,101,104,2,47.05,99.85],[404,520,101,104,2,47.05,99.85],[0,624,101,104,2,47.05,99.85],[101,624,101,104,2,47.05,99.85],[202,624,101,104,2,47.05,99.85],[303,624,101,104,2,47.05,99.85],[404,624,101,104,2,47.05,99.85],[0,728,101,104,2,47.05,99.85],[101,728,101,104,2,47.05,99.85],[202,728,101,104,2,47.05,99.85],[303,728,101,104,2,47.05,99.85],[404,728,101,104,2,47.05,99.85],
			[0,0,132,97,3,68.1,95.85],[132,0,132,97,3,68.1,95.85],[264,0,132,97,3,68.1,95.85],[0,97,132,97,3,68.1,95.85],[132,97,132,97,3,68.1,95.85],[264,97,132,97,3,68.1,95.85],[0,194,132,97,3,68.1,95.85],[132,194,132,97,3,68.1,95.85],[264,194,132,97,3,68.1,95.85],[0,291,132,97,3,68.1,95.85],[132,291,132,97,3,68.1,95.85],[264,291,132,97,3,68.1,95.85],[0,388,132,97,3,68.1,95.85],[132,388,132,97,3,68.1,95.85],[264,388,132,97,3,68.1,95.85],[0,485,132,97,3,68.1,95.85],[132,485,132,97,3,68.1,95.85],
			[0,0,150,143,4,75.25,141.8],[150,0,150,143,4,75.25,141.8],[300,0,150,143,4,75.25,141.8],[450,0,150,143,4,75.25,141.8],[600,0,150,143,4,75.25,141.8],[750,0,150,143,4,75.25,141.8],[900,0,150,143,4,75.25,141.8],[1050,0,150,143,4,75.25,141.8],[1200,0,150,143,4,75.25,141.8],[1350,0,150,143,4,75.25,141.8],[1500,0,150,143,4,75.25,141.8],[1650,0,150,143,4,75.25,141.8],[1800,0,150,143,4,75.25,141.8],[0,143,150,143,4,75.25,141.8],[150,143,150,143,4,75.25,141.8],[300,143,150,143,4,75.25,141.8],[450,143,150,143,4,75.25,141.8],[600,143,150,143,4,75.25,141.8],[750,143,150,143,4,75.25,141.8],[900,143,150,143,4,75.25,141.8],[1050,143,150,143,4,75.25,141.8],[1200,143,150,143,4,75.25,141.8],[1350,143,150,143,4,75.25,141.8],[1500,143,150,143,4,75.25,141.8],[1650,143,150,143,4,75.25,141.8],[1800,143,150,143,4,75.25,141.8],[0,286,150,143,4,75.25,141.8],[150,286,150,143,4,75.25,141.8],[300,286,150,143,4,75.25,141.8],[450,286,150,143,4,75.25,141.8],[600,286,150,143,4,75.25,141.8],[750,286,150,143,4,75.25,141.8],[900,286,150,143,4,75.25,141.8],[1050,286,150,143,4,75.25,141.8],[1200,286,150,143,4,75.25,141.8],[1350,286,150,143,4,75.25,141.8],[1500,286,150,143,4,75.25,141.8],[1650,286,150,143,4,75.25,141.8],[1800,286,150,143,4,75.25,141.8],[0,429,150,143,4,75.25,141.8],[150,429,150,143,4,75.25,141.8],[300,429,150,143,4,75.25,141.8],[450,429,150,143,4,75.25,141.8],[600,429,150,143,4,75.25,141.8],[750,429,150,143,4,75.25,141.8],[900,429,150,143,4,75.25,141.8],[1050,429,150,143,4,75.25,141.8],[1200,429,150,143,4,75.25,141.8],[1350,429,150,143,4,75.25,141.8],[1500,429,150,143,4,75.25,141.8],[1650,429,150,143,4,75.25,141.8],[1800,429,150,143,4,75.25,141.8],[0,572,150,143,4,75.25,141.8],[150,572,150,143,4,75.25,141.8],[300,572,150,143,4,75.25,141.8],[450,572,150,143,4,75.25,141.8],[600,572,150,143,4,75.25,141.8],[750,572,150,143,4,75.25,141.8],[900,572,150,143,4,75.25,141.8],[1050,572,150,143,4,75.25,141.8],[1200,572,150,143,4,75.25,141.8],[1350,572,150,143,4,75.25,141.8],[1500,572,150,143,4,75.25,141.8],[1650,572,150,143,4,75.25,141.8],[1800,572,150,143,4,75.25,141.8],[0,715,150,143,4,75.25,141.8],[150,715,150,143,4,75.25,141.8],[300,715,150,143,4,75.25,141.8],[450,715,150,143,4,75.25,141.8],[600,715,150,143,4,75.25,141.8],[750,715,150,143,4,75.25,141.8],[900,715,150,143,4,75.25,141.8],[1050,715,150,143,4,75.25,141.8],[1200,715,150,143,4,75.25,141.8],[1350,715,150,143,4,75.25,141.8],[1500,715,150,143,4,75.25,141.8],[1650,715,150,143,4,75.25,141.8],[1800,715,150,143,4,75.25,141.8],[0,858,150,143,4,75.25,141.8],[150,858,150,143,4,75.25,141.8],[300,858,150,143,4,75.25,141.8],[450,858,150,143,4,75.25,141.8],[600,858,150,143,4,75.25,141.8],[750,858,150,143,4,75.25,141.8],[900,858,150,143,4,75.25,141.8],[1050,858,150,143,4,75.25,141.8],[1200,858,150,143,4,75.25,141.8],[1350,858,150,143,4,75.25,141.8],[1500,858,150,143,4,75.25,141.8],[1650,858,150,143,4,75.25,141.8],[1800,858,150,143,4,75.25,141.8],[0,1001,150,143,4,75.25,141.8],[150,1001,150,143,4,75.25,141.8],[300,1001,150,143,4,75.25,141.8],[450,1001,150,143,4,75.25,141.8],[600,1001,150,143,4,75.25,141.8],[750,1001,150,143,4,75.25,141.8],
			[0,0,155,157,5,55.65,151.15],[160,0,155,157,5,55.65,151.15],[320,0,155,157,5,55.65,151.15],[0,162,155,157,5,55.65,151.15],[160,162,155,157,5,55.65,151.15],[320,162,155,157,5,55.65,151.15],[0,324,155,157,5,55.65,151.15],[160,324,155,157,5,55.65,151.15],[320,324,155,157,5,55.65,151.15],[0,486,155,157,5,55.65,151.15],[160,486,155,157,5,55.65,151.15],[320,486,155,157,5,55.65,151.15],[0,648,155,157,5,55.65,151.15],[160,648,155,157,5,55.65,151.15]
		],
		animations: { 
			idle: [0, 10],
			run: [11, 27],
			jump: [28, 43],
			fall: [44, 69],
			shoot: [70, 86],
			pickaxe: [87, 182],
			melee: [183, 196]

			// melee: [24, 24],
			// shoot: [27, 27]
		}
	});
	this.fireShotFrame = 80;
	this.image = new createjs.Sprite(data, 'idle');


	this.height = this.image.getBounds().height;//48;
	this.image.x = 100;
	this.image.y = 100;


	GJ.getStage().addChild(this.image);

};


Player.prototype.update = function () {
	this.checkReadyToFire();
	this.checkReadyToStopShooting();
	this.checkMining();

	this.handleInput();
	this.checkActorCollision();
	this.gun.update();
	this.gun.checkBulletCollisions(GJ.getActors());


	this.checkWorldCollision();
	this.applyVelocity();

	if (this.footstepTimer <= 0) {
		GJ.Sound.triggerEvent("footstep");
		this.footstepTimer = this.footstepDelay;
	} else {	
		this.footstepTimer--;		
	}

	if (this.hitTimer > 0) {
		this.hitTimer--;
	}
	// console.log(this.image.currentAnimation);
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

		this.mineGems();

	}

	if (GJ.Input.isPressed(this.jumpKey)) {
		this.jump();
	}
};


Player.prototype.checkReadyToFire = function () {
	if (typeof this.image.readyToFire !== 'undefined' && this.image.readyToFire) {
		this.gun.fire();
		this.image.readyToFire = undefined;
		GJ.Sound.triggerEvent("swish");

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

	this.image.x += this.accelX;
	this.image.y += this.accelY;

	this.waitForEffect--;
};


Player.prototype.checkMining = function () {
	if (this.mining) {
		if (this.image.currentAnimation !== 'pickaxe') {
			this.mining = false;
			this.image.removeEventListener('animationend');
			this.image.giveGem = false;
			
		}
	}

	if (typeof this.image.giveGem !== 'undefined' && this.image.giveGem === true) {
		GJ.addGem();
		
		GJ.Sound.triggerEvent("gem_pickup");
		this.image.giveGem = undefined;
	}
};


Player.prototype.mineGems = function () {
	if (this.image.currentAnimation !== 'pickaxe' && this.isOnGround && this.direction === GJ.Directions.LEFT && this.image.x <= 150) {
		this.image.gotoAndPlay('pickaxe');
		GJ.Sound.triggerEvent("mine");

		this.image.removeEventListener('animationend');
		this.mining = true;

		this.image.addEventListener('animationend', function (event) {
			if (event.currentTarget.currentFrame === 182) {
				// event.currentTarget.giveGem = true;
				GJ.addGem();
			}

			if (event.currentTarget.currentAnimation !== 'pickaxe') {
				// event.currentTarget.giveGem = undefined;
				event.remove();
			}

		});
	}
};


Player.prototype.moveLeft = function () {

	this.accelX -= this.moveSpeed;

	if (this.accelX < -this.maxMoveSpeed) {
		this.accelX = -this.maxMoveSpeed;
	}

	if(this.accelX > 0 && this.waitForEffect <= 0 && this.isOnGround ) {
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

	if (this.image.currentAnimation !== 'melee') {

		this.image.gotoAndPlay('melee');

		this.image.addEventListener('tick', function (event) {
// 183, 196
			if(event.currentTarget.currentFrame == 195) {
				console.log('DONE');
				event.remove();
				event.currentTarget.currentAnimation = 'idle';

			} else if(event.currentTarget.currentFrame >= 189) {
				var i, 
					actors = GJ.getActors(),
					attackBox = {
						x: event.currentTarget.x,
						y: event.currentTarget.y,
						width: 5,//event.currentTarget.getBounds().width,
						height: 40//event.currentTarget.getBounds().height
					},  // use attackrange
					actorBox;

				// this.dampenAcceleration();

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
			}
		});
	}

};


Player.prototype.shoot = function () {
	if (GJ.getNumGems() > 1) {
	// if (this.image.currentAnimation !== 'shoot') {
		this.image.gotoAndPlay('shoot');
		this.dampenAcceleration();

		this.image.removeEventListener('tick');
		this.image.removeEventListener('animationend');

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
	// }
	} else {
		console.log('SHOW GET MORE GEMS MSG');
		GJ.Sound.triggerEvent("turtle_sad");
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

	if (this.image.currentAnimation !== 'idle' && this.isOnGround && this.image.currentAnimation !== 'shoot'&& this.image.currentAnimation !== 'pickaxe' && this.image.currentAnimation !== 'melee') {
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

		if (intersection) {

			if (this.hitTimer <= 0) {
				this.hitTimer = this.hitDelay;
				GJ.takeHit();
				GJ.Sound.triggerEvent("meow");

				if(this.image.x < actor.getImage().x) {
					this.accelX = -20;
				} else {
					this.accelX = 20;
				}
			}
		}

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