(function(window) {
KittyAtk2_instance_1 = function() {
	this.initialize();
}
KittyAtk2_instance_1._SpriteSheet = new createjs.SpriteSheet({images: ["Attack2.png"], frames: [[0,0,169,204,0,91.8,171.3],[174,0,169,204,0,91.8,171.3],[348,0,169,204,0,91.8,171.3],[522,0,169,204,0,91.8,171.3],[696,0,169,204,0,91.8,171.3],[0,209,169,204,0,91.8,171.3],[174,209,169,204,0,91.8,171.3],[348,209,169,204,0,91.8,171.3],[522,209,169,204,0,91.8,171.3],[696,209,169,204,0,91.8,171.3],[0,418,169,204,0,91.8,171.3],[174,418,169,204,0,91.8,171.3],[348,418,169,204,0,91.8,171.3],[522,418,169,204,0,91.8,171.3],[696,418,169,204,0,91.8,171.3],[0,627,169,204,0,91.8,171.3],[174,627,169,204,0,91.8,171.3]]});
var KittyAtk2_instance_1_p = KittyAtk2_instance_1.prototype = new createjs.BitmapAnimation();
KittyAtk2_instance_1_p.BitmapAnimation_initialize = KittyAtk2_instance_1_p.initialize;
KittyAtk2_instance_1_p.initialize = function() {
	this.BitmapAnimation_initialize(KittyAtk2_instance_1._SpriteSheet);
	this.paused = false;
}
window.KittyAtk2_instance_1 = KittyAtk2_instance_1;
}(window));

