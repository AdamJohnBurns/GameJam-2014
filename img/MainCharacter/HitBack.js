(function(window) {
HitBackPlayer_instance_1 = function() {
	this.initialize();
}
HitBackPlayer_instance_1._SpriteSheet = new createjs.SpriteSheet({images: ["HitBack.png"], frames: [[0,0,78,105,0,49.4,102.1],[83,0,78,105,0,49.4,102.1],[166,0,78,105,0,49.4,102.1],[0,110,78,105,0,49.4,102.1],[83,110,78,105,0,49.4,102.1],[166,110,78,105,0,49.4,102.1],[0,220,78,105,0,49.4,102.1],[83,220,78,105,0,49.4,102.1]]});
var HitBackPlayer_instance_1_p = HitBackPlayer_instance_1.prototype = new createjs.BitmapAnimation();
HitBackPlayer_instance_1_p.BitmapAnimation_initialize = HitBackPlayer_instance_1_p.initialize;
HitBackPlayer_instance_1_p.initialize = function() {
	this.BitmapAnimation_initialize(HitBackPlayer_instance_1._SpriteSheet);
	this.paused = false;
}
window.HitBackPlayer_instance_1 = HitBackPlayer_instance_1;
}(window));

