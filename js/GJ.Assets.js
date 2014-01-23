GJ.Assets = (function () {

	var loadPlayerAssets = function () {
	};

	var loadWorldAssets = function () {
	};

	var loadActorAssets = function () {
	};


	return {
		init: function () {
			loadPlayerAssets();
			loadWorldAssets();
			loadActorAssets();
		},

		get: function (asset) {
			return "something";
		}
	};
}());