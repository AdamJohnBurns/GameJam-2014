var Actor = function (type) {
	this.active = true;
	this.state = GJ.States.MOVING_LEFT;

	this.accelX = 0;
	this.accelY = 0;

	this.type = type;

	if (this.type === GJ.ActorTypes.GROUND_NORMAL) {
		this.useGravity = true;
		this.moveSpeed = 1;
		this.maxMoveSpeed = 5;
		this.weight = 2;
	} else if (this.type === GJ.ActorTypes.GROUND_EXPLODING) {
		this.useGravity = true;
		this.moveSpeed = 1;
		this.maxMoveSpeed = 5;
		this.weight = 2;
	} else if (this.type === GJ.ActorTypes.FLYING_NORMAL) {
		this.useGravity = false;
		this.moveSpeed = 1;
		this.maxMoveSpeed = 5;
		this.weight = 2;
		// add the baloon sprite as well
	}

	this.image = new createjs.Bitmap(GJ.Assets.get('sprite1'));
	this.image.x = Math.random() * 100 + 700;
	this.image.y = Math.random() * 400;

	this.waitTimer = 0;

	GJ.getStage().addChild(this.image);

	// this.image.scaleX = 0.25;
	// this.image.scaleY = 0.25;

	this.image.regX = 25;
	this.image.regY = 47;

	// this.image.addEventListener('click', function (event) {
	// 	console.log('actor clicked at:' + event.stageX + ', ' + event.stageY);
	// });
};


Actor.prototype.update = function () {
	if (this.active) {
		this.doAI();
		this.applyVelocity();
	}
};


Actor.prototype.doAI = function () {
	if (this.state === GJ.States.MOVING_LEFT) {
		if (this.image.x <= GJ.getCurrentWorld().getGoalX()) {
			this.state = GJ.States.STEALING;
		} else {
			this.moveLeft();
		}
	} else if (this.state === GJ.States.STEALING) {
		this.waitTimer++;

		this.idle();

		if (this.waitTimer > 100) {
			this.state = GJ.States.LEGGING_IT;
		}
	} else if (this.state === GJ.States.LEGGING_IT) {
		this.moveRight();

		if (this.image.x >= GJ.getStage().canvas.width + 50) {
			GJ.stoleMyBike();
			this.kill();
		}
	} else if (this.state === GJ.States.EXPLODING) {

	}
};


Actor.prototype.applyVelocity = function () {

	if (this.useGravity) {
		this.accelY += GJ.getCurrentWorld().getGravity();
	}

	this.image.x += this.accelX;
	this.image.y += this.accelY;
};


Actor.prototype.getImage = function () {
	return this.image;
};


Actor.prototype.throwBack = function () {

};


Actor.prototype.moveLeft = function () {
	// this.image.x -= this.moveSpeed;
	this.accelX -= this.moveSpeed;

	if (this.accelX < -this.maxMoveSpeed) {
		this.accelX = -this.maxMoveSpeed;
	}

	this.direction = GJ.Directions.LEFT;
	this.image.scaleX = 1;
	// this.image.gotoAndPlay('run');
};


Actor.prototype.moveRight = function () {
	// this.image.x += this.moveSpeed;
	this.accelX += this.moveSpeed;

	if (this.accelX > this.maxMoveSpeed) {
		this.accelX = this.maxMoveSpeed;
	}

	this.direction = GJ.Directions.RIGHT;
	this.image.scaleX = -1;
	// this.image.gotoAndPlay('run');
};


Actor.prototype.idle = function () {
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


Actor.prototype.kill = function () {
	this.active = false;

	this.emitter = new createjs.ParticleEmitter();
    this.emitter.position = new createjs.Point(this.image.x, this.image.y);
    this.emitter.emitterType = createjs.ParticleEmitterType.Emit;
    this.emitter.duration = 5;	// how long emitter lasts for
    this.emitter.emissionRate = 30;
    this.emitter.maxParticles = 200;
    this.emitter.life = 3000;
    this.emitter.lifeVar = 1000;
    this.emitter.speed = 10;
    this.emitter.speedVar = 0;
    this.emitter.positionVarX = 0;
    this.emitter.positionVarY = 0;
    this.emitter.accelerationX = 0;
    this.emitter.accelerationY = 0;
    this.emitter.radialAcceleration = 0;
    this.emitter.radialAccelerationVar = 0;
    this.emitter.tangentalAcceleration = 0;
    this.emitter.tangentalAccelerationVar = 10;
    this.emitter.angle = 0;
    this.emitter.angleVar = 180;
    this.emitter.startSpin = 0;
    this.emitter.startSpinVar = 0;
    this.emitter.endSpin = null;
    this.emitter.endSpinVar = null;
    this.emitter.startColor = [150, 150, 150];
    this.emitter.startColorVar = [0, 0, 0];
    this.emitter.startOpacity = 1;
    this.emitter.endColor = null;
    this.emitter.endColorVar = null;
    this.emitter.endOpacity = 0;
    this.emitter.startSize = 20;
    this.emitter.startSizeVar = 0;
    this.emitter.endSize = 40;
    this.emitter.endSizeVar = null;

    GJ.getStage().addChild(this.emitter);

    GJ.getStage().removeChild(this.image);
};


Actor.prototype.hitByBullet = function () {
	this.kill();
};