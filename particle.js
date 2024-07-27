class Particle {
	constructor(x, y, [r, g, b]) {
		this.pos = createVector(x, y)
		this.field = [250, 290]
		this.vel = createVector(1, 0)
		this.angle = PI * 3 / 2
		this.col = [r, g, b]
		this.pt = []
		this.count = []
		this.score = 0
		this.rad = windowHeight / 40
		this.opa = 240
	}

	rCount(colz) {
		for (let j of colz) {
			this.count.push(0)
		}
	}

	dim() {
		this.opa = map(this.score, 0, 10, 240, 0)
	}

	// Generate rays for the field of view
	lookAt(walls, coll, colz) {
		this.count = []
		for (let j of colz) {
			this.count.push(0)
		}
		const rays = [];
		for (let a = this.field[0]; a <= this.field[1]; a += 1) {
			const ray = new Ray(this.pos.x, this.pos.y, a);
			let closest = null;
			let record = Infinity;

			for (let wall = 0; wall < walls.length; wall++) {
				const pt = ray.cast(walls[wall]);
				if (pt) {
					const d = dist(this.pos.x, this.pos.y, pt.x, pt.y);
					if (d < record) {
						for (let i = 0; i < colz.length; i++) {

							if (wall >= walls.length - (i + 1) * 4 && wall < walls.length - (i) * 4) {



								this.count[i]++
							} else {
								this.count[i] += 0
							}
						}
						record = d;
						closest = pt;
					}
				}
			}
			if (closest) {
				line(this.pos.x, this.pos.y, closest.x, closest.y);
			}


			for (let j = 0; j < this.count.length; j++) {
				if (this.count[j] > 0) {

					colz[colz.length - 1 - j].show = true
				} else {
					colz[colz.length - 1 - j].show = false
				}
			}
			rays.push(ray);
		}
		return rays;
	}



	show(walls, collectible, store) {
		push()
		// Display the rays
		this.dim()
		print(this.opa)
		stroke(this.col[0], this.col[1], this.col[2], this.opa);
		for (let ray of this.lookAt(walls, collectible, store)) {
			line(this.pos.x, this.pos.y, ray.pos.x, ray.pos.y);
		}
		noStroke()
		fill('snow')
		circle(this.pos.x, this.pos.y, this.rad)
		pop()
	}

	//move object
	move(z) {
		this.vel = p5.Vector.fromAngle(this.angle)
		if (z == 0) {
			this.pos.add(this.vel)
		} else if (z == 1) {
			this.angle += PI / 180
			for (let ang = 0; ang < this.field.length; ang++) {
				this.field[ang] += 1
			}
		} else if (z == 2) {
			this.pos.sub(this.vel)
		} else if (z == 3) {
			this.angle -= PI / 180
			for (let ang = 0; ang < this.field.length; ang++) {
				this.field[ang] -= 1
			}
		}

		if (this.pos.x > windowWidth - this.rad / 2) {
			this.pos.x = windowWidth - this.rad / 2
		}

		if (this.pos.y > windowHeight - this.rad / 2) {
			this.pos.y = windowHeight - this.rad / 2
		}

		if (this.pos.x < this.rad / 2) {
			this.pos.x = this.rad / 2
		}

		if (this.pos.y < this.rad / 2) {
			this.pos.y = this.rad / 2
		}
	}

	take(collectibles) {

		for (let c = collectibles.length - 1; c >= 0; c--) {
			if (this.pos.x > (collectibles[c].pos.x - collectibles[c].siz / 2) && this.pos.x < (collectibles[c].pos.x + collectibles[c].siz / 2) && this.pos.y > (collectibles[c].pos.y - collectibles[c].siz / 2) && this.pos.y < (collectibles[c].pos.y + collectibles[c].siz / 2)) {
				collectibles.splice(c, 1)
				this.score++
			}
		}
		return collectibles
	}
	reset(x, y, [r, g, b]) {
		this.pos = createVector(x, y)
		this.field = [250, 290]
		this.vel = createVector(1, 0)
		this.angle = PI * 3 / 2
		this.col = [r, g, b]
		this.pt = []
		this.count = []
		this.score = 0
	}
}