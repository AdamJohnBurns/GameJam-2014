(function(window) {
RunningSmoke_instance_1 = function() {
	this.initialize();
}
RunningSmoke_instance_1._SpriteSheet = new createjs.SpriteSheet({images: ["RunningSmoke.png"], frames: [[0,0,51,50,0,23.2,13.3],[51,0,51,50,0,23.2,13.3],[102,0,51,50,0,23.2,13.3],[153,0,51,50,0,23.2,13.3],[204,0,51,50,0,23.2,13.3],[0,50,51,50,0,23.2,13.3],[51,50,51,50,0,23.2,13.3],[102,50,51,50,0,23.2,13.3],[153,50,51,50,0,23.2,13.3],[204,50,51,50,0,23.2,13.3],[0,100,51,50,0,23.2,13.3],[51,100,51,50,0,23.2,13.3],[102,100,51,50,0,23.2,13.3],[153,100,51,50,0,23.2,13.3],[204,100,51,50,0,23.2,13.3],[0,150,51,50,0,23.2,13.3],[51,150,51,50,0,23.2,13.3],[102,150,51,50,0,23.2,13.3],[153,150,51,50,0,23.2,13.3],[204,150,51,50,0,23.2,13.3],[0,200,51,50,0,23.2,13.3],[51,200,51,50,0,23.2,13.3],[102,200,51,50,0,23.2,13.3],[153,200,51,50,0,23.2,13.3],[204,200,51,50,0,23.2,13.3],[0,250,51,50,0,23.2,13.3]]});
var RunningSmoke_instance_1_p = RunningSmoke_instance_1.prototype = new createjs.BitmapAnimation();
RunningSmoke_instance_1_p.BitmapAnimation_initialize = RunningSmoke_instance_1_p.initialize;
RunningSmoke_instance_1_p.initialize = function() {
	this.BitmapAnimation_initialize(RunningSmoke_instance_1._SpriteSheet);
	this.paused = false;
}
window.RunningSmoke_instance_1 = RunningSmoke_instance_1;
}(window));

