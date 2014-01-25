var GJ = (function () {
	'use strict';

	// Private variables //////////////////////////////////////////

	var TARGET_FPS		= 60,
		CANVAS_ID		= 'myCanvas',

		NUM_PLAYERS 	= 1,
		NUM_ACTORS 		= 5,
		NUM_WORLDS		= 1,

		currentWorld 	= 0,

		event,

		numGems,
		gemText,
		gemImage,

		numHearts,
		heartText,
		heartImage,

		enemyCount,

		stage,
		worlds,
		actors,
		turtle,
		players;



	// Private methods ////////////////////////////////////////////

	var drawFPS = function () {

	};


	var setupGem = function () {
		gemImage = new createjs.Bitmap(GJ.Assets.get('BulletGem'));
			gemImage.x = 20;
			gemImage.y = 20;
			stage.addChild(gemImage);

			gemText = new createjs.Text('' + numGems, "20px Arial", "#000000"); 
			gemText.x = 50;
			gemText.y = 40;
			gemText.textBaseline = "alphabetic";
			stage.addChild(gemText);
	};


	var setupHeart = function () {
		heartImage = new createjs.Bitmap(GJ.Assets.get('ParticleHeart'));
			heartImage.x = 100;
			heartImage.y = 20;
					heartImage.scaleX = 0.55;
			heartImage.scaleY = 0.55;
			stage.addChild(heartImage);

			heartText = new createjs.Text('' + numHearts, "20px Arial", "#000000"); 
			heartText.x = 130;
			heartText.y = 40;
	
			heartText.textBaseline = "alphabetic";
			stage.addChild(heartText);
	};


	// Public methods /////////////////////////////////////////////

	return {
		start: function () {
			GJ.Input.init();
			GJ.Assets.init();
		},


		assetsReady: function () {
			var i;

			stage = new createjs.Stage(CANVAS_ID);

			worlds = [];
			for (i = 0; i < NUM_WORLDS; i++) {
				worlds.push(new World(240, stage.canvas.height - 130, 120, 1));
			}
			turtle = new Turtle();

			
				actors = [];
				// for (i = 0; i < NUM_ACTORS; i++) {
				actors.push(new Actor(GJ.ActorTypes.GROUND_NORMAL));
				// actors.push(new Actor(GJ.ActorTypes.GROUND_NORMAL));
				actors.push(new Actor(GJ.ActorTypes.GROUND_EXPLODING));
				// actors.push(new Actor(GJ.ActorTypes.GROUND_EXPLODING));
				actors.push(new Actor(GJ.ActorTypes.FLYING_NORMAL));
				// actors.push(new Actor(GJ.ActorTypes.FLYING_NORMAL));
				// }

			enemyCount = actors.length;


			players = [];
			for (i = 0; i < NUM_PLAYERS; i++) {
				players.push(new Player(
					GJ.Input.Keycodes.LEFT_ARROW, 
					GJ.Input.Keycodes.RIGHT_ARROW, 
					GJ.Input.Keycodes.SHIFT, 
					GJ.Input.Keycodes.UP_ARROW,
					GJ.Input.Keycodes.ENTER,
					GJ.Input.Keycodes.SPACEBAR,
					2, 9, 1.5));
			}

			numGems = 10;
			numHearts = 3;



			setupGem();
			setupHeart();

			createjs.Ticker.setFPS(TARGET_FPS);
			createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED; // if we do standard timing instead of this can we adjust fps to slow/fast up game?
			createjs.Ticker.addEventListener('tick', GJ.update);

			GJ.Sound.init(); // Start the audio engine


			
		},


		update: function (evt) {
			var i, j;

			event = evt;

			GJ.Sound.update();

			worlds[currentWorld].update();

			for (i = 0; i < actors.length; i++) {
				actors[i].update();
			}

			for (i = 0; i < players.length; i++) {
				players[i].update();

				for (j = 0; j < actors.length; j++) {
					players[i].checkActorCollision(actors[j]);
				}
			}

			drawFPS();

			stage.update(evt);
		},


		toDelta: function (val) {
			return event.delta / 1000 * val;
		},


		pause: function () {
			Ticker.setPaused(true);
		},


		resume: function () {
			Ticker.setPaused(false);
		},


		getFPS: function () {
			return Ticker.getMeasuredFPS();
		},

		getTargetFPS: function () {
			return TARGET_FPS;
		},


		getStage: function () {
			return stage;
		},

		getCurrentWorld: function () {
			return worlds[currentWorld];
		},

		getPlayers: function () {
			return players;
		},

		getActors: function () {
			return actors;
		},

		gentlemanStoleMyBike: function () {
			numGems--;
			gemText.text = '' + numGems;
			GJ.Sound.triggerEvent("turtle_sad");
		},

		addGem: function () {
			numGems++;
			gemText.text = '' + numGems;
		},

		getTurtle: function () {
			return turtle;
		},

		removeEnemy: function () {
			enemyCount--;

			if (enemyCount <= 0) {
				GJ.Sound.triggerEvent("turtle_happy");
			turtle.spawnHearts();
			var effect = new Effect(800, 300, GJ.EffectTypes.WAVE_OVER, 0);
			}
		},

		takeHit: function () {
			numHearts--;
			heartText.text = '' + numHearts;

			// DO GAMESTAGE CHECKING STUFF HERE, REINIT IF DEAD
			if(numHearts <= 0) {
				GJ.assetsReady();
			}
		},

		States: {
			MOVING_LEFT: 0,
			LANDING: 1,
			STEALING: 2,
			LEGGING_IT: 3,
			EXPLODING: 4
		},

		Directions: {
			LEFT: 0,
			RIGHT: 1
		},

		Weapons: {
			PLAYER_GUN: 0
		},

		ActorTypes: {
			GROUND_NORMAL: 0,
			GROUND_EXPLODING: 1,
			FLYING_NORMAL: 2,
			TURTLE: 3
		},

		EffectTypes: {
			RUNNING_SMOKE: 0,
			JUMP_SMOKE: 1,
			WAVE1: 2,
			WAVE2: 3,
			WAVE3: 4,
			WAVE_OVER: 5
		}
	};
})();
