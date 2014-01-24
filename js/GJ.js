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

		stage,
		worlds,
		actors,
		players;



	// Private methods ////////////////////////////////////////////

	var drawFPS = function () {

	};


	// Public methods /////////////////////////////////////////////

	return {
		start: function () {
			GJ.Input.init();
			GJ.Assets.init();
			GJ.Sound.init();
		},


		assetsReady: function () {
			var i;

			stage = new createjs.Stage(CANVAS_ID);

			worlds = [];
			for (i = 0; i < NUM_WORLDS; i++) {
				worlds.push(new World());
			}

			actors = [];
			for (i = 0; i < NUM_ACTORS; i++) {
				actors.push(new Actor());
			}

			players = [];
			for (i = 0; i < NUM_PLAYERS; i++) {
				players.push(new Player(38));
			}

			createjs.Ticker.setFPS(TARGET_FPS);
			createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED; // if we do standard timing instead of this can we adjust fps to slow/fast up game?
			createjs.Ticker.addEventListener('tick', GJ.update);
		},


		update: function (evt) {
			var i, j;

			event = evt;

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

			stage.update();
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


		getStage: function () {
			return stage;
		},


		getCurrentWorld: function () {
			return worlds[currentWorld];
		}
	};
})();
