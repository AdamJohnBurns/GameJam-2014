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
