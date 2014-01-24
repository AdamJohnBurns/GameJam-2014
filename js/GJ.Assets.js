GJ.Assets = (function () {
	'use strict';

	// Private variables //////////////////////////////////////////

	var queue;



	// Private methods ////////////////////////////////////////////

	var loadQueued = function () {
		queue.loadManifest([
			{id: 'sprite1', src:'img/sprite.jpg'}
		]);
	};



	// Public methods /////////////////////////////////////////////

	return {
		init: function () {
			queue = new createjs.LoadQueue(false);
			queue.installPlugin(createjs.Sound);
			queue.addEventListener("complete", GJ.assetsReady); // add this

			loadQueued();
		},

		get: function (id) {
			return queue.getResult(id);
		}
	};
}());