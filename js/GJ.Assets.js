GJ.Assets = (function () {
	'use strict';

	// Private variables //////////////////////////////////////////

	var queue;



	// Private methods ////////////////////////////////////////////

	var loadQueued = function () {
		queue.loadManifest([
			{id: 'ExplosionSmall', src:'img/ExplosionSmall.png'},

			// main character
			{id: 'MainCharacterIdle', src:'img/MainCharacter/Idle.png'},
			{id: 'MainCharacterRun', src:'img/MainCharacter/Run.png'},

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


	var buildSpritesheets = function () {
		// var data;

		// data = new createjs.SpriteSheet({images: ["ExplosionSmall.png"], frames: [[0,0,111,89,0,35.25,36],[111,0,111,89,0,35.25,36],[222,0,111,89,0,35.25,36],[333,0,111,89,0,35.25,36],[0,89,111,89,0,35.25,36],[111,89,111,89,0,35.25,36],[222,89,111,89,0,35.25,36],[333,89,111,89,0,35.25,36],[0,178,111,89,0,35.25,36],[111,178,111,89,0,35.25,36],[222,178,111,89,0,35.25,36],[333,178,111,89,0,35.25,36],[0,267,111,89,0,35.25,36],[111,267,111,89,0,35.25,36],[222,267,111,89,0,35.25,36],[333,267,111,89,0,35.25,36],[0,356,111,89,0,35.25,36],[111,356,111,89,0,35.25,36],[222,356,111,89,0,35.25,36],[333,356,111,89,0,35.25,36],[0,445,111,89,0,35.25,36],[111,445,111,89,0,35.25,36],[222,445,111,89,0,35.25,36],[333,445,111,89,0,35.25,36],[0,534,111,89,0,35.25,36],[111,534,111,89,0,35.25,36],[222,534,111,89,0,35.25,36],[333,534,111,89,0,35.25,36],[0,623,111,89,0,35.25,36],[111,623,111,89,0,35.25,36]]});
		// data = new createjs.SpriteSheet({
		//     'images': [GJ.Assets.get('ExplosionSmall')],
		//     'frames': {
		//     	'regX': 0, 
		//     	'height': 292, 
		//     	'count': 64, 
		//     	'regY': 0, 
		//     	'width': 165
		//     },
		//     // define two animations, run (loops, 1.5x speed) and jump (returns to run):
		//     'animations': {
		//     	'run': [0, 25, 'run', 1.5], 
		//     	'jump': [26, 63, 'run'],
		//     	'idle': [0, 0]
		//     }
	 //    });
	    // this.image = new createjs.Sprite(data, "run");
	    // this.image.setTransform(-200, 90, 0.8, 0.8);
	    // this.image.framerate = 30;

	    

	};



	// Public methods /////////////////////////////////////////////

	return {
		init: function () {
			queue = new createjs.LoadQueue(false);
			createjs.Sound.alternateExtensions = ["m4a"]; // Audio: load m4a files in safari instead
			queue.installPlugin(createjs.Sound);
			queue.addEventListener("complete", GJ.Assets.loadComplete); // add this

			loadQueued();
		},

		loadComplete: function () {
			buildSpritesheets();
			GJ.assetsReady();
		},

		get: function (id) {
			return queue.getResult(id);
		}
	};
}());



// ExplosionSmall
	    (function(window) {
		DeathSmoke_instance_1 = function() {
			this.initialize();
		}
		DeathSmoke_instance_1._SpriteSheet = new createjs.SpriteSheet({images: ["ExplosionSmall.png"], frames: [[0,0,111,89,0,35.25,36],[111,0,111,89,0,35.25,36],[222,0,111,89,0,35.25,36],[333,0,111,89,0,35.25,36],[0,89,111,89,0,35.25,36],[111,89,111,89,0,35.25,36],[222,89,111,89,0,35.25,36],[333,89,111,89,0,35.25,36],[0,178,111,89,0,35.25,36],[111,178,111,89,0,35.25,36],[222,178,111,89,0,35.25,36],[333,178,111,89,0,35.25,36],[0,267,111,89,0,35.25,36],[111,267,111,89,0,35.25,36],[222,267,111,89,0,35.25,36],[333,267,111,89,0,35.25,36],[0,356,111,89,0,35.25,36],[111,356,111,89,0,35.25,36],[222,356,111,89,0,35.25,36],[333,356,111,89,0,35.25,36],[0,445,111,89,0,35.25,36],[111,445,111,89,0,35.25,36],[222,445,111,89,0,35.25,36],[333,445,111,89,0,35.25,36],[0,534,111,89,0,35.25,36],[111,534,111,89,0,35.25,36],[222,534,111,89,0,35.25,36],[333,534,111,89,0,35.25,36],[0,623,111,89,0,35.25,36],[111,623,111,89,0,35.25,36]]});
		var DeathSmoke_instance_1_p = DeathSmoke_instance_1.prototype = new createjs.BitmapAnimation();
		DeathSmoke_instance_1_p.BitmapAnimation_initialize = DeathSmoke_instance_1_p.initialize;
		DeathSmoke_instance_1_p.initialize = function() {
			this.BitmapAnimation_initialize(DeathSmoke_instance_1._SpriteSheet);
			this.paused = false;
		}
		window.DeathSmoke_instance_1 = DeathSmoke_instance_1;
		}(window));