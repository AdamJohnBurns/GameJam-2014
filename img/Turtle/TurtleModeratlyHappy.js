(function(window) {
HappyTurtle_instance_1 = function() {
	this.initialize();
}
HappyTurtle_instance_1._SpriteSheet = new createjs.SpriteSheet({images: ["TurtleModeratlyHappy.png"], frames: [[0,0,208,142,2,103.15,141],[213,0,208,142,2,103.15,141],[426,0,208,142,2,103.15,141],[639,0,208,142,2,103.15,141],[0,147,208,142,2,103.15,141],[213,147,208,142,2,103.15,141],[426,147,208,142,2,103.15,141],[639,147,208,142,2,103.15,141],[0,294,208,142,2,103.15,141],[213,294,208,142,2,103.15,141],[426,294,208,142,2,103.15,141],[639,294,208,142,2,103.15,141],[0,441,208,142,2,103.15,141],[213,441,208,142,2,103.15,141],[426,441,208,142,2,103.15,141],[639,441,208,142,2,103.15,141]]});
var HappyTurtle_instance_1_p = HappyTurtle_instance_1.prototype = new createjs.BitmapAnimation();
HappyTurtle_instance_1_p.BitmapAnimation_initialize = HappyTurtle_instance_1_p.initialize;
HappyTurtle_instance_1_p.initialize = function() {
	this.BitmapAnimation_initialize(HappyTurtle_instance_1._SpriteSheet);
	this.paused = false;
}
window.HappyTurtle_instance_1 = HappyTurtle_instance_1;
}(window));

