var Gun = function (fireDelay, bulletSpeedX, bulletSpeedY, controller) {
	this.bullets = [];
	this.fireDelay = fireDelay;
	this.fireTimer = 0;
	this.controller = controller;
	this.bulletSpeedX = bulletSpeedX;
	this.bulletSpeedY = bulletSpeedY;
};


Gun.prototype.update = function () {
	var i;

	if (this.fireTimer > 0) {
		this.fireTimer--;
	}

	for (i = 0; i < this.bullets.length; i++) {
		this.bullets[i].update();
	}
};


Gun.prototype.checkBulletCollisions = function (targets) {
	var i, j, result,
		hits = []; 

	for (i = 0; i < targets.length; i++) {
		for (j = 0; j < this.bullets.length; j++) {
			result = this.bullets[j].checkCollision(targets[i]);

			if (result) {
				hits.push(result);
			}
		}
	}

	return hits;
};


Gun.prototype.fire = function () {
	var x, y, velX, velY;

	if (this.fireTimer <= 0) {
		x = this.controller.image.x;
		y = this.controller.image.y;
		velX = this.bulletSpeedX;
		velY = this.bulletSpeedY;

		if (this.controller.direction === GJ.Directions.LEFT) {
			velX = -velX;
			x -= this.controller.image.getBounds().width / 2;
		} else {
			x += this.controller.image.getBounds().width / 2;
		}

		this.bullets.push(new Bullet(x, y, velX, velY));
		this.fireTimer = this.fireDelay;
	}
};