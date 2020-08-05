class Player extends GameImage {
    constructor(game) {
        super(game, 'player');
        this.setup()
    }
    setup() {
        this.speed = 10
        this.cooldown = 0
    }
    update() {
        this.speed = config.player_speed
        if (this.cooldown > 0) {
            this.cooldown--
        }
        // 下面这个是判断玩家和敌人子弹碰撞的函数
        for (let i = 0; i < this.scene.enemiesBullet.length; i++) {
            let e = this.scene.enemiesBullet[i]
            if (reactIntersects(this, e) || reactIntersects(e ,this)) {
                // 玩家与敌人碰撞后进入结束画面
                var s = new SceneEnd(this.game)
                this.game.replaceScene(s)
            }
        }
    }
    fire() {
        if (this.cooldown === 0) {
            this.cooldown = config.fire_cooldown
            var b = new Bullet(this.game)
            var x = this.x + this.w / 2 - b.w / 2
            var y = this.y
            b.x = x
            b.y = y
            console.log('this.scene player', this.scene)
            this.scene.addElement(b)
        }
    }
    moveLeft() {
        this.x -= this.speed
        if (this.x < 0) {
            this.x = 0
        }
    }
    moveRight() {
        this.x += this.speed
        if (this.x > 512 - this.w) {
            this.x = 512 - this.w
        }
    }
    moveUp() {
        this.y -= this.speed
        if (this.y < 0) {
            this.y = 0
        }
    }
    moveDown() {
        this.y += this.speed
        if (this.y > 768 - this.h) {
            this.y = 768 - this.h
        }
    }

}
