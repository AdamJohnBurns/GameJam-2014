GJ.Sound = (function () {
	'use strict';

	// Private variables //////////////////////////////////////////
	var sfx = {

	};

	// Private methods ////////////////////////////////////////////

	var init = function ( ) {
		
		// Start music loops
		var music_background = createjs.Sound.play("placeholder_02", {loop: 10});
		music_background.volume = 0;
		fadeVolume(music_background, 1, 2000);
	},

	// Generic fading function
	fadeVolume = function (soundInstance, targetVolume, fadeDuration) {
		createjs.Tween.get(soundInstance).to({volume:targetVolume}, fadeDuration);
	}



	// Public methods /////////////////////////////////////////////

	return {

		init: init,
		playFootstep: function ( ) {
			var randomInt = Math.floor((Math.random()*3)+1);
			var footstep = createjs.Sound.play("placeholder_0" + randomInt, {loop: 50});
		},

		changeVolume: function ( ) {
			playFootstep.footstep.volume = 0.5;
		}

	};
}());