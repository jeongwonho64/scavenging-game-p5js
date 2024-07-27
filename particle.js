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

	}
}