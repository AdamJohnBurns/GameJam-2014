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
				sound: createjs.Sound.play("amb_birdsong", "none", 0, 0, {loop: -1}, {volume: 0.001})
			});

			// Fade in happy ambience loop
			var i, sound;
			for (i = 0; i < soundsPlaying.length; i++) {
				sound = soundsPlaying[i];

				if (sound.name === "ambience_happy") {
					fadeVolume(sound.sound, 1, 2000);
					//sound.sound.volume = 0.1;
				}

			}

		},

		update: function ( ) {
			// Generic update function (that gets called every tick)
			var i, sound;

			for (i = 0; i < soundsPlaying.length; i++) {
				sound = soundsPlaying[i];

				if (sound.name === "ambience_happy") {
					sound.sound.volume = 1;
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
			} else if (name === "land") {
				var randomInt = Math.floor((Math.random()*4)+1);
				soundsPlaying.push({
					name: "land",
					sound: createjs.Sound.play("footstep_land_0" + randomInt)
				});	
			} else if (name === "explode") {
				var randomInt = Math.floor((Math.random()*6)+1);
				soundsPlaying.push({
					name: "explosion",
					sound: createjs.Sound.play("explosion_0" + randomInt)
				});
			} else if (name === "gem_pickup") {
				soundsPlaying.push({
					name: "gem_pickup",
					sound: createjs.Sound.play("gem_pickup_01")
				});
			} else if (name === "gem_steal") {
				var randomInt = Math.floor((Math.random()*8)+1);
				soundsPlaying.push(/*{
					name: "gem_steal",
					sound: createjs.Sound.play("gem_steal")
				},*/ {
					name: "pig_happy",
					sound: createjs.Sound.play("pig_snort_0" + randomInt)					
				});
			}


		}

	};
}());