GJ.Sound = (function () {
	'use strict';

	// Private variables //////////////////////////////////////////
	var sfx = {

	};

	// Private methods ////////////////////////////////////////////

	var init = function ( ) {
		//GJ.Sound.loadSounds(console.log('sounds are loaded'));
		var startUpPlaceholder = createjs.Sound.play("placeholder_01");
		startUpPlaceholder.volume = 0;
		startUpPlaceholder.pan = -1;

		// fun with fades
		createjs.Tween.get(startUpPlaceholder).to({volume:1}, 150).call(handleComplete);
	    function handleComplete() {
         console.log("fadein complete");
    	}
		
	},

	audioEvent = function (gameData) {
		var i,
			isPressed = false;

		return isPressed;
	}

	// Public methods /////////////////////////////////////////////

	return {

		init: init,
		audioEvent: audioEvent,
		//play: play,

	};
}());