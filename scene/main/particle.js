class GameParticle extends GameImage{
    constructor(game) {
        super(game, 'fire');
        this.setup()
    }
    setup() {
        this.life = 10 // 一秒钟消失
    }
    init(x, y, vx, vy) {
        this.x = x
        this.y = y
        this.vx = vx
        this.vy= vy
    }
    update() {
        this.x += this.vx
        this.y += this.vy
        let factor = 0.02
        //加速度 factor 为系数
        this.vx += factor * this.vx
        this.vy += factor * this.vy
        this.life --
    }
    draw() {
        this.game.drawImage(this)
    }
}
class GameParticleSystem {
    constructor(game) {
        this.game = game
        this.setup()
    }
    static new(game) {
        return new this(game)
    }
    setup() {
        this.duration = 50
        // this.x = 150
        // this.y = 200
        this.numberOfparticles = 100
        this.particles = []
    }
    update() {
        this.duration--
        // 添加小火花
        if (this.particles.length < this.numberOfparticles) {
            let p = GameParticle.new(this.game)
            //设置初始化坐标
            let s = 2 // speed
            let vx = randomBetween(-s, s)
            let vy = randomBetween(-s, s)
            p.init(this.x, this.y, vx, vy)
            this.particles.push(p)
        }
        // 更新所有的小火花
        for (let i = 0; i < this.particles.length; i++) {
            let p = this.particles[i]
            p.update()
        }
        // 删除死掉的火花
        this.particles = this.particles.filter(p => p.life > 0)
    }
    draw() {
        if (this.duration < 0) {
            // 这里应该从scene中删除自己才对 这是一个临时的方案
            return
        }
        for (let i = 0; i < this.particles.length; i++) {
            let p = this.particles[i]
            p.draw()
        }

    }
}