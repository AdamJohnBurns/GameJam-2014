var Gun = function (fireDelay, bulletSpeedX, bulletSpeedY, controller, offsetX, offetY) {
	this.bullets = [];
	this.fireDelay = fireDelay;
	this.fireTimer = 0;
	this.controller = controller;
	this.bulletSpeedX = bulletSpeedX;
	this.bulletSpeedY = bulletSpeedY;
	this.offsetX = offsetX;
	this.offetY = offetY;
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
			if (targets[i].active && this.bullets[j].active) {
				result = this.bullets[j].checkCollision(targets[i]);
	
				if (result) {
					this.bullets[j].kill();
					targets[i].hitByBullet();
					// hits.push(result);
				}
			}
		}
	}

	return hits;
};


Gun.prototype.fire = function () {
	var x, y, velX, velY;

	if (this.fireTimer <= 0) {
		// if (this.controller.direction === GJ.Directions.RIGHT) {
		// 	x = this.controller.image.x;// + this.controller.image.getBounds().width / 2 + this.offsetX;
		// } else {
		// }
			x = this.controller.image.x + this.offsetX;

		y = this.controller.image.y + this.offetY;

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