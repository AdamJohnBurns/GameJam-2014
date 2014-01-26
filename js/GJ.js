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

		gameOverTitle,
		winTitle,

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
		var effect = new Effect(550, 200, GJ.EffectTypes.WAVE1, 0);

		turtle.image.gotoAndPlay('idle');


		GJ.Sound.triggerEvent("new_wave");
		
	};



	var spawnWave1 = function () {
		var startX = GJ.getCurrentWorld().getWorldWidth(),
			startY = 400,
			balloonHeightHigh = 250,
			balloonHeightLow = 400,
			gapBetweenMiniWaves = 1500;

		actors = [];
// actors.push(new Actor(GJ.ActorTypes.GROUND_NORMAL, 800, startY + 0));		
// actors.push(new Actor(GJ.ActorTypes.GROUND_EXPLODING, 800, startY + 0));	
// actors.push(new Actor(GJ.ActorTypes.FLYING_NORMAL, 800, balloonHeightHigh));
// actors.push(new Actor(GJ.ActorTypes.FLYING_NORMAL, 900, balloonHeightLow));


// turtle.image.gotoAndPlay('happy');
// turtle.image.gotoAndPlay('moderatlyHappy');


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
		var effect = new Effect(550, 200, GJ.EffectTypes.WAVE2, 0);

		turtle.image.gotoAndPlay('idle');
	};

	var spawnWave2 = function () {
		var startX = GJ.getCurrentWorld().getWorldWidth(),
			startY = 400,
			balloonHeightHigh = 250,
			balloonHeightLow = 400,
			gapBetweenMiniWaves = 1500;

		actors = [];

		actors.push(new Actor(GJ.ActorTypes.GROUND_NORMAL, startX + 0, startY + 0));
		actors.push(new Actor(GJ.ActorTypes.FLYING_NORMAL, startX + 0, balloonHeightLow));

		startX += gapBetweenMiniWaves;

		actors.push(new Actor(GJ.ActorTypes.GROUND_NORMAL, startX + 0, startY + 0));
		actors.push(new Actor(GJ.ActorTypes.FLYING_NORMAL, startX + 100, balloonHeightLow));
		actors.push(new Actor(GJ.ActorTypes.GROUND_NORMAL, startX + 200, startY + 0));
		actors.push(new Actor(GJ.ActorTypes.FLYING_NORMAL, startX + 200, balloonHeightHigh));

		startX += gapBetweenMiniWaves;

		actors.push(new Actor(GJ.ActorTypes.FLYING_NORMAL, startX + 0, balloonHeightLow));
		actors.push(new Actor(GJ.ActorTypes.FLYING_NORMAL, startX + 100, balloonHeightHigh));
		actors.push(new Actor(GJ.ActorTypes.FLYING_NORMAL, startX + 200, balloonHeightLow));
		actors.push(new Actor(GJ.ActorTypes.FLYING_NORMAL, startX + 400, balloonHeightHigh));
		actors.push(new Actor(GJ.ActorTypes.FLYING_NORMAL, startX + 500, balloonHeightLow));
		actors.push(new Actor(GJ.ActorTypes.FLYING_NORMAL, startX + 800, balloonHeightHigh));
		actors.push(new Actor(GJ.ActorTypes.FLYING_NORMAL, startX + 900, balloonHeightLow));

		startX += gapBetweenMiniWaves;

		actors.push(new Actor(GJ.ActorTypes.GROUND_EXPLODING, startX + 0, startY + 0));
		actors.push(new Actor(GJ.ActorTypes.GROUND_NORMAL, startX + 200, startY + 0));
		actors.push(new Actor(GJ.ActorTypes.GROUND_NORMAL, startX + 300, startY + 0));
		actors.push(new Actor(GJ.ActorTypes.GROUND_NORMAL, startX + 400, startY + 0));

		startX += gapBetweenMiniWaves;

		actors.push(new Actor(GJ.ActorTypes.FLYING_NORMAL, startX + 0, balloonHeightHigh));
		actors.push(new Actor(GJ.ActorTypes.GROUND_EXPLODING, startX + 0, startY + 0));
		actors.push(new Actor(GJ.ActorTypes.FLYING_NORMAL, startX + 100, balloonHeightLow));
		actors.push(new Actor(GJ.ActorTypes.GROUND_NORMAL, startX + 200, startY + 0));
		actors.push(new Actor(GJ.ActorTypes.GROUND_EXPLODING, startX + 300, startY + 0));
		actors.push(new Actor(GJ.ActorTypes.FLYING_NORMAL, startX + 400, balloonHeightHigh));
		actors.push(new Actor(GJ.ActorTypes.GROUND_EXPLODING, startX + 500, startY + 0));
		actors.push(new Actor(GJ.ActorTypes.FLYING_NORMAL, startX + 600, balloonHeightHigh));
		actors.push(new Actor(GJ.ActorTypes.GROUND_EXPLODING, startX + 800, startY + 0));
		actors.push(new Actor(GJ.ActorTypes.FLYING_NORMAL, startX + 900, balloonHeightHigh));
		actors.push(new Actor(GJ.ActorTypes.GROUND_EXPLODING, startX + 1000, startY + 0));
		actors.push(new Actor(GJ.ActorTypes.FLYING_NORMAL, startX + 1000, balloonHeightHigh));
				
		enemyCount = actors.length;
	};


	///////////////// WAVE 3
	
	var setupWaveTitle3 = function () {
		var effect = new Effect(550, 200, GJ.EffectTypes.WAVE3, 0);

		turtle.image.gotoAndPlay('idle');
		
	};

	var spawnWave3 = function () {
		var startX = GJ.getCurrentWorld().getWorldWidth(),
			startY = 400,
			balloonHeightHigh = 250,
			balloonHeightLow = 400,
			gapBetweenMiniWaves = 1500;

		actors = [];

		actors.push(new Actor(GJ.ActorTypes.FLYING_NORMAL, startX + 0, balloonHeightHigh));
		actors.push(new Actor(GJ.ActorTypes.FLYING_NORMAL, startX + 100, balloonHeightHigh));
		actors.push(new Actor(GJ.ActorTypes.FLYING_NORMAL, startX + 200, balloonHeightHigh));
		actors.push(new Actor(GJ.ActorTypes.FLYING_NORMAL, startX + 300, balloonHeightLow));
		actors.push(new Actor(GJ.ActorTypes.FLYING_NORMAL, startX + 400, balloonHeightLow));

		startX += gapBetweenMiniWaves;

		actors.push(new Actor(GJ.ActorTypes.FLYING_NORMAL, startX + 0, balloonHeightHigh));
		actors.push(new Actor(GJ.ActorTypes.GROUND_NORMAL, startX + 100, startY + 0));
		actors.push(new Actor(GJ.ActorTypes.FLYING_NORMAL, startX + 300, balloonHeightLow));
		actors.push(new Actor(GJ.ActorTypes.FLYING_NORMAL, startX + 400, balloonHeightLow));
		actors.push(new Actor(GJ.ActorTypes.FLYING_NORMAL, startX + 500, balloonHeightHigh));
		actors.push(new Actor(GJ.ActorTypes.GROUND_EXPLODING, startX + 600, startY + 0));
		actors.push(new Actor(GJ.ActorTypes.FLYING_NORMAL, startX + 700, balloonHeightHigh));

		startX += gapBetweenMiniWaves;

		actors.push(new Actor(GJ.ActorTypes.GROUND_NORMAL, startX + 0, startY + 0));
		actors.push(new Actor(GJ.ActorTypes.GROUND_NORMAL, startX + 300, startY + 0));

		startX += gapBetweenMiniWaves;

		actors.push(new Actor(GJ.ActorTypes.GROUND_NORMAL, startX + 0, startY + 0));
		actors.push(new Actor(GJ.ActorTypes.FLYING_NORMAL, startX + 0, balloonHeightLow));
		actors.push(new Actor(GJ.ActorTypes.FLYING_NORMAL, startX + 100, balloonHeightHigh));
		actors.push(new Actor(GJ.ActorTypes.GROUND_EXPLODING, startX + 200, startY + 0));
		actors.push(new Actor(GJ.ActorTypes.FLYING_NORMAL, startX + 200, balloonHeightLow));
		actors.push(new Actor(GJ.ActorTypes.FLYING_NORMAL, startX + 300, balloonHeightHigh));
		actors.push(new Actor(GJ.ActorTypes.GROUND_NORMAL, startX + 400, startY + 0));
		actors.push(new Actor(GJ.ActorTypes.FLYING_NORMAL, startX + 400, balloonHeightHigh));
		actors.push(new Actor(GJ.ActorTypes.FLYING_NORMAL, startX + 500, balloonHeightLow));
		actors.push(new Actor(GJ.ActorTypes.GROUND_EXPLODING, startX + 600, startY + 0));


		startX += gapBetweenMiniWaves;

		actors.push(new Actor(GJ.ActorTypes.GROUND_EXPLODING, startX + 0, startY + 0));
		actors.push(new Actor(GJ.ActorTypes.FLYING_NORMAL, startX + 0, balloonHeightLow));
		actors.push(new Actor(GJ.ActorTypes.FLYING_NORMAL, startX + 0, balloonHeightHigh));
		actors.push(new Actor(GJ.ActorTypes.GROUND_NORMAL, startX + 100, startY + 0));
		actors.push(new Actor(GJ.ActorTypes.FLYING_NORMAL, startX + 100, balloonHeightLow));
		actors.push(new Actor(GJ.ActorTypes.FLYING_NORMAL, startX + 100, balloonHeightHigh));
		actors.push(new Actor(GJ.ActorTypes.GROUND_NORMAL, startX + 200, startY + 0));
		actors.push(new Actor(GJ.ActorTypes.FLYING_NORMAL, startX + 200, balloonHeightLow));
		actors.push(new Actor(GJ.ActorTypes.FLYING_NORMAL, startX + 200, balloonHeightHigh));
		actors.push(new Actor(GJ.ActorTypes.GROUND_EXPLODING, startX + 300, startY + 0));
		actors.push(new Actor(GJ.ActorTypes.FLYING_NORMAL, startX + 300, balloonHeightLow));
		actors.push(new Actor(GJ.ActorTypes.FLYING_NORMAL, startX + 300, balloonHeightHigh));
		actors.push(new Actor(GJ.ActorTypes.GROUND_NORMAL, startX + 400, startY + 0));
		actors.push(new Actor(GJ.ActorTypes.FLYING_NORMAL, startX + 400, balloonHeightLow));
		actors.push(new Actor(GJ.ActorTypes.FLYING_NORMAL, startX + 400, balloonHeightHigh));
		actors.push(new Actor(GJ.ActorTypes.GROUND_NORMAL, startX + 500, startY + 0));
		actors.push(new Actor(GJ.ActorTypes.FLYING_NORMAL, startX + 500, balloonHeightLow));
		actors.push(new Actor(GJ.ActorTypes.FLYING_NORMAL, startX + 500, balloonHeightHigh));
		actors.push(new Actor(GJ.ActorTypes.GROUND_EXPLODING, startX + 600, startY + 0));
		actors.push(new Actor(GJ.ActorTypes.FLYING_NORMAL, startX + 600, balloonHeightLow));
		actors.push(new Actor(GJ.ActorTypes.FLYING_NORMAL, startX + 600, balloonHeightHigh));
		actors.push(new Actor(GJ.ActorTypes.GROUND_NORMAL, startX + 700, startY + 0));
		actors.push(new Actor(GJ.ActorTypes.FLYING_NORMAL, startX + 700, balloonHeightLow));
		actors.push(new Actor(GJ.ActorTypes.FLYING_NORMAL, startX + 700, balloonHeightHigh));
		actors.push(new Actor(GJ.ActorTypes.GROUND_EXPLODING, startX + 800, startY + 0));
		actors.push(new Actor(GJ.ActorTypes.FLYING_NORMAL, startX + 800, balloonHeightLow));
		actors.push(new Actor(GJ.ActorTypes.FLYING_NORMAL, startX + 800, balloonHeightHigh));
		actors.push(new Actor(GJ.ActorTypes.GROUND_NORMAL, startX + 900, startY + 0));
		actors.push(new Actor(GJ.ActorTypes.FLYING_NORMAL, startX + 900, balloonHeightLow));
		actors.push(new Actor(GJ.ActorTypes.FLYING_NORMAL, startX + 900, balloonHeightHigh));
		actors.push(new Actor(GJ.ActorTypes.GROUND_NORMAL, startX + 1000, startY + 0));
		actors.push(new Actor(GJ.ActorTypes.FLYING_NORMAL, startX + 1000, balloonHeightLow));
		actors.push(new Actor(GJ.ActorTypes.FLYING_NORMAL, startX + 1000, balloonHeightHigh));
				
		enemyCount = actors.length;
	};


	///////////////// WIN
	
	var showWin = function () {
		GJ.Sound.triggerEvent("win");		
		stage.addChild(winTitle);
		turtle.image.gotoAndPlay('happy');
	};

	var hideWin = function () {
		stage.removeChild(winTitle);
	};



	var showHelp = function () {
		var effect = new Effect(550, 200, GJ.EffectTypes.HELP, 0);
	};



	
	var showGameOver = function () {
		GJ.Sound.triggerEvent("lose");
		stage.addChild(gameOverTitle);
		
	};



	var showTitleWave = function () {
		stage.addChild(waveTitle);
	};



	var hideTitleWave = function () {
		stage.removeChild(waveTitle);
	};


	var triggerWaveEnd = function () {
		turtle.image.gotoAndPlay('moderatelyHappy');

		GJ.Sound.triggerEvent("win");
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


			players = [];
			for (i = 0; i < NUM_PLAYERS; i++) {
				players.push(new Player(
					GJ.Input.Keycodes.LEFT_ARROW, 
					GJ.Input.Keycodes.RIGHT_ARROW, 
					GJ.Input.Keycodes.ALT, 
					GJ.Input.Keycodes.UP_ARROW,
					GJ.Input.Keycodes.CTRL,
					GJ.Input.Keycodes.SPACEBAR,
					2, 8, 1.5));
			}

			numGems = 20;
			numHearts = 5;
			waveCounter = 0;
			waveTimer = 0;

			gameOverTitle = new createjs.Bitmap(GJ.Assets.get('GameOverTitle'));
			gameOverTitle.x = 230;
			gameOverTitle.y = 50;
			// showGameOver();
			winTitle = new createjs.Bitmap(GJ.Assets.get('WinTitle'));
			winTitle.x = 230;
			winTitle.y = 50;
			// showWin();












			// REMOVE THIS// REMOVE THIS// REMOVE THIS// REMOVE THIS// REMOVE THIS// REMOVE THIS// REMOVE THIS// REMOVE THIS// REMOVE THIS// REMOVE THIS// REMOVE THIS// REMOVE THIS
			// waveTimer = 350;
			// waveCounter = 3;













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


			///////////////////// GAME OVER


			if(waveTimer == 1 && waveCounter == -1) {
				showGameOver();
			}
// if(waveCounter == -1 ) {
// 	console.log(waveTimer);
// }
			if(waveTimer == 200 && waveCounter == -1) {
				GJ.assetsReady();
			}
			


			///////////////////// HELP


			if(waveTimer == 100 && waveCounter == 0) {
				showHelp();
			}


			if(waveTimer == 300 && waveCounter == 0) {
				// hideHelp();
				waveTimer = 0;
				waveCounter = 1;
			}


			///////////////////// WIN


			if(waveTimer == 1 && waveCounter == 99) {
				showWin();
			}


			if(waveTimer == 100 && waveCounter == 99) {
				GJ.assetsReady();
			}


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

		playerShootGem: function () {
			numGems-=1;
			gemText.text = '' + numGems;
			GJ.Sound.triggerEvent("turtle_sad");

			if (numGems <= 0) {
				players[0].enabled = false;
				waveTimer = 0;
				waveCounter = -1;
			}
		},

		gentlemanStoleMyBike: function () {
			numGems-=2;
			gemText.text = '' + numGems;
			GJ.Sound.triggerEvent("turtle_sad");

			if (numGems <= 0) {
				players[0].enabled = false;
				waveTimer = 0;
				waveCounter = -1;
			}
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
				// GJ.assetsReady();
				waveTimer = 0;
				waveCounter = -1;
				players[0].enabled = false;
				var effect = new Effect(players[0].image.x, players[0].image.y, GJ.EffectTypes.EXPLOSION_SMALL, 0);
				players[0].image.x = 4000;
				players[0].image.y = 4000;
				GJ.getStage().removeChild(players[0].image);
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
			EXPLOSION_SMALL: 6,
			HELP: 7
		}
	};
})();
