(function(window) {
runbombpig_instance_1 = function() {
	this.initialize();
}
runbombpig_instance_1._SpriteSheet = new createjs.SpriteSheet({images: ["BombPigRun.png"], frames: [[0,0,56,97,0,27.75,93.95],[56,0,56,97,0,27.75,93.95],[112,0,56,97,0,27.75,93.95],[168,0,56,97,0,27.75,93.95],[224,0,56,97,0,27.75,93.95],[280,0,56,97,0,27.75,93.95],[336,0,56,97,0,27.75,93.95],[392,0,56,97,0,27.75,93.95],[448,0,56,97,0,27.75,93.95],[0,97,56,97,0,27.75,93.95],[56,97,56,97,0,27.75,93.95],[112,97,56,97,0,27.75,93.95],[168,97,56,97,0,27.75,93.95],[224,97,56,97,0,27.75,93.95],[280,97,56,97,0,27.75,93.95],[336,97,56,97,0,27.75,93.95],[392,97,56,97,0,27.75,93.95],[448,97,56,97,0,27.75,93.95],[0,194,56,97,0,27.75,93.95],[56,194,56,97,0,27.75,93.95],[112,194,56,97,0,27.75,93.95],[168,194,56,97,0,27.75,93.95]]});
var runbombpig_instance_1_p = runbombpig_instance_1.prototype = new createjs.BitmapAnimation();
runbombpig_instance_1_p.BitmapAnimation_initialize = runbombpig_instance_1_p.initialize;
runbombpig_instance_1_p.initialize = function() {
	this.BitmapAnimation_initialize(runbombpig_instance_1._SpriteSheet);
	this.paused = false;
}
window.runbombpig_instance_1 = runbombpig_instance_1;
}(window));

