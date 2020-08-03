class Enemy extends GameImage {
    constructor(game) {
        let type = randomBetween(0, 4)
        let name = 'enemy' + type
        super(game, name);
        this.setup()
    }

    setup() {
        this.speed = randomBetween(2, 5)
        this.x = randomBetween(0, 400)
        this.y = randomBetween(0, 100)
    }

    update() {
        this.y += this.speed
        if (this.y > 768) {
            this.setup()
        }
    }
    pengzhuang(player) {
        if((reactIntersects(this, player) || reactIntersects(player ,this))) {
            // 玩家与敌人碰撞后将当前的敌人重置位置
            var s = new SceneEnd(this.game)
            this.game.replaceScene(s)
            // this.setup()
        }
    }
}
