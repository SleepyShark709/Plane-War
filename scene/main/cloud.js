class Cloud extends GameImage {
    constructor(game) {
        super(game, 'cloud');
        this.setup()
    }
    setup() {
        this.speed = 1
        this.x = randomBetween(0, 400)
        this.y = -randomBetween(0, 100)
    }
    update() {
        this.speed = config.cloud_speed
        this.y += this.speed
        if (this.y > 768) {
            this.setup()
        }
    }
}
