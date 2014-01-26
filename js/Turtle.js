var Turtle = function () {
	var data;
	this.active = true;

	data = new createjs.SpriteSheet({
		framerate: 25,
		images: [ 
			GJ.Assets.get('TurtleIdle'), 		// 16
            GJ.Assets.get('TurtleHappy'),         // 16
            GJ.Assets.get('TurtleModeratlyHappy')         // 16
		], 
		frames: [
			// x, y, width, height, index, regX, regY
			// the index needs to match the file with the sprites
			[0,0,269,148,0,134.15,146.45],[274,0,269,148,0,134.15,146.45],[548,0,269,148,0,134.15,146.45],[0,153,269,148,0,134.15,146.45],[274,153,269,148,0,134.15,146.45],[548,153,269,148,0,134.15,146.45],[0,306,269,148,0,134.15,146.45],[274,306,269,148,0,134.15,146.45],[548,306,269,148,0,134.15,146.45],[0,459,269,148,0,134.15,146.45],[274,459,269,148,0,134.15,146.45],[548,459,269,148,0,134.15,146.45],[0,612,269,148,0,134.15,146.45],[274,612,269,148,0,134.15,146.45],[548,612,269,148,0,134.15,146.45],[0,765,269,148,0,134.15,146.45],
            [0,0,208,142,1,103.15,141],[213,0,208,142,1,103.15,141],[426,0,208,142,1,103.15,141],[639,0,208,142,1,103.15,141],[0,147,208,142,1,103.15,141],[213,147,208,142,1,103.15,141],[426,147,208,142,1,103.15,141],[639,147,208,142,1,103.15,141],[0,294,208,142,1,103.15,141],[213,294,208,142,1,103.15,141],[426,294,208,142,1,103.15,141],[639,294,208,142,1,103.15,141],[0,441,208,142,1,103.15,141],[213,441,208,142,1,103.15,141],[426,441,208,142,1,103.15,141],[639,441,208,142,1,103.15,141],
            [0,0,208,142,2,103.15,141],[213,0,208,142,2,103.15,141],[426,0,208,142,2,103.15,141],[639,0,208,142,2,103.15,141],[0,147,208,142,2,103.15,141],[213,147,208,142,2,103.15,141],[426,147,208,142,2,103.15,141],[639,147,208,142,2,103.15,141],[0,294,208,142,2,103.15,141],[213,294,208,142,2,103.15,141],[426,294,208,142,2,103.15,141],[639,294,208,142,2,103.15,141],[0,441,208,142,2,103.15,141],[213,441,208,142,2,103.15,141],[426,441,208,142,2,103.15,141],[639,441,208,142,2,103.15,141]
		],
		animations: { 
			idle: [0, 15],
            happy: [16, 31],
            moderatlyHappy: [32, 47]
		}
	});

	this.image = new createjs.Sprite(data, 'idle');

	this.image.x = 240;
	this.image.y = 505;

	GJ.getStage().addChild(this.image);

	this.image.gotoAndPlay('idle');

};


Turtle.prototype.update = function () {

};



Turtle.prototype.spawnHearts = function () {
	this.emitter = new createjs.ParticleEmitter(GJ.Assets.get('ParticleHearts'));
    this.emitter.position = new createjs.Point(this.image.x, this.image.y);
    this.emitter.emitterType = createjs.ParticleEmitterType.Emit;
    this.emitter.duration = 60;	// how long emitter lasts for
    this.emitter.emissionRate = 200;
    this.emitter.maxParticles = 200;
    this.emitter.life = 2000;
    this.emitter.lifeVar = 500;
    this.emitter.speed = 230;
    this.emitter.speedVar = 0;
    this.emitter.positionVarX = 5;
    this.emitter.positionVarY = 5;
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
    this.emitter.endSpin = 10;
    this.emitter.endSpinVar = 1;
    this.emitter.startColor = [150, 150, 150];
    this.emitter.startColorVar = [0, 0, 0];
    this.emitter.startOpacity = 1;
    this.emitter.endColor = null;
    this.emitter.endColorVar = null;
    this.emitter.endOpacity = 0;
    this.emitter.startSize = 10;
    this.emitter.startSizeVar = 0;
    this.emitter.endSize = 10;
    this.emitter.endSizeVar = null;

	GJ.getStage().addChild(this.emitter);
};