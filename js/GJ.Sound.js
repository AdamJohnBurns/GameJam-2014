GJ.Sound = (function () {

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
			//
		},


		audioEvent: function (gameData) {
			var i,
				isPressed = false;

			return isPressed;
		},

	};
}());