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

	this.shape = new createjs.Shape();
	this.shape.graphics.beginFill("red").drawRect(0, this.groundHeight, stageWidth, stageHeight);

	this.gems = new createjs.Shape();
	this.gems.graphics.beginFill("orange").drawRect(0, 30, 30, 30);
	this.gems.x = this.goalX - 15;
	this.gems.y = this.goalY - 15;

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

	this.mine = new createjs.Shape();
	this.mine.graphics.beginFill("green").drawRect(0, stageHeight - groundOffset - 60, 60, 90);

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

		if (cloud.x + /*cloud.getBounds().width*/60 < 0) {
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