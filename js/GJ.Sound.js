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

			// Start playing ambience and music loops if they're not already playing
			soundsPlaying.push({
				name: "ambience_happy",
				sound: createjs.Sound.play("amb_birdsong", {loop: -1, volume: 0})
			}, {
				name: "music",
				sound: createjs.Sound.play("music", {loop: -1, volume: 0})
			});

			// Fade in loops
			var i, sound;
			for (i = 0; i < soundsPlaying.length; i++) {
				sound = soundsPlaying[i];

				if (sound.name === "ambience_happy") {
					fadeVolume(sound.sound, 0.6, 3000);
				} else if (sound.name === "music") {
					fadeVolume(sound.sound, 0.3, 1000);
				}

			}

		},

		update: function ( ) {
			// Generic update function (that gets called every tick)
			var i, sound;

			//console.log(Player.isOnGround)

			// for (i = 0; i < soundsPlaying.length; i++) {
			// 	sound = soundsPlaying[i];

			// 	if (sound.name === "ambience_happy") {
			// 		sound.sound.volume = 1;
			// 	} else if (sound.name === "explosion") {

			// 	}

			// }
		},

		triggerEvent: function (name) {
			// Play footstep
			if (name === "footstep") {
				var randomInt = Math.floor((Math.random()*8)+1); // randomised 1 - 8
				soundsPlaying.push({
					name: "footstep",
					sound: createjs.Sound.play("footstep_grass_0" + randomInt, {volume: 0.2})
				});
			} else if (name === "jump") {
				var randomInt = Math.floor((Math.random()*4)+1);
				soundsPlaying.push({
					name: "jump",
					sound: createjs.Sound.play("footstep_land_0" + randomInt, {volume: 0.2})
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
					sound: createjs.Sound.play("gem_pickup", {delay: 150})
				}, {
					name: "pick",
					sound: createjs.Sound.play("pick")
				});
			} else if (name === "gem_drop") {
				soundsPlaying.push({
					name: "gem_drop",
					sound: createjs.Sound.play("gem_drop")
				});
			} else if (name === "pig_steal") {
				var randomPinch = Math.floor((Math.random()*2)+1);
				var randomRummage = Math.floor((Math.random()*6)+1);
				soundsPlaying.push({
					name: "pinch",
					sound: createjs.Sound.play("pinch_0" + randomPinch, {delay: 2400})
				}, {
					name: "rummage",
					sound: createjs.Sound.play("rummage_0" + randomRummage)
				}, {
					name: "gem_pinch",
					sound: createjs.Sound.play("gem_steal")
				});
			} else if (name === "swish") {
				var randomInt = Math.floor((Math.random()*3)+1);
				soundsPlaying.push({
					name: "swish",
					sound: createjs.Sound.play("swish_0" + randomInt)
				});
			} else if (name === "attack") {
				var randomInt = Math.floor((Math.random()*4)+1);
				soundsPlaying.push({
					name: "attack",
					sound: createjs.Sound.play("sword_swing_0" + randomInt)
				});
			} else if (name === "kill") {
				var randomStab = Math.floor((Math.random()*4)+1);
				soundsPlaying.push({
					name: "stab",
					sound: createjs.Sound.play("sword_stab_0" + randomStab)
				}, {
					name: "pig_hit",
					sound: createjs.Sound.play("pig_hit_0" + randomStab, {volume: 0.5, delay: 100})
				});
			} else if (name === "mine") {
				var randomInt = Math.floor((Math.random()*4)+1);
				soundsPlaying.push({
					name: "swing",
					sound: createjs.Sound.play("sword_swing_0" + randomInt)
				}, {
					name: "pick",
					sound: createjs.Sound.play("pick", {delay :100})
				});
			} else if (name === "pop") {
				soundsPlaying.push({
					name: "balloon_pop",
					sound: createjs.Sound.play("balloon_pop")
				});
			} else if (name === "turtle_sad") {
				var randomInt = Math.floor((Math.random()*12)+1);
				soundsPlaying.push({
					name: "turtle_sad",
					sound: createjs.Sound.play("turtle_sad_0" + randomInt, {delay: 700})
				});
			} else if (name === "turtle_happy") {
				var randomInt = Math.floor((Math.random()*5)+1);
				soundsPlaying.push({
					name: "turtle_happy",
					sound: createjs.Sound.play("turtle_happy_0" + randomInt)
				});
			} else if (name === "meow") {
				var randomInt = Math.floor((Math.random()*4)+1);
				soundsPlaying.push({
					name: "meow",
					sound: createjs.Sound.play("cat_0" + randomInt, {volume: 0.6})
				});
			} else if (name === "oink") {
				var randomInt = Math.floor((Math.random()*4)+1);
				soundsPlaying.push({
					name: "oink",
					sound: createjs.Sound.play("pig_oink_0" + randomInt, {volume: 0.6})
				});
			} else if (name === "new_wave") {
				soundsPlaying.push({
					name: "new_wave",
					sound: createjs.Sound.play("new_wave", {delay: 300, volume: 0.5})
				});
			} else if (name === "death") {
				var randomStab = Math.floor((Math.random()*4)+1);
				soundsPlaying.push({
					name: "stab",
					sound: createjs.Sound.play("sword_stab_0" + randomStab)
				});
			} else if (name === "win") {
				soundsPlaying.push({
					name: "win",
					sound: createjs.Sound.play("win", {volume: 0.5, delay: 300})
				});
			} else if (name === "lose") {
				soundsPlaying.push({
					name: "lose",
					sound: createjs.Sound.play("lose")
				});
			// Fade out music
			var i, sound;
			for (i = 0; i < soundsPlaying.length; i++) {
				sound = soundsPlaying[i];

				if (sound.name === "ambience_happy") {
					sound.sound.volume = 0;
				} else if (sound.name === "music") {
					sound.sound.volume = 0;
				}

			}
			}
		}

	};
}());