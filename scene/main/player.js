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
    }
    fire() {
        if (this.cooldown === 0) {
            this.cooldown = config.fire_cooldown
            var b = new Bullet(this.game)
            var x = this.x + this.w / 2 - b.w / 2
            var y = this.y
            b.x = x
            b.y = y
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
