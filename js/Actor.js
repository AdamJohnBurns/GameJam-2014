var Actor = function () {
	this.bitmap = new createjs.Bitmap(GJ.Assets.get('sprite1'));
	this.bitmap.x = Math.random() * 400;
	this.bitmap.y = Math.random() * 400;

	GJ.getStage().addChild(this.bitmap);

	this.bitmap.scaleX = 0.25;
	this.bitmap.scaleY = 0.25;

	this.bitmap.regX = 90;
	this.bitmap.regY = 166;

	this.bitmap.addEventListener('click', function (event) {
		console.log('actor clicked at:' + event.stageX + ', ' + event.stageY);
	});
};


Actor.prototype.update = function () {
	this.bitmap.rotation++;
};


Actor.prototype.getBitmap = function () {
	return this.bitmap;
};