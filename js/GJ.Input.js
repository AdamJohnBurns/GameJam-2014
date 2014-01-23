// Keycodes: http://unixpapa.com/js/key.html
// 	ENTER: 13,
// 	SPACEBAR: 32,
// 	SHIFT: 16,
// 	UP_ARROW: 38,
// 	DOWN_ARROW: 40,
// 	LEFT_ARROW: 37,
// 	RIGHT_ARROW: 39


GJ.Input = (function () {
	'use strict';



	// Private variables //////////////////////////////////////////

	var i,
		buttonStates = [];



	// Private methods ////////////////////////////////////////////
	
	var setButtonState = function (keycode, pressed) {

		i = buttonStates.length;
		while (--i) {
			if (buttonStates[i].keycode === keycode) {
				buttonStates[i].pressed = pressed;
				break;
			}
		}

		if (i < 0) {
			this.buttonStates.push({
				keycode: keycode,
				pressed: pressed
			});
		}
	};



	// Public methods /////////////////////////////////////////////
	
	return {
		init: function () {
			$(document).on('keydown', function (event) {
				setButtonState(event.keyCode, false);
			});

			$(document).on('keyup', function (event) {
				setButtonState(event.keyCode, true);
			});
		},


		isPressed: function (keycode) {
			var i,
				isPressed = false;

			i = this.buttonStates.length;
			while (--i) {
				if (this.buttonStates[i].keycode === keycode) {
					isPressed = this.buttonStates[i].pressed;
					break;
				}
			}

			return isPressed;
		},


		pressedOnce: function (keycode) {
		}
	};
}());