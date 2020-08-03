class GameScene {
    constructor(game) {
        this.game = game
        this.elements = []
        this.enemies= []
    }
    static new(game) {
        var i = new this(game)
        return i
    }
    addElement(img) {
        img.scene = this
        this.elements.push(img)
    }
    addEnemiesElement(img) {
        img.scene = this
        this.enemies.push(img)
    }
    pengzhuang_scene(img) {
        for (let i = 0; i < this.enemies.length; i++) {
            let e = this.enemies[i]
            if (reactIntersects(img, e) || reactIntersects(e ,img)) {
                // 找到当前子弹在 elements 里面的位置
                let i = this.elements.indexOf(img)
                // 删除碰撞后的子弹
                this.elements.splice(i, 1)
                // 增加碰撞后的粒子特效
                let x = e.x
                let y = e.y
                let f = new GameParticleSystem(this.game)
                f.x = x
                f.y = y
                f.life = 5000
                this.addElement(f)
                e.setup()
            }
        }
    }
    draw() {
        for (let i = 0; i < this.elements.length; i++) {
            let e = this.elements[i]
            // this.game.drawImage(e)
            e.draw()
        }
        for (let i = 0; i < this.enemies.length; i++) {
            let e = this.enemies[i]
            e.draw()
        }
    }
    update() {
        for (let i = 0; i < this.elements.length; i++) {
            let e = this.elements[i]
            e.update()
        }
        for (let i = 0; i < this.enemies.length; i++) {
            let e = this.enemies[i]
            e.update()
        }
    }
}