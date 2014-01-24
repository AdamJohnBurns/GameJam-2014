GJ.Sound = (function () {
	'use strict';

	// Private variables //////////////////////////////////////////
	var	soundsPlaying = [];


	// Private methods ////////////////////////////////////////////

	// Generic fading function
	var fadeVolume = function (soundInstance, targetVolume, fadeDuration) {
		createjs.Tween.get(soundInstance).to({volume:targetVolume}, fadeDuration);
	}

	// Public methods /////////////////////////////////////////////

	return {

		init: function ( ) {
		
			// Start music loops
			soundsPlaying.push({
				name: "BGM",
				sound: createjs.Sound.play("placeholder_02", {loop: 50})
			});
			music_background.volume = 0;
			fadeVolume(music_background, 1, 2000);
		},

		playFootstep: function ( ) { // model for playing random sounds
			var randomInt = Math.floor((Math.random()*3)+1);
			soundsPlaying.push({
				name: "footstep",
				sound: createjs.Sound.play("placeholder_0" + randomInt, {loop: 50})
			});
		},

		update: function ( ) {
			var i, sound;

			for (i = 0; i < soundsPlaying.length; i++) {
				sound = soundsPlaying[i];

				if (sound.name === "BGM") {
					sound.sound.volume = 0.2;
				} else if (sound.name === "explosion") {
					
				}
				
			}
		},

		triggerEvent: function (name) {
			if (name === "explosion") {
				soundsPlaying.push({
					name: "explosion",
					sound: createjs.Sound.play("placeholder_01", {loop: 10})
				});
			}
		}

	};
}());