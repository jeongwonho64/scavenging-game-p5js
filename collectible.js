class Collectible {
    constructor(x, y, s) {
        this.pos = createVector(x, y)
        this.show = false
        this.siz = s
        this.lines = [new Wall((this.pos.x - (this.siz / 2)), (this.pos.y - (this.siz / 2)), (this.pos.x - (this.siz / 2)), (this.pos.y + (this.siz / 2))), new Wall((this.pos.x + (this.siz / 2)), (this.pos.y + (this.siz / 2)), (this.pos.x - (this.siz / 2)), (this.pos.y + (this.siz / 2))), new Wall((this.pos.x + (this.siz / 2)), (this.pos.y - (this.siz / 2)), (this.pos.x + (this.siz / 2)), (this.pos.y + (this.siz / 2))), new Wall((this.pos.x - (this.siz / 2)), (this.pos.y - (this.siz / 2)), (this.pos.x + (this.siz / 2)), (this.pos.y - (this.siz / 2)))]
        this.col = [floor(random(0, 255)), floor(random(0, 255)), floor(random(0, 255))]
    }

    display() {
        push()
        if (this.show == true) {
            fill(this.col[random([0, 1, 2])], this.col[random([0, 1, 2])], this.col[random([0, 1, 2])])
        } else {
            fill('black')
        }
        noStroke()
        rectMode(CENTER)
        square(this.pos.x, this.pos.y, this.siz)
        pop()
    }
}