(function(window) {
RunCat_copy_instance_1 = function() {
	this.initialize();
}
RunCat_copy_instance_1._SpriteSheet = new createjs.SpriteSheet({images: ["Run.png"], frames: [[0,0,71,113,0,37.75,112.35],[71,0,71,113,0,37.75,112.35],[142,0,71,113,0,37.75,112.35],[213,0,71,113,0,37.75,112.35],[284,0,71,113,0,37.75,112.35],[355,0,71,113,0,37.75,112.35],[426,0,71,113,0,37.75,112.35],[0,113,71,113,0,37.75,112.35],[71,113,71,113,0,37.75,112.35],[142,113,71,113,0,37.75,112.35],[213,113,71,113,0,37.75,112.35],[284,113,71,113,0,37.75,112.35],[355,113,71,113,0,37.75,112.35],[426,113,71,113,0,37.75,112.35],[0,226,71,113,0,37.75,112.35],[71,226,71,113,0,37.75,112.35],[142,226,71,113,0,37.75,112.35]]});
var RunCat_copy_instance_1_p = RunCat_copy_instance_1.prototype = new createjs.BitmapAnimation();
RunCat_copy_instance_1_p.BitmapAnimation_initialize = RunCat_copy_instance_1_p.initialize;
RunCat_copy_instance_1_p.initialize = function() {
	this.BitmapAnimation_initialize(RunCat_copy_instance_1._SpriteSheet);
	this.paused = false;
}
window.RunCat_copy_instance_1 = RunCat_copy_instance_1;
}(window));

