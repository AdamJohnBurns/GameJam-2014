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
		
			// Start happy ambience loop
			soundsPlaying.push({
				name: "ambience_happy",
				sound: createjs.Sound.play("amb_birdsong", {volume: 0.001}, {loop: -1})
			});

			// Fade in happy ambience loop
			var i, sound;
			for (i = 0; i < soundsPlaying.length; i++) {
				sound = soundsPlaying[i];

				if (sound.name === "ambience_happy") {
					fadeVolume(sound.sound, 1, 1000);
				}
				
			}

		},

		update: function ( ) {
			// Generic update function (that gets called every tick)
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
			// Play footstep
			if (name === "footstep") {
				var randomInt = Math.floor((Math.random()*8)+1); // randomised 1 - 8
				soundsPlaying.push({
					name: "footstep",
					sound: createjs.Sound.play("footstep_grass_0" + randomInt, {loop: 0})
				});
			}
		}

	};
}());