var Actor = function () {

	this.state = GJ.States.MOVING_LEFT;

	this.image = new createjs.Bitmap(GJ.Assets.get('sprite1'));
	this.image.x = Math.random() * 100 + 700;
	this.image.y = Math.random() * 400;

	GJ.getStage().addChild(this.image);

	// this.image.scaleX = 0.25;
	// this.image.scaleY = 0.25;

	this.image.regX = 25;
	this.image.regY = 47;

	this.image.addEventListener('click', function (event) {
		console.log('actor clicked at:' + event.stageX + ', ' + event.stageY);
	});
};


Actor.prototype.update = function () {
	// this.image.rotation++;
	if (this.state === GJ.States.MOVING_LEFT) {
		this.image.x -= 2;
	}
};


Actor.prototype.getImage = function () {
	return this.image;
};