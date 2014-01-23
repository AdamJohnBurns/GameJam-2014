GJ.Sound = (function () {

	var sound = new Howl({
		urls: ['audio/placeholder_01.wav'],
	});

	var playTestSound = function ( ) {
		sound.on('load', function ( ) {
			sound.play();
		});
		if("_loaded" in sound) {
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