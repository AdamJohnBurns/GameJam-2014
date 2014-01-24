// Keycodes: http://unixpapa.com/js/key.html
// 	


GJ.Input = (function () {
	'use strict';



	// Private variables //////////////////////////////////////////

	var i,
		buttonStates = [];



	// Private methods ////////////////////////////////////////////

	var setButtonState = function (keycode, pressed) {

		for(i = 0; i < buttonStates.length; i++) {
			if (buttonStates[i].keycode === keycode) {
				buttonStates[i].pressed = pressed;
				break;
			}
		}

		if (i >= buttonStates.length) {
			buttonStates.push({
				keycode: keycode,
				pressed: pressed
			});
		}
	};



	// Public methods /////////////////////////////////////////////

	return {
		init: function () {
			$(document).on('keydown', function (event) {
				setButtonState(event.keyCode, true);
				event.preventDefault();
			});

			$(document).on('keyup', function (event) {
				setButtonState(event.keyCode, false);
				event.preventDefault();
			});
		},


		isPressed: function (keycode) {
			var i,
				isPressed = false;

			for (i = 0; i < buttonStates.length; i++) {
				if (buttonStates[i].keycode === keycode) {
					isPressed = buttonStates[i].pressed;
					break;
				}
			}

			return isPressed;
		},


		pressedOnce: function (keycode) {
		},


		Keycodes: {
			ENTER: 13,
			SPACEBAR: 32,
			SHIFT: 16,
			UP_ARROW: 38,
			DOWN_ARROW: 40,
			LEFT_ARROW: 37,
			RIGHT_ARROW: 39
		}
	};
}());