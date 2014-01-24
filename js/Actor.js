var Actor = function () {
	this.active = true;
	this.state = GJ.States.MOVING_LEFT;

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
		// this.image.rotation++;
		if (this.state === GJ.States.MOVING_LEFT) {
			if (this.image.x <= 150) {
				this.state = GJ.States.STEALING;
			} else {
				this.image.x -= 2;
			}
		} else if (this.state === GJ.States.STEALING) {
			this.waitTimer++;

			if (this.waitTimer > 100) {
				this.state = GJ.States.LEGGING_IT;
			}
		} else if (this.state === GJ.States.LEGGING_IT) {
			this.image.x += 4;

			if (this.image.x >= GJ.getStage().canvas.width + 50) {
				GJ.stoleMyBike();
				this.kill();
			}
		}
	}
};


Actor.prototype.getImage = function () {
	return this.image;
};


Actor.prototype.throwBack = function () {

};


Actor.prototype.kill = function () { 
	this.active = false;
	GJ.getStage().removeChild(this.image);
};


Actor.prototype.hitByBullet = function () {
	this.kill();
};