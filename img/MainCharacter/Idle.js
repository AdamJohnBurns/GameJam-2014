(function(window) {
IdleCat_instance_1 = function() {
	this.initialize();
}
IdleCat_instance_1._SpriteSheet = new createjs.SpriteSheet({images: ["Idle_5pxshapeBorder.png"], frames: [[0,0,67,97,0,32.3,96.65],[72,0,67,97,0,32.3,96.65],[144,0,67,97,0,32.3,96.65],[0,102,67,97,0,32.3,96.65],[72,102,67,97,0,32.3,96.65],[144,102,67,97,0,32.3,96.65],[0,204,67,97,0,32.3,96.65],[72,204,67,97,0,32.3,96.65],[144,204,67,97,0,32.3,96.65],[0,306,67,97,0,32.3,96.65],[72,306,67,97,0,32.3,96.65],[144,306,67,97,0,32.3,96.65],[0,408,67,97,0,32.3,96.65]]});
var IdleCat_instance_1_p = IdleCat_instance_1.prototype = new createjs.BitmapAnimation();
IdleCat_instance_1_p.BitmapAnimation_initialize = IdleCat_instance_1_p.initialize;
IdleCat_instance_1_p.initialize = function() {
	this.BitmapAnimation_initialize(IdleCat_instance_1._SpriteSheet);
	this.paused = false;
}
window.IdleCat_instance_1 = IdleCat_instance_1;
}(window));

