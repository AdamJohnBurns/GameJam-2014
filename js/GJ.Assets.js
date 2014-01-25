GJ.Assets = (function () {
	'use strict';

	// Private variables //////////////////////////////////////////

	var queue;



	// Private methods ////////////////////////////////////////////

	var loadQueued = function () {
		queue.loadManifest([
			// {id: 'playerSS', src:'img/playerSS.png'},
			{id: 'sprite1', src:'img/sprite1.jpg'},
			{id: 'sprite2', src:'img/sprite2.jpg'},
			{id: 'sprite3', src:'img/sprite3.jpg'},
			{id: 'amb_birdsong', src:'audio/amb_birdsong.ogg', data: 5},
			{id: 'footstep_grass_01', src:'audio/footstep_grass_01.ogg', data: 5},
			{id: 'footstep_grass_02', src:'audio/footstep_grass_02.ogg', data: 5},
			{id: 'footstep_grass_03', src:'audio/footstep_grass_03.ogg', data: 5},
			{id: 'footstep_grass_04', src:'audio/footstep_grass_04.ogg', data: 5},
			{id: 'footstep_grass_05', src:'audio/footstep_grass_05.ogg', data: 5},
			{id: 'footstep_grass_06', src:'audio/footstep_grass_06.ogg', data: 5},
			{id: 'footstep_grass_07', src:'audio/footstep_grass_07.ogg', data: 5},
			{id: 'footstep_grass_08', src:'audio/footstep_grass_08.ogg', data: 5}
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