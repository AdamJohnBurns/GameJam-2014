World = function (goalX, goalY, groundOffset, gravity) {
	var i,
		rnd,
		cloudName,
		stageWidth = GJ.getStage().canvas.width,
		stageHeight = GJ.getStage().canvas.height;

	this.worldWidth = stageWidth;

	this.groundHeight = stageHeight - groundOffset;
	this.gravity = gravity;

	this.goalX = goalX;
	this.goalY = goalY;



	this.bgmain = new createjs.Bitmap(GJ.Assets.get('SceneBGMain'));
	this.bgmain.x = -20;
	this.bgmain.y = 0;

	this.decoration = new createjs.Bitmap(GJ.Assets.get('SceneDecoration'));
	
	this.decoration.x = 0;
	this.decoration.y = 270;


	this.ground = new createjs.Bitmap(GJ.Assets.get('SceneGround'));
	this.ground.x = 0;
	this.ground.y = 460;

	this.ground = new createjs.Bitmap(GJ.Assets.get('SceneGround'));
	this.ground.x = 0;
	this.ground.y = 460;

	

	GJ.getStage().addChild(this.bgmain);
	GJ.getStage().addChild(this.decoration);
	GJ.getStage().addChild(this.ground);
	GJ.getStage().addChild(this.foreground);

	this.clouds = [];
	for (i = 0; i < 4; i++) {
		rnd = Math.random();

		if (rnd < 0.33) {
			cloudName = 'SceneCloud1';
		} else if (rnd < 0.66) {
			cloudName = 'SceneCloud2';
		} else {
			cloudName = 'SceneCloud3';
		}

		this.clouds.push(new createjs.Bitmap(GJ.Assets.get(cloudName)));

		this.clouds[i].x = Math.random() * this.worldWidth;
		this.clouds[i].y = 30 + Math.random() * 100;

		GJ.getStage().addChild(this.clouds[i]);		
	}

	this.mine = new createjs.Bitmap(GJ.Assets.get('SceneMine'));
	this.mine.x = 0;
	this.mine.y = 320;

	GJ.getStage().addChild(this.shape);
	GJ.getStage().addChild(this.gems);
	GJ.getStage().addChild(this.mine);
};


World.prototype.update = function () {
	this.scrollClouds();
};



World.prototype.scrollClouds = function () {
	var cloud;

	for (i = 0; i < this.clouds.length; i++) {
		cloud = this.clouds[i];

		cloud.x -= 0.15;

		if (cloud.x + cloud.getBounds().width < 0) {
			cloud.x = this.worldWidth + Math.random() * 100;
			this.clouds[i].y = 30 + Math.random() * 100;
		}
	}
};


World.prototype.getGroundHeight = function () {
	return this.groundHeight;
};


World.prototype.getGravity = function () {
	return this.gravity;
};


World.prototype.handleGravity = function (object) {

	var height = object.getBounds().height / 2;

	if (object.y + height < this.groundHeight) {
		// object.y += this.gravity;
	} else {
		object.y = this.groundHeight - height;
		// object.
	}
};


World.prototype.getGoalX = function () {
	return this.goalX;
};


World.prototype.getWorldWidth = function () {
	return this.worldWidth;
};