var Actor = function (type, x, y) {
	var data, data2, initialAnimation;

	this.active = true;
	this.state = GJ.States.MOVING_LEFT;

	this.accelX = 0;
	this.accelY = 0;

	this.type = type;

	this.hasGem = false;
	this.isOnGround = false;


	this.goalOffset = 0;

	

	if (this.type !== GJ.ActorTypes.TURTLE) {
		data = new createjs.SpriteSheet({
			framerate: 25,
			images: [ 
				GJ.Assets.get('PigRun'), 		// 22
				GJ.Assets.get('PigHit'), 		// 15
				GJ.Assets.get('PigCollect'), 	// 75
				GJ.Assets.get('PigGemRun'), 	// 22
				GJ.Assets.get('PigBombRun'), 	// 22
				GJ.Assets.get('PigBombExplode'), 	// 66
				GJ.Assets.get('PigFly') 	// 30
			], 
			frames: [
				// x, y, width, height, index, regX, regY
				// the index needs to match the file with the sprites
				[0,0,56,70,0,27.75,67.7],[56,0,56,70,0,27.75,67.7],[112,0,56,70,0,27.75,67.7],[168,0,56,70,0,27.75,67.7],[0,70,56,70,0,27.75,67.7],[56,70,56,70,0,27.75,67.7],[112,70,56,70,0,27.75,67.7],[168,70,56,70,0,27.75,67.7],[0,140,56,70,0,27.75,67.7],[56,140,56,70,0,27.75,67.7],[112,140,56,70,0,27.75,67.7],[168,140,56,70,0,27.75,67.7],[0,210,56,70,0,27.75,67.7],[56,210,56,70,0,27.75,67.7],[112,210,56,70,0,27.75,67.7],[168,210,56,70,0,27.75,67.7],[0,280,56,70,0,27.75,67.7],[56,280,56,70,0,27.75,67.7],[112,280,56,70,0,27.75,67.7],[168,280,56,70,0,27.75,67.7],[0,350,56,70,0,27.75,67.7],[56,350,56,70,0,27.75,67.7],
				[0,0,58,58,1,3.4,4.15],[58,0,58,58,1,3.4,4.15],[116,0,58,58,1,3.4,4.15],[174,0,58,58,1,3.4,4.15],[0,58,58,58,1,3.4,4.15],[58,58,58,58,1,3.4,4.15],[116,58,58,58,1,3.4,4.15],[174,58,58,58,1,3.4,4.15],[0,116,58,58,1,3.4,4.15],[58,116,58,58,1,3.4,4.15],[116,116,58,58,1,3.4,4.15],[174,116,58,58,1,3.4,4.15],[0,174,58,58,1,3.4,4.15],[58,174,58,58,1,3.4,4.15],[116,174,58,58,1,3.4,4.15],
				[0,0,57,81,2,28,80.5],[62,0,57,81,2,28,80.5],[124,0,57,81,2,28,80.5],[186,0,57,81,2,28,80.5],[248,0,57,81,2,28,80.5],[310,0,57,81,2,28,80.5],[372,0,57,81,2,28,80.5],[434,0,57,81,2,28,80.5],[0,86,57,81,2,28,80.5],[62,86,57,81,2,28,80.5],[124,86,57,81,2,28,80.5],[186,86,57,81,2,28,80.5],[248,86,57,81,2,28,80.5],[310,86,57,81,2,28,80.5],[372,86,57,81,2,28,80.5],[434,86,57,81,2,28,80.5],[0,172,57,81,2,28,80.5],[62,172,57,81,2,28,80.5],[124,172,57,81,2,28,80.5],[186,172,57,81,2,28,80.5],[248,172,57,81,2,28,80.5],[310,172,57,81,2,28,80.5],[372,172,57,81,2,28,80.5],[434,172,57,81,2,28,80.5],[0,258,57,81,2,28,80.5],[62,258,57,81,2,28,80.5],[124,258,57,81,2,28,80.5],[186,258,57,81,2,28,80.5],[248,258,57,81,2,28,80.5],[310,258,57,81,2,28,80.5],[372,258,57,81,2,28,80.5],[434,258,57,81,2,28,80.5],[0,344,57,81,2,28,80.5],[62,344,57,81,2,28,80.5],[124,344,57,81,2,28,80.5],[186,344,57,81,2,28,80.5],[248,344,57,81,2,28,80.5],[310,344,57,81,2,28,80.5],[372,344,57,81,2,28,80.5],[434,344,57,81,2,28,80.5],[0,430,57,81,2,28,80.5],[62,430,57,81,2,28,80.5],[124,430,57,81,2,28,80.5],[186,430,57,81,2,28,80.5],[248,430,57,81,2,28,80.5],[310,430,57,81,2,28,80.5],[372,430,57,81,2,28,80.5],[434,430,57,81,2,28,80.5],[0,516,57,81,2,28,80.5],[62,516,57,81,2,28,80.5],[124,516,57,81,2,28,80.5],[186,516,57,81,2,28,80.5],[248,516,57,81,2,28,80.5],[310,516,57,81,2,28,80.5],[372,516,57,81,2,28,80.5],[434,516,57,81,2,28,80.5],[0,602,57,81,2,28,80.5],[62,602,57,81,2,28,80.5],[124,602,57,81,2,28,80.5],[186,602,57,81,2,28,80.5],[248,602,57,81,2,28,80.5],[310,602,57,81,2,28,80.5],[372,602,57,81,2,28,80.5],[434,602,57,81,2,28,80.5],[0,688,57,81,2,28,80.5],[62,688,57,81,2,28,80.5],[124,688,57,81,2,28,80.5],[186,688,57,81,2,28,80.5],[248,688,57,81,2,28,80.5],[310,688,57,81,2,28,80.5],[372,688,57,81,2,28,80.5],[434,688,57,81,2,28,80.5],[0,774,57,81,2,28,80.5],[62,774,57,81,2,28,80.5],[124,774,57,81,2,28,80.5],
				[0,0,57,87,3,27.9,86.6],[62,0,57,87,3,27.9,86.6],[124,0,57,87,3,27.9,86.6],[186,0,57,87,3,27.9,86.6],[248,0,57,87,3,27.9,86.6],[310,0,57,87,3,27.9,86.6],[372,0,57,87,3,27.9,86.6],[434,0,57,87,3,27.9,86.6],[0,92,57,87,3,27.9,86.6],[62,92,57,87,3,27.9,86.6],[124,92,57,87,3,27.9,86.6],[186,92,57,87,3,27.9,86.6],[248,92,57,87,3,27.9,86.6],[310,92,57,87,3,27.9,86.6],[372,92,57,87,3,27.9,86.6],[434,92,57,87,3,27.9,86.6],[0,184,57,87,3,27.9,86.6],[62,184,57,87,3,27.9,86.6],[124,184,57,87,3,27.9,86.6],[186,184,57,87,3,27.9,86.6],[248,184,57,87,3,27.9,86.6],[310,184,57,87,3,27.9,86.6],
				[0,0,56,97,4,27.75,93.95],[56,0,56,97,4,27.75,93.95],[112,0,56,97,4,27.75,93.95],[168,0,56,97,4,27.75,93.95],[224,0,56,97,4,27.75,93.95],[280,0,56,97,4,27.75,93.95],[336,0,56,97,4,27.75,93.95],[392,0,56,97,4,27.75,93.95],[448,0,56,97,4,27.75,93.95],[0,97,56,97,4,27.75,93.95],[56,97,56,97,4,27.75,93.95],[112,97,56,97,4,27.75,93.95],[168,97,56,97,4,27.75,93.95],[224,97,56,97,4,27.75,93.95],[280,97,56,97,4,27.75,93.95],[336,97,56,97,4,27.75,93.95],[392,97,56,97,4,27.75,93.95],[448,97,56,97,4,27.75,93.95],[0,194,56,97,4,27.75,93.95],[56,194,56,97,4,27.75,93.95],[112,194,56,97,4,27.75,93.95],[168,194,56,97,4,27.75,93.95],
				[0,0,167,158,5,84.2,154.3],[167,0,167,158,5,84.2,154.3],[334,0,167,158,5,84.2,154.3],[501,0,167,158,5,84.2,154.3],[668,0,167,158,5,84.2,154.3],[835,0,167,158,5,84.2,154.3],[0,158,167,158,5,84.2,154.3],[167,158,167,158,5,84.2,154.3],[334,158,167,158,5,84.2,154.3],[501,158,167,158,5,84.2,154.3],[668,158,167,158,5,84.2,154.3],[835,158,167,158,5,84.2,154.3],[0,316,167,158,5,84.2,154.3],[167,316,167,158,5,84.2,154.3],[334,316,167,158,5,84.2,154.3],[501,316,167,158,5,84.2,154.3],[668,316,167,158,5,84.2,154.3],[835,316,167,158,5,84.2,154.3],[0,474,167,158,5,84.2,154.3],[167,474,167,158,5,84.2,154.3],[334,474,167,158,5,84.2,154.3],[501,474,167,158,5,84.2,154.3],[668,474,167,158,5,84.2,154.3],[835,474,167,158,5,84.2,154.3],[0,632,167,158,5,84.2,154.3],[167,632,167,158,5,84.2,154.3],[334,632,167,158,5,84.2,154.3],[501,632,167,158,5,84.2,154.3],[668,632,167,158,5,84.2,154.3],[835,632,167,158,5,84.2,154.3],[0,790,167,158,5,84.2,154.3],[167,790,167,158,5,84.2,154.3],[334,790,167,158,5,84.2,154.3],[501,790,167,158,5,84.2,154.3],[668,790,167,158,5,84.2,154.3],[835,790,167,158,5,84.2,154.3],[0,948,167,158,5,84.2,154.3],[167,948,167,158,5,84.2,154.3],[334,948,167,158,5,84.2,154.3],[501,948,167,158,5,84.2,154.3],[668,948,167,158,5,84.2,154.3],[835,948,167,158,5,84.2,154.3],[0,1106,167,158,5,84.2,154.3],[167,1106,167,158,5,84.2,154.3],[334,1106,167,158,5,84.2,154.3],[501,1106,167,158,5,84.2,154.3],[668,1106,167,158,5,84.2,154.3],[835,1106,167,158,5,84.2,154.3],[0,1264,167,158,5,84.2,154.3],[167,1264,167,158,5,84.2,154.3],[334,1264,167,158,5,84.2,154.3],[501,1264,167,158,5,84.2,154.3],[668,1264,167,158,5,84.2,154.3],[835,1264,167,158,5,84.2,154.3],[0,1422,167,158,5,84.2,154.3],[167,1422,167,158,5,84.2,154.3],[334,1422,167,158,5,84.2,154.3],[501,1422,167,158,5,84.2,154.3],[668,1422,167,158,5,84.2,154.3],[835,1422,167,158,5,84.2,154.3],[0,1580,167,158,5,84.2,154.3],[167,1580,167,158,5,84.2,154.3],[334,1580,167,158,5,84.2,154.3],[501,1580,167,158,5,84.2,154.3],[668,1580,167,158,5,84.2,154.3],[835,1580,167,158,5,84.2,154.3],[0,1738,167,158,5,84.2,154.3],
				[0,0,56,67,6,24.4,69.55],[61,0,56,67,6,24.4,69.55],[122,0,56,67,6,24.4,69.55],[183,0,56,67,6,24.4,69.55],[244,0,56,67,6,24.4,69.55],[305,0,56,67,6,24.4,69.55],[366,0,56,67,6,24.4,69.55],[427,0,56,67,6,24.4,69.55],[0,72,56,67,6,24.4,69.55],[61,72,56,67,6,24.4,69.55],[122,72,56,67,6,24.4,69.55],[183,72,56,67,6,24.4,69.55],[244,72,56,67,6,24.4,69.55],[305,72,56,67,6,24.4,69.55],[366,72,56,67,6,24.4,69.55],[427,72,56,67,6,24.4,69.55],[0,144,56,67,6,24.4,69.55],[61,144,56,67,6,24.4,69.55],[122,144,56,67,6,24.4,69.55],[183,144,56,67,6,24.4,69.55],[244,144,56,67,6,24.4,69.55],[305,144,56,67,6,24.4,69.55],[366,144,56,67,6,24.4,69.55],[427,144,56,67,6,24.4,69.55],[0,216,56,67,6,24.4,69.55],[61,216,56,67,6,24.4,69.55],[122,216,56,67,6,24.4,69.55],[183,216,56,67,6,24.4,69.55],[244,216,56,67,6,24.4,69.55],[305,216,56,67,6,24.4,69.55]
			],
			animations: { 
				run: [0, 21],
				hit: [22, 37],
				collect: [38, 113],
				gemrun: [114, 133],
				bombrun: [134, 156],
				explode: [160, 226], // explosion ~190
				fly: [227,250]
			}
		});

		this.waitDelay = 150;

		if (this.type === GJ.ActorTypes.GROUND_NORMAL) {
			this.useGravity = true;
			this.moveSpeed = 1;
			this.maxMoveSpeed = 3;
			this.weight = 2;
			this.hasBomb = false;
			initialAnimation = 'run';

		} else if (this.type === GJ.ActorTypes.GROUND_EXPLODING) { 
			this.useGravity = true;
			this.moveSpeed = 1;
			this.maxMoveSpeed = 3;
			this.weight = 2;
			this.hasBomb = true;
			initialAnimation = 'bombrun';

		} else if (this.type === GJ.ActorTypes.FLYING_NORMAL) {
			this.useGravity = false;
			this.moveSpeed = 0.5;
			this.maxMoveSpeed = 3;
			this.weight = 2;
			this.hasBomb = false;

			data2 = new createjs.SpriteSheet({
				framerate: 25,
				images: [ 
					GJ.Assets.get('BalloonFly'), 		// 30
					GJ.Assets.get('BalloonDestroy') 		// 21
				], 
				frames: [
					// x, y, width, height, index, regX, regY
					// the index needs to match the file with the sprites
					[0,0,58,178,0,26.15,150.65],[63,0,58,178,0,26.15,150.65],[126,0,58,178,0,26.15,150.65],[189,0,58,178,0,26.15,150.65],[252,0,58,178,0,26.15,150.65],[315,0,58,178,0,26.15,150.65],[378,0,58,178,0,26.15,150.65],[441,0,58,178,0,26.15,150.65],[0,183,58,178,0,26.15,150.65],[63,183,58,178,0,26.15,150.65],[126,183,58,178,0,26.15,150.65],[189,183,58,178,0,26.15,150.65],[252,183,58,178,0,26.15,150.65],[315,183,58,178,0,26.15,150.65],[378,183,58,178,0,26.15,150.65],[441,183,58,178,0,26.15,150.65],[0,366,58,178,0,26.15,150.65],[63,366,58,178,0,26.15,150.65],[126,366,58,178,0,26.15,150.65],[189,366,58,178,0,26.15,150.65],[252,366,58,178,0,26.15,150.65],[315,366,58,178,0,26.15,150.65],[378,366,58,178,0,26.15,150.65],[441,366,58,178,0,26.15,150.65],[0,549,58,178,0,26.15,150.65],[63,549,58,178,0,26.15,150.65],[126,549,58,178,0,26.15,150.65],[189,549,58,178,0,26.15,150.65],[252,549,58,178,0,26.15,150.65],[315,549,58,178,0,26.15,150.65],
					[0,0,289,374,1,78.8,378.65],[289,0,289,374,1,78.8,378.65],[578,0,289,374,1,78.8,378.65],[867,0,289,374,1,78.8,378.65],[1156,0,289,374,1,78.8,378.65],[1445,0,289,374,1,78.8,378.65],[1734,0,289,374,1,78.8,378.65],[0,374,289,374,1,78.8,378.65],[289,374,289,374,1,78.8,378.65],[578,374,289,374,1,78.8,378.65],[867,374,289,374,1,78.8,378.65],[1156,374,289,374,1,78.8,378.65],[1445,374,289,374,1,78.8,378.65],[1734,374,289,374,1,78.8,378.65],[0,748,289,374,1,78.8,378.65],[289,748,289,374,1,78.8,378.65],[578,748,289,374,1,78.8,378.65],[867,748,289,374,1,78.8,378.65],[1156,748,289,374,1,78.8,378.65],[1445,748,289,374,1,78.8,378.65],[1734,748,289,374,1,78.8,378.65],[0,1122,289,374,1,78.8,378.65]
				],
				animations: { 
					fly: [0, 29],
					destroy: [30, 50]
				}
			});

			if (y == 250) {
				this.goalOffset = 150;
				this.maxMoveSpeed = 4;
			}

			this.balloon = new createjs.Sprite(data2, 'fly');
			initialAnimation = 'fly';
		}

		this.image = new createjs.Sprite(data, initialAnimation);

		this.image.x = x;//Math.random() * 100 + 700;
		this.image.y = y;//Math.random() * 400;

		this.height = 50;//this.image.getBounds().height;

		this.image.regX = 25;
		this.image.regY = 47;

		if (typeof this.balloon !== 'undefined') {
			this.balloon.x = this.image.x;
			this.balloon.y = this.image.y - 110;
			GJ.getStage().addChild(this.balloon);	
			this.balloon.gotoAndPlay('fly');	

			// console.log(this.image.y, this.balloon.y);
		}

		this.waitTimer = 0;
	} else {
		
	}

	this.ignoreBalloon = false;
	

	GJ.getStage().addChild(this.image);
};


Actor.prototype.update = function () {
	this.checkExploding();

	if (this.active) {
		this.doAI();
		this.applyVelocity();
		this.updateBalloon();
	} else {
		if (GJ.getPlayers()[0].hitTimer === 0 && this.image.currentAnimation !== 'explode') {
			this.image.x = 2000;
			this.image.y = 2000;
		}
	}


	if (this.hasBomb) {
		// console.log(this.image.currentAnimation);
	}
};

Actor.prototype.updateBalloon = function () {
	if (typeof this.balloon !== 'undefined' && this.balloon != null && this.ignoreBalloon !== true) {
		this.balloon.x = this.image.x + 15;//- this.image.getBounds().width / 2;
	}
};


Actor.prototype.checkExploding = function () {
	// if (typeof this.image.stopExploding !== 'undefined') {
	// 	this.image.removeEventListener('tick');
	// 	this.image.x = 2000;
	// 	this.image.y = 2000;
	// 	this.image.stopExploding = undefined;
	// 	this.kill();
	// 	GJ.getStage().removeChild(this.image);
	// }

	if (typeof this.image.checkBombCollision !== 'undefined') {
		// if (typeof actor !== 'undefined') {
			
			var intersection = ndgmr.checkRectCollision(this.image, GJ.getPlayers()[0].image);

			if (intersection) {

				if (this.hitTimer <= 0) {
					this.hitTimer = this.hitDelay;
					GJ.takeHit();
					GJ.Sound.triggerEvent("meow");

					if(this.image.x < GJ.getPlayers()[0].image.x) {
						this.accelX = -20;
					} else {
						this.accelX = 20;
					}
				}
			}

			var actors = GJ.getActors();
// console.log(actors);
			for (var i = 0; i < actors.length; i++) {
				// console.log(i);
				if (actors[i].active) {
					if (ndgmr.checkRectCollision(this.image, actors[i].image)) {
						actors[i].hitByBullet();
					}

				}
			}

		// }

		this.image.checkBombCollision = undefined;
	}

	if (typeof this.balloon !== 'undefined') {
		if (typeof this.balloon.removeBalloon !== 'undefined') {
			this.killBalloon();
		}
	}

	if (typeof this.image.setNotActive !== 'undefined') {
		this.active = false;
	}
};


Actor.prototype.killBalloon = function () {
	GJ.Sound.triggerEvent("pop");
			this.balloon.removeBalloon = undefined;
			this.ignoreBalloon = true;
			// this.balloon.x = 2000;
			// this.balloon.y = 2000;
			GJ.getStage().removeChild(this.balloon);
		};


Actor.prototype.doAI = function () {
	if (this.state === GJ.States.MOVING_LEFT) {

		if (this.hasBomb) {
			var players = GJ.getPlayers(), intersection;

			for (var i =0; i<players.length;i++) {
				intersection = ndgmr.checkRectCollision(this.image, players[i].getImage());

				if (intersection && this.image.currentAnimation !== 'explode') {
					// this.state = GJ.States.EXPLODING;
					// console.log('proximity detected!');
					this.doExplode();
				}
			}
		}

		if (this.image.x <= GJ.getCurrentWorld().getGoalX() - this.goalOffset) {			

			if (this.type === GJ.ActorTypes.FLYING_NORMAL) {
				this.useGravity = true;

				this.balloon.gotoAndPlay('destroy');

				this.balloon.addEventListener('animationend', function (event) {

					event.currentTarget.removeBalloon = true;
					event.currentTarget.x = 2000;
					event.currentTarget.y = 2000;
					event.remove();
				});

				this.state = GJ.States.LANDING;
			} else {
				this.state = GJ.States.STEALING;
				GJ.Sound.triggerEvent("pig_steal");
			}

		} else {
			this.moveLeft();
		}
	} else if (this.state === GJ.States.LANDING) {
		this.dampenAcceleration();

		if(this.image.y + this.accelY + this.height >= GJ.getCurrentWorld().getGroundHeight() ) {
			this.state = GJ.States.STEALING;
			GJ.Sound.triggerEvent("pig_steal");
			this.type = GJ.ActorTypes.GROUND_NORMAL;
		}

	} else if (this.state === GJ.States.STEALING) {
		this.waitTimer++;

		this.collect();

		if (this.waitTimer > this.waitDelay) {
			this.hasGem = true;
			this.hasBomb = false;
			this.state = GJ.States.LEGGING_IT;
			this.image.x += 30;
		}
	} else if (this.state === GJ.States.LEGGING_IT) {
		this.moveRight();

		if (this.image.x >= GJ.getStage().canvas.width + 50 && this.hasGem) {
			GJ.gentlemanStoleMyBike();
			this.kill();

			this.active = false;
			GJ.removeEnemy();
			
		
		}
	} else if (this.state === GJ.States.EXPLODING) {
		this.dampenAcceleration();

		if (this.image.currentAnimation !== 'explode') {
			this.doExplode();
		}
	}
};


Actor.prototype.doExplode = function () {


	if (this.image.currentAnimation !== 'explode') {

		// console.log('do explode');

		this.state = GJ.States.EXPLODING;
		this.image.gotoAndPlay('explode');

// console.log('added listening');

		this.image.addEventListener('tick', function (event) {
// console.log('tick');			
			// console.log(target.currentTarget.currentFrame);
// console.log('tick');	

			if (event.currentTarget.currentFrame == 190) {
				GJ.Sound.triggerEvent("explode");
// console.log('tick = 190');
// console.log(event.currentTarget.x, event.currentTarget.y);
				// var index = event.currentTarget.getChildIndex(event.currentTarget);

				var emitter;
					emitter = new createjs.ParticleEmitter(GJ.Assets.get('ParticleBacon'));
				    emitter.position = new createjs.Point(event.currentTarget.x + 10, event.currentTarget.y - 70);
				    emitter.emitterType = createjs.ParticleEmitterType.Emit;
				    emitter.duration = 55;	// how long emitter lasts for
				    emitter.emissionRate = 1000;
				    emitter.maxParticles = 1000;
				    emitter.life = 300;
				    emitter.lifeVar = 50;
				    emitter.speed = 550;
				    emitter.speedVar = 10;
				    emitter.positionVarX = 10;
				    emitter.positionVarY = 10;
				    emitter.accelerationX = 20;
				    emitter.accelerationY = 10;
				    emitter.radialAcceleration = 3;
				    emitter.radialAccelerationVar = 3;
				    emitter.tangentalAcceleration = 3;
				    emitter.tangentalAccelerationVar = 10;
				    emitter.angle = 5;
				    emitter.angleVar = 180;
				    emitter.startSpin = 0;
				    emitter.startSpinVar = 360;
				    emitter.endSpin = 10;
				    emitter.endSpinVar = 360;
				    emitter.startColor = [150, 150, 150];
				    emitter.startColorVar = [0, 0, 0];
				    emitter.startOpacity = 1;
				    emitter.endColor = null;
				    emitter.endColorVar = null;
				    emitter.endOpacity = 1;
				    emitter.startSize = 10;
				    emitter.startSizeVar = 0;
				    emitter.endSize = 10;
				    emitter.endSizeVar = 3;

					GJ.getStage().addChild(emitter);

					// createjs.setChild
			}

			if (event.currentTarget.currentFrame >= 224 /* && event.currentTarget.currentAnimation == 'explode'*/) {
// console.log('tick = 225');				
				event.remove();
				event.currentTarget.setNotActive = true;
				event.currentTarget.x = 2000;
			event.currentTarget.y = 2000;
			GJ.getStage().removeChild(event.currentTarget);
			}
			else if (event.currentTarget.currentFrame >= 190 /*&& event.currentTarget.currentAnimation == 'explode'*/) {
// console.log('tick >= 190');					
				event.currentTarget.checkBombCollision = true;

			}
		});

		this.image.addEventListener('animationend', function (event) {
// console.log('anim end');
			event.currentTarget.stopExploding = true;

			// event.currentTarget.x = 2000;
			// event.currentTarget.y = 2000;
			event.remove();
		});
		// console.log(this.image);
	}
};


Actor.prototype.applyVelocity = function () {

	if (this.useGravity) {
		this.accelY += GJ.getCurrentWorld().getGravity();
	}

	this.checkWorldCollision();

	this.image.x += this.accelX;
	this.image.y += this.accelY;
};


Actor.prototype.getImage = function () {
	return this.image;
};


Actor.prototype.throwBack = function () {

};


Actor.prototype.moveLeft = function () {
	// this.image.x -= this.moveSpeed;
	this.accelX -= this.moveSpeed;

	if (this.accelX < -this.maxMoveSpeed) {
		this.accelX = -this.maxMoveSpeed;
	}

	this.direction = GJ.Directions.LEFT;
	this.image.scaleX = -1;
// console.log(this.image.currentAnimation, this.hasBomb);
	if (this.image.currentAnimation !== 'run' && this.image.currentAnimation !== 'gemrun' && this.image.currentAnimation !== 'bombrun' && this.image.currentAnimation !== 'fly'  && this.image.currentAnimation != 'explode') {

		if (!this.useGravity) {
			this.image.gotoAndPlay('fly');
		}
		else if (this.hasGem) {
			this.image.gotoAndPlay('gemrun');
		} else if (this.hasBomb) {
			this.image.gotoAndPlay('bombrun');
		} else {
			this.image.gotoAndPlay('run');
			
		}
	}

};


Actor.prototype.moveRight = function () {
	// this.image.x += this.moveSpeed;
	this.accelX += this.moveSpeed;

	if (this.accelX > this.maxMoveSpeed) {
		this.accelX = this.maxMoveSpeed;
	}

	this.direction = GJ.Directions.RIGHT;

	this.image.scaleX = 1;

	if (this.image.currentAnimation !== 'run' && this.image.currentAnimation !== 'gemrun' && this.image.currentAnimation !== 'bombrun' && this.image.currentAnimation != 'explode') {

		if (this.hasGem) {
			this.image.gotoAndPlay('gemrun');
		} else if (this.hasBomb) {
			this.image.gotoAndPlay('bombrun');
		}  else {
			this.image.gotoAndPlay('run');
		}
	}

};

Actor.prototype.dampenAcceleration = function () {
	if (this.accelX > 0) {
		this.accelX -= this.weight;

		if (this.accelX < 0) {
			this.accelX = 0;
		}
	} else if (this.accelX < 0) {
		this.accelX += this.weight;

		if (this.accelX > 0) {
			this.accelX = 0;
		}
	}
};


Actor.prototype.collect = function () {
	if (this.accelX > 0) {
		this.accelX -= this.weight;

		if (this.accelX < 0) {
			this.accelX = 0;
		}
	} else if (this.accelX < 0) {
		this.accelX += this.weight;

		if (this.accelX > 0) {
			this.accelX = 0;
		}
	}

	if (this.image.currentAnimation !== 'collect') {
			this.image.gotoAndPlay('collect');
		}

	// this.image.gotoAndPlay('idle');
};


// Actor.prototype.spawnBacsplosion = function () {
// this.emitter = new createjs.ParticleEmitter(GJ.Assets.get('ParticleBacon'));
// 			    this.emitter.position = new createjs.Point(this.image.x, this.image.y);
// 			    this.emitter.emitterType = createjs.ParticleEmitterType.Emit;
// 			    this.emitter.duration = 500;	// how long emitter lasts for
// 			    this.emitter.emissionRate = 2000;
// 			    this.emitter.maxParticles = 2000;
// 			    this.emitter.life = 2000;
// 			    this.emitter.lifeVar = 500;
// 			    this.emitter.speed = 290;
// 			    this.emitter.speedVar = 5;
// 			    this.emitter.positionVarX = 5;
// 			    this.emitter.positionVarY = 5;
// 			    this.emitter.accelerationX = 3;
// 			    this.emitter.accelerationY = 3;
// 			    this.emitter.radialAcceleration = 0;
// 			    this.emitter.radialAccelerationVar = 0;
// 			    this.emitter.tangentalAcceleration = 0;
// 			    this.emitter.tangentalAccelerationVar = 10;
// 			    this.emitter.angle = 0;
// 			    this.emitter.angleVar = 180;
// 			    this.emitter.startSpin = 0;
// 			    this.emitter.startSpinVar = 0;
// 			    this.emitter.endSpin = 10;
// 			    this.emitter.endSpinVar = 1;
// 			    this.emitter.startColor = [150, 150, 150];
// 			    this.emitter.startColorVar = [0, 0, 0];
// 			    this.emitter.startOpacity = 1;
// 			    this.emitter.endColor = null;
// 			    this.emitter.endColorVar = null;
// 			    this.emitter.endOpacity = 0;
// 			    this.emitter.startSize = 10;
// 			    this.emitter.startSizeVar = 0;
// 			    this.emitter.endSize = 10;
// 			    this.emitter.endSizeVar = null;

// 				GJ.getStage().addChild(this.emitter);
// };


Actor.prototype.kill = function (explode) {
	
	var effect;

	if (typeof this.balloon !== 'undefined') {
		this.killBalloon();
	}

	if (this.type === GJ.ActorTypes.GROUND_NORMAL) {
		this.throwBack();

		if (this.image.x < GJ.getCurrentWorld().getWorldWidth()) {
			effect = new Effect(this.image.x, this.image.y, GJ.EffectTypes.EXPLOSION_SMALL, 0);
			GJ.Sound.triggerEvent("kill");
		}

		this.active = false;
		GJ.getStage().removeChild(this.image);

	} else if (this.type === GJ.ActorTypes.GROUND_EXPLODING) {
		// if (typeof explode !== 'undefined') {
			// this.spawnBacsplosion();
			// GJ.Sound.triggerEvent("kill"); // explode sound instead?
		
		// effect = new Effect(this.image.x, this.image.y, GJ.EffectTypes.EXPLOSION_SMALL, 0);

		GJ.Sound.triggerEvent("kill");

		if (this.image.x < GJ.getCurrentWorld().getWorldWidth()) {
			this.doExplode();
		}
		this.active = false;
		// }
		 
	} else if (this.type === GJ.ActorTypes.FLYING_NORMAL) {
		if (this.image.x < GJ.getCurrentWorld().getWorldWidth()) {
		GJ.Sound.triggerEvent("kill");
		effect = new Effect(this.image.x, this.image.y, GJ.EffectTypes.EXPLOSION_SMALL, 0);
		this.throwBack();
	}
		this.active = false;
		GJ.getStage().removeChild(this.image);
	}



	// this.image.x = 2000;
	// this.image.y = 2000;

    
};


Actor.prototype.hitByBullet = function () {
	if (this.image.currentAnimation !== 'explode');
	this.kill(true);
};


Actor.prototype.checkWorldCollision = function () {
	// var height = this.height;//this.image.getBounds().height / 2;

	if (this.image.y + this.accelY + this.height >= GJ.getCurrentWorld().getGroundHeight()) {
		this.image.y = GJ.getCurrentWorld().getGroundHeight() + this.height;
		this.accelY = 0;

		this.isOnGround = true;
	} else {
		this.isOnGround = false;
	}
};