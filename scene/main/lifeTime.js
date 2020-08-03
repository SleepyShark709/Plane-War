class lifeTime {
    constructor(game, x, y, time) {
        this.game = game
        this.time = time
        this.x = x
        this.y = y
    }
    static new(game, text) {
        return new this(game, text)
    }
    draw() {
        this.game.context.font = "20px serif";
        this.game.context.fillText(`您已坚持${parseInt(this.time / 60)}秒`,  this.x, this.y)
    }
    update() {
        this.time += 1
        this.draw()
    }
}
