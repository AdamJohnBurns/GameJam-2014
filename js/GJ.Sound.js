GJ.Sound = (function () {

	var sound = new Howl({
		urls: ['audio/placeholder_01.wav'],
	});

	var playTestSound = function ( ) {
		sound.on('load', function ( ) {
			console.log("audio file loaded!");
			sound.play();
		});
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