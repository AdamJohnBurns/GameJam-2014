GJ.Sound = (function () {
	'use strict';

	// Private variables //////////////////////////////////////////



	// Private methods ////////////////////////////////////////////



	// Public methods /////////////////////////////////////////////
	
	var sound1 = new Howl({
		urls: ['audio/placeholder_01.wav'],
	});
	var sound2 = new Howl({
		urls: ['audio/placeholder_02.wav'],
	});

	var playTestSound = function ( ) {
		sound1.on('load', function ( ) {
			sound1.play();
		});
		if("_loaded" in sound1 && sound2) {
			console.log("sound is loaded");
		}
	};


	return {
		init: function () {
			playTestSound();
		},


		audioEvent: function (gameData) {
			var i,
				isPressed = false;

			return isPressed;
		},

	};
}());