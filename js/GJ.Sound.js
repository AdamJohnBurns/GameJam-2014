GJ.Sound = (function () {
	'use strict';

	// Private variables //////////////////////////////////////////
	var soundsAreLoaded = false;
  	var placeholder_01;


	// Private methods ////////////////////////////////////////////

	var loadErrorHandler = function () {
		console.log("An error occurred.  Unable to load sound: ...");
	};


	var loadSounds = function (onLoadCallback) {
		if (soundsAreLoaded === true) {
		  return;
		}

		placeholder_01 = new Howl({
			urls: ["audio/placeholder_01.wav"],
			onload: onLoadCallback,
			// does not fire if a specifed sound file does not exist,
			// but onLoadCallback will not fire in this case
			onloaderror: loadErrorHandler
		});

		soundsAreLoaded = true;
	};

	var play = function () {
		try {
			placeholder_01.play();
		} catch (e) {
			if (console !== undefined) {
			console.log("While trying to play sound " + name + ", an error was encountered: " + e.message);
			}
		}
	};

	// var sound1 = new Howl({
	// 	urls: ['audio/placeholder_01.wav'],
	// });
	// var sound2 = new Howl({
	// 	urls: ['audio/placeholder_02.wav'],
	// });

	// var playTestSound = function ( ) {
	// 	sound1.on('load', function ( ) {
	// 		sound1.play();
	// 	});
	// 	if("_loaded" in sound1 && sound2) {
	// 		console.log("sound is loaded");
	// 	}
	// };

	// Public methods /////////////////////////////////////////////

	return {

		init: function () {
			GJ.Sound.loadSounds(console.log('sounds are loaded'));
			//GJ.Sound.play();
		},

		loadSounds: loadSounds,
		play: play,

		audioEvent: function (gameData) {
			var i,
				isPressed = false;

			return isPressed;
		}

	};
}());