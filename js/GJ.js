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

		waveTitle,
		waveCounter,
		waveTimer,

		numHearts,
		heartText,
		heartImage,

		enemyCount,

		stage,
		worlds,
		actors = [],
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






	///////////////// WAVE 1

	var setupWaveTitle1 = function () {
		// waveCounter = 1;
		// waveTimer = 0;

		waveTitle = new createjs.Bitmap(GJ.Assets.get('WaveTitle'));
		waveTitle.x = 150;
		waveTitle.y = 200;
		
	};

	/*

	var startPoint = get

	actors.push(new Actor(GJ.ActorTypes.GROUND_NORMAL, startX + 0, startY + 0));
	actors.push(new Actor(GJ.ActorTypes.GROUND_EXPLODING, startX + 50, startY + 0));
	actors.push(new Actor(GJ.ActorTypes.FLYING_NORMAL, startX + 50, balloonHeightHigh)); // make sure these 2 dont overlap
	actors.push(new Actor(GJ.ActorTypes.FLYING_NORMAL, startX + 100, balloonHeightLow));

	*/

	var spawnWave1 = function () {
		var startX = GJ.getCurrentWorld().getWorldWidth(),
			startY = 400,
			balloonHeightHigh = 250,
			balloonHeightLow = 400,
			gapBetweenMiniWaves = 1500;

		actors = [];
// actors.push(new Actor(GJ.ActorTypes.GROUND_NORMAL, 800, startY + 0));		
actors.push(new Actor(GJ.ActorTypes.GROUND_EXPLODING, 800, startY + 0));	
// actors.push(new Actor(GJ.ActorTypes.FLYING_NORMAL, 800, balloonHeightHigh));
// actors.push(new Actor(GJ.ActorTypes.FLYING_NORMAL, 900, balloonHeightLow));



		actors.push(new Actor(GJ.ActorTypes.GROUND_NORMAL, startX + 0, startY + 0));

		startX += gapBetweenMiniWaves;

		actors.push(new Actor(GJ.ActorTypes.GROUND_NORMAL, startX + 0, startY + 0));

		startX += gapBetweenMiniWaves;

		actors.push(new Actor(GJ.ActorTypes.GROUND_NORMAL, startX + 0, startY + 0));
		actors.push(new Actor(GJ.ActorTypes.GROUND_NORMAL, startX + 300, startY + 0));

		startX += gapBetweenMiniWaves;

		actors.push(new Actor(GJ.ActorTypes.GROUND_NORMAL, startX + 0, startY + 0));
		actors.push(new Actor(GJ.ActorTypes.FLYING_NORMAL, startX + 100, balloonHeightLow));
		actors.push(new Actor(GJ.ActorTypes.GROUND_NORMAL, startX + 200, startY + 0));

		startX += gapBetweenMiniWaves;

		actors.push(new Actor(GJ.ActorTypes.GROUND_NORMAL, startX + 0, startY + 0));
		actors.push(new Actor(GJ.ActorTypes.GROUND_NORMAL, startX + 100, startY + 0));
		actors.push(new Actor(GJ.ActorTypes.GROUND_NORMAL, startX + 200, startY + 0));
		actors.push(new Actor(GJ.ActorTypes.GROUND_NORMAL, startX + 300, startY + 0));
		actors.push(new Actor(GJ.ActorTypes.GROUND_NORMAL, startX + 400, startY + 0));
				
		enemyCount = actors.length;
	};


	///////////////// WAVE 2
	
	var setupWaveTitle2 = function () {
		waveTitle = new createjs.Bitmap(GJ.Assets.get('WaveTitle'));
		waveTitle.x = 150;
		waveTitle.y = 200;
	};

	var spawnWave2 = function () {
		var startX = GJ.getCurrentWorld().getWorldWidth(),
			startY = 400,
			balloonHeightHigh = 250,
			balloonHeightLow = 400,
			gapBetweenMiniWaves = 1500;

		actors = [];

		actors.push(new Actor(GJ.ActorTypes.GROUND_NORMAL, startX + 0, startY + 0));

		startX += gapBetweenMiniWaves;

		actors.push(new Actor(GJ.ActorTypes.GROUND_NORMAL, startX + 0, startY + 0));

		startX += gapBetweenMiniWaves;

		actors.push(new Actor(GJ.ActorTypes.GROUND_NORMAL, startX + 0, startY + 0));
		actors.push(new Actor(GJ.ActorTypes.GROUND_NORMAL, startX + 300, startY + 0));

		startX += gapBetweenMiniWaves;

		actors.push(new Actor(GJ.ActorTypes.GROUND_NORMAL, startX + 0, startY + 0));
		actors.push(new Actor(GJ.ActorTypes.FLYING_NORMAL, startX + 100, balloonHeightLow));
		actors.push(new Actor(GJ.ActorTypes.GROUND_NORMAL, startX + 200, startY + 0));

		startX += gapBetweenMiniWaves;

		actors.push(new Actor(GJ.ActorTypes.GROUND_NORMAL, startX + 0, startY + 0));
		actors.push(new Actor(GJ.ActorTypes.GROUND_NORMAL, startX + 100, startY + 0));
		actors.push(new Actor(GJ.ActorTypes.GROUND_NORMAL, startX + 200, startY + 0));
		actors.push(new Actor(GJ.ActorTypes.GROUND_NORMAL, startX + 300, startY + 0));
		actors.push(new Actor(GJ.ActorTypes.GROUND_NORMAL, startX + 400, startY + 0));
				
		enemyCount = actors.length;
	};


	///////////////// WAVE 3
	
	var setupWaveTitle3 = function () {
		waveTitle = new createjs.Bitmap(GJ.Assets.get('WaveTitle'));
		waveTitle.x = 150;
		waveTitle.y = 200;
		
	};

	var spawnWave3 = function () {
		var startX = GJ.getCurrentWorld().getWorldWidth(),
			startY = 400,
			balloonHeightHigh = 250,
			balloonHeightLow = 400,
			gapBetweenMiniWaves = 1500;

		actors = [];

		actors.push(new Actor(GJ.ActorTypes.GROUND_NORMAL, startX + 0, startY + 0));

		startX += gapBetweenMiniWaves;

		actors.push(new Actor(GJ.ActorTypes.GROUND_NORMAL, startX + 0, startY + 0));

		startX += gapBetweenMiniWaves;

		actors.push(new Actor(GJ.ActorTypes.GROUND_NORMAL, startX + 0, startY + 0));
		actors.push(new Actor(GJ.ActorTypes.GROUND_NORMAL, startX + 300, startY + 0));

		startX += gapBetweenMiniWaves;

		actors.push(new Actor(GJ.ActorTypes.GROUND_NORMAL, startX + 0, startY + 0));
		actors.push(new Actor(GJ.ActorTypes.FLYING_NORMAL, startX + 100, balloonHeightLow));
		actors.push(new Actor(GJ.ActorTypes.GROUND_NORMAL, startX + 200, startY + 0));

		startX += gapBetweenMiniWaves;

		actors.push(new Actor(GJ.ActorTypes.GROUND_NORMAL, startX + 0, startY + 0));
		actors.push(new Actor(GJ.ActorTypes.GROUND_NORMAL, startX + 100, startY + 0));
		actors.push(new Actor(GJ.ActorTypes.GROUND_NORMAL, startX + 200, startY + 0));
		actors.push(new Actor(GJ.ActorTypes.GROUND_NORMAL, startX + 300, startY + 0));
		actors.push(new Actor(GJ.ActorTypes.GROUND_NORMAL, startX + 400, startY + 0));
				
		enemyCount = actors.length;
	};


	///////////////// WIN
	
	var showWin = function () {
		
		
	};




	
	var showGameOver = function () {
		
		
	};



	var showTitleWave = function () {
		stage.addChild(waveTitle);
	};



	var hideTitleWave = function () {
		stage.removeChild(waveTitle);
	};


	var triggerWaveEnd = function () {
		GJ.Sound.triggerEvent("turtle_happy");
				turtle.spawnHearts();
				var effect = new Effect(550, 200, GJ.EffectTypes.WAVE_OVER, 0);
				waveTimer = -200;
				waveCounter++;
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

			
				
			waveTimer = 0;

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
			waveCounter = 1;







			// REMOVE THIS// REMOVE THIS// REMOVE THIS// REMOVE THIS// REMOVE THIS// REMOVE THIS// REMOVE THIS// REMOVE THIS// REMOVE THIS// REMOVE THIS// REMOVE THIS// REMOVE THIS
			waveTimer = 350;







			setupGem();
			setupHeart();

			createjs.Ticker.setFPS(TARGET_FPS);
			createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED; // if we do standard timing instead of this can we adjust fps to slow/fast up game?
			createjs.Ticker.addEventListener('tick', GJ.update);

			GJ.Sound.init(); // Start the audio engine


			
		},


		update: function (evt) {
			var i, j,
			activeCount = 0;

			event = evt;

			GJ.Sound.update();

			worlds[currentWorld].update();



			for (i = 0; i < actors.length; i++) {
				actors[i].active
				if (actors[i].active) {
					activeCount++;
				}

				actors[i].update();
			}

			if (activeCount <= 0 && waveTimer > 450) {
				triggerWaveEnd();
			}

			for (i = 0; i < players.length; i++) {
				players[i].update();

				for (j = 0; j < actors.length; j++) {
					players[i].checkActorCollision(actors[j]);
				}
			}

			waveTimer++;

			///////////////////// WAVE 1

			if(waveTimer == 100 && waveCounter == 1) {
				setupWaveTitle1();
				showTitleWave();
			}

			else if(waveTimer == 300 && waveCounter == 1) {
				hideTitleWave();
			}

			else if (waveTimer == 400 && waveCounter == 1) {
				spawnWave1();
			}

			///////////////////// WAVE 2

			if(waveTimer == 100 && waveCounter == 2) {
				setupWaveTitle2();
				showTitleWave();
			}

			else if(waveTimer == 300 && waveCounter == 2) {
				hideTitleWave();
			}

			else if (waveTimer == 400 && waveCounter == 2) {
				spawnWave2();
			}


			///////////////////// WAVE 3

			if(waveTimer == 100 && waveCounter == 3) {
				setupWaveTitle3();
				showTitleWave();
			}

			else if(waveTimer == 300 && waveCounter == 3) {
				hideTitleWave();
			}

			else if (waveTimer == 400 && waveCounter == 3) {
				spawnWave3();
			}


			///////////////////// WINRAR!

			if(waveTimer == 100 && waveCounter == 3) {
				showWin();
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

		getNumGems: function () {
			return numGems;
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
			WAVE_OVER: 5,
			EXPLOSION_SMALL: 6
		}
	};
})();
