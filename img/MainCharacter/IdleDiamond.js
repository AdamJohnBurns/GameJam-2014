(function(window) {
IdleWithDIamond_instance_1 = function() {
	this.initialize();
}
IdleWithDIamond_instance_1._SpriteSheet = new createjs.SpriteSheet({images: ["RECOVER_GameJamGame.png"], frames: [[0,0,59,97,0,26.15,96.65],[59,0,59,97,0,26.15,96.65],[118,0,59,97,0,26.15,96.65],[177,0,59,97,0,26.15,96.65],[0,97,59,97,0,26.15,96.65],[59,97,59,97,0,26.15,96.65],[118,97,59,97,0,26.15,96.65],[177,97,59,97,0,26.15,96.65],[0,194,59,97,0,26.15,96.65],[59,194,59,97,0,26.15,96.65],[118,194,59,97,0,26.15,96.65],[177,194,59,97,0,26.15,96.65],[0,291,59,97,0,26.15,96.65]]});
var IdleWithDIamond_instance_1_p = IdleWithDIamond_instance_1.prototype = new createjs.BitmapAnimation();
IdleWithDIamond_instance_1_p.BitmapAnimation_initialize = IdleWithDIamond_instance_1_p.initialize;
IdleWithDIamond_instance_1_p.initialize = function() {
	this.BitmapAnimation_initialize(IdleWithDIamond_instance_1._SpriteSheet);
	this.paused = false;
}
window.IdleWithDIamond_instance_1 = IdleWithDIamond_instance_1;
}(window));

