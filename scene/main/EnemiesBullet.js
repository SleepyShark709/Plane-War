class EnemiesBullet extends GameImage{
    constructor(game) {
        super(game, 'bullet2');
        this.setup()
    }
    setup() {
        // 放在这里可以动态实时的改变子弹的速度
        this.speed = config.bullet_speed
    }
    update() {
        this.y += this.speed
        // this.scene.pengzhuang_scene(this)
    }
}