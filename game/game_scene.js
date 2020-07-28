class GameScene {
    constructor(game) {
        this.game = game
        this.elements = []
    }
    static new(game) {
        var i = new this(game)
        return i
    }
    addElement(img) {
        this.elements.push(img)
    }
    draw() {
        for (let i = 0; i < this.elements.length; i++) {
            let e = this.elements[i]
            this.game.drawImage(e)
        }
    }
    update() {

    }
}