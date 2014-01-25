var Turtle = function () {
	var data;
	this.active = true;

	data = new createjs.SpriteSheet({
		framerate: 25,
		images: [ 
			GJ.Assets.get('TurtleIdle') 		// 16
		], 
		frames: [
			// x, y, width, height, index, regX, regY
			// the index needs to match the file with the sprites
			[0,0,269,143,0,134.15,141.85],[274,0,269,143,0,134.15,141.85],[548,0,269,143,0,134.15,141.85],[0,148,269,143,0,134.15,141.85],[274,148,269,143,0,134.15,141.85],[548,148,269,143,0,134.15,141.85],[0,296,269,143,0,134.15,141.85],[274,296,269,143,0,134.15,141.85],[548,296,269,143,0,134.15,141.85],[0,444,269,143,0,134.15,141.85],[274,444,269,143,0,134.15,141.85],[548,444,269,143,0,134.15,141.85],[0,592,269,143,0,134.15,141.85],[274,592,269,143,0,134.15,141.85],[548,592,269,143,0,134.15,141.85],[0,740,269,143,0,134.15,141.85]
		],
		animations: { 
			idle: [0, 15]
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