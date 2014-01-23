var GJ = (function () {

	var TARGET_FPS		= 60,
		CANVAS_ID		= 'myCanvas',

		NUM_PLAYERS 	= 1,
		NUM_WORLDS		= 1,

		currentWorld 	= 0,

		i,
		event,

		stage,
		worlds,
		actors,
		players;


	return {
		start: function () {
			GJ.Input.init();
			GJ.Assets.init();

			stage = new createjs.Stage(CANVAS_ID);

			worlds = [];
			i = NUM_WORLDS;
			while (--i) {
				worlds.push(new World());
			}

			actors = [];

			players = [];
			i = NUM_PLAYERS
			while (--i) {
				players.push(new Player(13));
			}

			createjs.Ticker.setFPS(TARGET_FPS);
			createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED; // if we do standard timing instead of this can we adjust fps to slow/fast up game?
			createjs.Ticker.addEventListener('tick', GJ.update);
		},


		update: function (evt) {
			event = evt;

			map.update();

			i = players.length;
			while (--i) {
				players[i].update();
			}

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
