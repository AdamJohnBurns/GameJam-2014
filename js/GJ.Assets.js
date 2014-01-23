GJ.Assets = (function () {
	'use strict';

	// Private variables //////////////////////////////////////////

	var queue;



	// Private methods ////////////////////////////////////////////
	
	var loadQueued = function () {

		
		queue.loadManifest([
			{id: 'bg', src:'images/bg.jpg'},			
			{id: 'guitar-1', src:'images/guitar-1.png'}
		]);
	};



	// Public methods /////////////////////////////////////////////
	
	return {
		init: function () {
			queue = new createjs.LoadQueue(false);
			queue.installPlugin(createjs.Sound);
			// queue.addEventListener("complete", GJ.runGame); // add this
			
			loadQueued();
		},
		
		get: function (id) {
			return queue.getResult(id);
		}
	};
}());