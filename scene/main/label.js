class GameLabel {
    constructor(game, text, x, y) {
        this.game = game
        this.text = text
        this.x = x
        this.y = y
    }
    static new(game, text) {
        return new this(game, text)
    }
    draw() {
        this.game.context.font = "20px serif";
        this.game.context.fillText(this.text, this.x, this.y)
    }
    update() {

    }
}
