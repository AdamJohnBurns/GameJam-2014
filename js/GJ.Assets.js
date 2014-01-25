GJ.Assets = (function () {
	'use strict';

	// Private variables //////////////////////////////////////////

	var queue;



	// Private methods ////////////////////////////////////////////

	var loadQueued = function () {
		queue.loadManifest([
			// effects
			{id: 'EffectExplosionSmall', src:'img/Effects/ExplosionSmall.png'},
			{id: 'EffectHitEffect', src:'img/Effects/EffectHitEffect.png'},
			{id: 'EffectJumpSmoke', src:'img/Effects/JumpSmoke.png'},
			{id: 'EffectRunningSmoke', src:'img/Effects/RunningSmoke.png'},

			// main character
			{id: 'MainCharacterIdle', src:'img/MainCharacter/Idle.png'},
			{id: 'MainCharacterRun', src:'img/MainCharacter/Run.png'},
			{id: 'MainCharacterJump', src:'img/MainCharacter/Jumping-NoLoop.png'},
			{id: 'MainCharacterShoot', src:'img/MainCharacter/ThrowDiamond.png'},

			// pigs
			{id: 'PigRun', src:'img/Pigs/PigRun.png'},
			{id: 'PigHit', src:'img/Pigs/PigHit.png'},
			{id: 'PigCollect', src:'img/Pigs/PigCollect.png'},
			{id: 'PigGemRun', src:'img/Pigs/DiamondPigRun.png'},
			{id: 'PigBombRun', src:'img/Pigs/BombPigRun.png'},
			{id: 'PigBombExplode', src:'img/Pigs/ExplodingPig.png'},

			// particles
			{id: 'ParticleBacon', src:'img/Particles/BaconParticle.png'},

			// bullets
			{id: 'BulletGem', src:'img/Particles/BaconParticle.png'},			

			// scene
			{id: 'SceneBGMain', src:'img/Scene/BGMain.png'},
			{id: 'SceneDecoration', src:'img/Scene/Decoration.png'},
			{id: 'SceneGround', src:'img/Scene/Ground.png'},
			{id: 'SceneForeground', src:'img/Scene/Foreground.png'},
			{id: 'SceneCloud1', src:'img/Scene/Cloud1.png'},
			{id: 'SceneCloud2', src:'img/Scene/Cloud2.png'},
			{id: 'SceneCloud3', src:'img/Scene/Cloud3.png'},

			{id: 'sprite1', src:'img/sprite1.jpg'},
			{id: 'sprite2', src:'img/sprite2.jpg'},
			{id: 'sprite3', src:'img/sprite3.jpg'},

			// audio
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
			{id: 'explosion_02', src:'audio/expl_02.ogg', data: 4},
			{id: 'explosion_01', src:'audio/expl_01.ogg', data: 4},
			{id: 'explosion_03', src:'audio/expl_03.ogg', data: 4},
			{id: 'explosion_04', src:'audio/expl_04.ogg', data: 4},
			{id: 'explosion_05', src:'audio/expl_05.ogg', data: 4},
			{id: 'explosion_06', src:'audio/expl_06.ogg', data: 4},
			{id: 'pig_hit_01', src:'audio/pig_hit_01.ogg', data: 2},
			{id: 'pig_hit_02', src:'audio/pig_hit_02.ogg', data: 2},
			{id: 'pig_hit_03', src:'audio/pig_hit_03.ogg', data: 2},
			{id: 'pig_hit_04', src:'audio/pig_hit_04.ogg', data: 2},
			{id: 'pig_oink_01', src:'audio/pig_oink_01.ogg', data: 2},
			{id: 'pig_oink_02', src:'audio/pig_oink_02.ogg', data: 2},
			{id: 'pig_oink_03', src:'audio/pig_oink_03.ogg', data: 2},
			{id: 'pig_oink_04', src:'audio/pig_oink_04.ogg', data: 2},
			{id: 'turtle_happy_01', src:'audio/turtle_happy_01.ogg', data: 2},
			{id: 'turtle_happy_02', src:'audio/turtle_happy_02.ogg', data: 2},
			{id: 'turtle_happy_03', src:'audio/turtle_happy_03.ogg', data: 2},
			{id: 'turtle_happy_04', src:'audio/turtle_happy_04.ogg', data: 2},
			{id: 'turtle_happy_05', src:'audio/turtle_happy_05.ogg', data: 2},
			{id: 'turtle_sad_01', src:'audio/turtle_sad_01.ogg', data: 2},
			{id: 'turtle_sad_02', src:'audio/turtle_sad_02.ogg', data: 2},
			{id: 'turtle_sad_03', src:'audio/turtle_sad_03.ogg', data: 2},
			{id: 'turtle_sad_04', src:'audio/turtle_sad_04.ogg', data: 2},
			{id: 'turtle_sad_05', src:'audio/turtle_sad_05.ogg', data: 2},
			{id: 'cat_01', src:'audio/cat_01.ogg', data: 5},
			{id: 'cat_02', src:'audio/cat_02.ogg', data: 5},
			{id: 'cat_03', src:'audio/cat_03.ogg', data: 5},
			{id: 'cat_04', src:'audio/cat_04.ogg', data: 5},
			{id: 'cat_04', src:'audio/cat_05.ogg', data: 5},
			{id: 'sword_stab_01', src:'audio/sword_stab_01.ogg', data: 3},
			{id: 'sword_stab_02', src:'audio/sword_stab_02.ogg', data: 3},
			{id: 'sword_stab_03', src:'audio/sword_stab_03.ogg', data: 3},
			{id: 'sword_stab_04', src:'audio/sword_stab_04.ogg', data: 3},
			{id: 'sword_swing_01', src:'audio/sword_swing_01.ogg', data: 10},
			{id: 'sword_swing_02', src:'audio/sword_swing_02.ogg', data: 10},
			{id: 'sword_swing_03', src:'audio/sword_swing_03.ogg', data: 10},
			{id: 'sword_swing_04', src:'audio/sword_swing_04.ogg', data: 10},
			{id: 'swish_01', src:'audio/swish_01.ogg', data: 10},
			{id: 'swish_02', src:'audio/swish_02.ogg', data: 10},
			{id: 'swish_03', src:'audio/swish_03.ogg', data: 10},			
			{id: 'rummage', src:'audio/rummage.ogg', data: 2},
			{id: 'balloon_pop', src:'audio/balloon_pop.ogg', data: 5},
			{id: 'pinch_01', src:'audio/pinch_01.ogg', data: 5},
			{id: 'pinch_02', src:'audio/pinch_02.ogg', data: 5},
			{id: 'gem_drop', src:'audio/gem_drop.ogg', data: 10},
			{id: 'gem_pickup', src:'audio/gem_pickup.ogg', data: 10},
			{id: 'gem_pinch', src:'audio/gem_pinch.ogg', data: 10},
			{id: 'pick', src:'audio/pick.ogg', data: 10}		
		]);
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