(function(window) {
DeathSmoke_instance_1 = function() {
	this.initialize();
}
DeathSmoke_instance_1._SpriteSheet = new createjs.SpriteSheet({images: ["ExplosionSmall.png"], frames: [[0,0,111,89,0,35.25,36],[111,0,111,89,0,35.25,36],[222,0,111,89,0,35.25,36],[333,0,111,89,0,35.25,36],[0,89,111,89,0,35.25,36],[111,89,111,89,0,35.25,36],[222,89,111,89,0,35.25,36],[333,89,111,89,0,35.25,36],[0,178,111,89,0,35.25,36],[111,178,111,89,0,35.25,36],[222,178,111,89,0,35.25,36],[333,178,111,89,0,35.25,36],[0,267,111,89,0,35.25,36],[111,267,111,89,0,35.25,36],[222,267,111,89,0,35.25,36],[333,267,111,89,0,35.25,36],[0,356,111,89,0,35.25,36],[111,356,111,89,0,35.25,36],[222,356,111,89,0,35.25,36],[333,356,111,89,0,35.25,36],[0,445,111,89,0,35.25,36],[111,445,111,89,0,35.25,36],[222,445,111,89,0,35.25,36],[333,445,111,89,0,35.25,36],[0,534,111,89,0,35.25,36],[111,534,111,89,0,35.25,36],[222,534,111,89,0,35.25,36],[333,534,111,89,0,35.25,36],[0,623,111,89,0,35.25,36],[111,623,111,89,0,35.25,36]]});
var DeathSmoke_instance_1_p = DeathSmoke_instance_1.prototype = new createjs.BitmapAnimation();
DeathSmoke_instance_1_p.BitmapAnimation_initialize = DeathSmoke_instance_1_p.initialize;
DeathSmoke_instance_1_p.initialize = function() {
	this.BitmapAnimation_initialize(DeathSmoke_instance_1._SpriteSheet);
	this.paused = false;
}
window.DeathSmoke_instance_1 = DeathSmoke_instance_1;
}(window));

