(function(window) {
MeleeATK_instance_1 = function() {
	this.initialize();
}
MeleeATK_instance_1._SpriteSheet = new createjs.SpriteSheet({images: ["Attack1.png"], frames: [[0,0,155,157,0,55.65,151.15],[160,0,155,157,0,55.65,151.15],[320,0,155,157,0,55.65,151.15],[0,162,155,157,0,55.65,151.15],[160,162,155,157,0,55.65,151.15],[320,162,155,157,0,55.65,151.15],[0,324,155,157,0,55.65,151.15],[160,324,155,157,0,55.65,151.15],[320,324,155,157,0,55.65,151.15],[0,486,155,157,0,55.65,151.15],[160,486,155,157,0,55.65,151.15],[320,486,155,157,0,55.65,151.15],[0,648,155,157,0,55.65,151.15],[160,648,155,157,0,55.65,151.15]]});
var MeleeATK_instance_1_p = MeleeATK_instance_1.prototype = new createjs.BitmapAnimation();
MeleeATK_instance_1_p.BitmapAnimation_initialize = MeleeATK_instance_1_p.initialize;
MeleeATK_instance_1_p.initialize = function() {
	this.BitmapAnimation_initialize(MeleeATK_instance_1._SpriteSheet);
	this.paused = false;
}
window.MeleeATK_instance_1 = MeleeATK_instance_1;
}(window));

