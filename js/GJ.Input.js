// Keycodes: http://unixpapa.com/js/key.html
// 	ENTER: 13,
// 	SPACEBAR: 32,
// 	SHIFT: 16,
// 	UP_ARROW: 38,
// 	DOWN_ARROW: 40,
// 	LEFT_ARROW: 37,
// 	RIGHT_ARROW: 39


GJ.Input = (function () {

	var i,
		buttonStates = [];



	var setButtonState = function (keycode, pressed) {

		i = this.buttonStates.length;
		while (--i) {
			if (this.buttonStates[i].keycode === keycode) {
				this.buttonStates[i].pressed = pressed;
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


	return {
		init: function () {
			$(document).on('keydown', function (event) {
				setButtonState(event.keyCode, false);
			};

			$(document).on('keyup', = function (event) {
				setButtonState(event.keyCode, true);
			};
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