(function(window) {
DiamondPig_instance_1 = function() {
	this.initialize();
}
DiamondPig_instance_1._SpriteSheet = new createjs.SpriteSheet({images: ["DiamondPigRun.png"], frames: [[0,0,57,87,0,27.9,86.6],[62,0,57,87,0,27.9,86.6],[124,0,57,87,0,27.9,86.6],[186,0,57,87,0,27.9,86.6],[248,0,57,87,0,27.9,86.6],[310,0,57,87,0,27.9,86.6],[372,0,57,87,0,27.9,86.6],[434,0,57,87,0,27.9,86.6],[0,92,57,87,0,27.9,86.6],[62,92,57,87,0,27.9,86.6],[124,92,57,87,0,27.9,86.6],[186,92,57,87,0,27.9,86.6],[248,92,57,87,0,27.9,86.6],[310,92,57,87,0,27.9,86.6],[372,92,57,87,0,27.9,86.6],[434,92,57,87,0,27.9,86.6],[0,184,57,87,0,27.9,86.6],[62,184,57,87,0,27.9,86.6],[124,184,57,87,0,27.9,86.6],[186,184,57,87,0,27.9,86.6],[248,184,57,87,0,27.9,86.6],[310,184,57,87,0,27.9,86.6]]});
var DiamondPig_instance_1_p = DiamondPig_instance_1.prototype = new createjs.BitmapAnimation();
DiamondPig_instance_1_p.BitmapAnimation_initialize = DiamondPig_instance_1_p.initialize;
DiamondPig_instance_1_p.initialize = function() {
	this.BitmapAnimation_initialize(DiamondPig_instance_1._SpriteSheet);
	this.paused = false;
}
window.DiamondPig_instance_1 = DiamondPig_instance_1;
}(window));

