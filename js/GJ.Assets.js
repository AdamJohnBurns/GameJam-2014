GJ.Assets = (function () {
	'use strict';

	// Private variables //////////////////////////////////////////

	var queue;



	// Private methods ////////////////////////////////////////////

	var loadQueued = function () {
		queue.loadManifest([
			{id: 'sprite1', src:'img/sprite.jpg'},
			{id: 'placeholder_01', src:'audio/placeholderDial.ogg', data: 10}
		]);
	};



	// Public methods /////////////////////////////////////////////

	return {
		init: function () {
			queue = new createjs.LoadQueue(false);
			createjs.Sound.alternateExtensions = ["m4a"]; // Audio: load m4a files in safari instead
			queue.installPlugin(createjs.Sound);
			queue.addEventListener("complete", GJ.assetsReady); // add this

			loadQueued();
		},

		get: function (id) {
			return queue.getResult(id);
		}
	};
}());