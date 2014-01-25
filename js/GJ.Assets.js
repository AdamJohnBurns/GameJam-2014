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
			{id: 'amb_birdsong', src:'audio/amb_birdsong.ogg', data: 4},
			{id: 'footstep_grass_01', src:'audio/footstep_grass_01.ogg', data: 4},
			{id: 'footstep_grass_02', src:'audio/footstep_grass_02.ogg', data: 4},
			{id: 'footstep_grass_03', src:'audio/footstep_grass_03.ogg', data: 4},
			{id: 'footstep_grass_04', src:'audio/footstep_grass_04.ogg', data: 4},
			{id: 'footstep_grass_05', src:'audio/footstep_grass_05.ogg', data: 4},
			{id: 'footstep_grass_06', src:'audio/footstep_grass_06.ogg', data: 4},
			{id: 'footstep_grass_07', src:'audio/footstep_grass_07.ogg', data: 4},
			{id: 'footstep_grass_08', src:'audio/footstep_grass_08.ogg', data: 4},
			{id: 'footstep_land_01', src:'audio/footstep_land_01.ogg', data: 4},
			{id: 'footstep_land_02', src:'audio/footstep_land_02.ogg', data: 4},			
			{id: 'footstep_land_03', src:'audio/footstep_land_03.ogg', data: 4},
			{id: 'footstep_land_04', src:'audio/footstep_land_04.ogg', data: 4},
			{id: 'explosion_01', src:'audio/expl_01.ogg', data: 2},
			{id: 'explosion_02', src:'audio/expl_02.ogg', data: 2},
			{id: 'explosion_03', src:'audio/expl_03.ogg', data: 2},
			{id: 'explosion_04', src:'audio/expl_04.ogg', data: 2},
			{id: 'explosion_05', src:'audio/expl_05.ogg', data: 2},
			{id: 'explosion_06', src:'audio/expl_06.ogg', data: 2},
			{id: 'pig_snort_01', src:'audio/pig_snort_01.ogg', data: 2},
			{id: 'pig_snort_02', src:'audio/pig_snort_02.ogg', data: 2},
			{id: 'pig_snort_03', src:'audio/pig_snort_03.ogg', data: 2},
			{id: 'pig_snort_04', src:'audio/pig_snort_04.ogg', data: 2},
			{id: 'pig_snort_05', src:'audio/pig_snort_05.ogg', data: 2},
			{id: 'pig_snort_06', src:'audio/pig_snort_06.ogg', data: 2},
			{id: 'pig_snort_07', src:'audio/pig_snort_07.ogg', data: 2},
			{id: 'pig_snort_08', src:'audio/pig_snort_08.ogg', data: 2}
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