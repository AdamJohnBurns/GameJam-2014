(function(window) {
Spark1_instance_1 = function() {
	this.initialize();
}
Spark1_instance_1._SpriteSheet = new createjs.SpriteSheet({images: ["HitEffect.png"], frames: [[0,0,107,112,0,0,34.05],[107,0,107,112,0,0,34.05],[214,0,107,112,0,0,34.05],[321,0,107,112,0,0,34.05],[0,112,107,112,0,0,34.05],[107,112,107,112,0,0,34.05],[214,112,107,112,0,0,34.05],[321,112,107,112,0,0,34.05],[0,224,107,112,0,0,34.05],[107,224,107,112,0,0,34.05]]});
var Spark1_instance_1_p = Spark1_instance_1.prototype = new createjs.BitmapAnimation();
Spark1_instance_1_p.BitmapAnimation_initialize = Spark1_instance_1_p.initialize;
Spark1_instance_1_p.initialize = function() {
	this.BitmapAnimation_initialize(Spark1_instance_1._SpriteSheet);
	this.paused = false;
}
window.Spark1_instance_1 = Spark1_instance_1;
}(window));

