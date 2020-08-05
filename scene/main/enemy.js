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
    // fire是增加敌人的子弹
    fire() {
        let b = new EnemiesBullet(this.game)
        var x = this.x + this.w / 2 - b.w / 2
        var y = this.y
        b.x = x
        b.y = y
        this.scene.addEnemiesBullet(b)
    }
    update() {
        this.y += this.speed
        if (this.y > 768) {
            this.setup()
            this.fire()
        }
    }
    pengzhuang(player) {
        if((reactIntersects(this, player) || reactIntersects(player ,this))) {
            // 玩家与敌人碰撞后进入结束画面
            var s = new SceneEnd(this.game)
            this.game.replaceScene(s)
        }
    }
}
