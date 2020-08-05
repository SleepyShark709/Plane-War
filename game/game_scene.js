class GameScene {
    constructor(game) {
        this.game = game
        this.elements = []
        this.enemies= []
        this.enemiesBullet = []
    }
    static new(game) {
        var i = new this(game)
        return i
    }
    // 背景 玩家等加入到数组中
    addElement(img) {
        img.scene = this
        this.elements.push(img)
    }
    // 将敌人加入到数组中
    addEnemiesElement(img) {
        img.scene = this
        this.enemies.push(img)
    }
    // 将敌人的子弹加入到数组中
    addEnemiesBullet(img) {
        img.scene = this
        this.enemiesBullet.push(img)
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
                e.fire()
            }
        }
    }
    draw() {
        // 画了三样东西
        // 1、背景 玩家等
        // 2、敌人
        // 3、敌人的子弹
        for (let i = 0; i < this.elements.length; i++) {
            let e = this.elements[i]
            // this.game.drawImage(e)
            e.draw()
        }
        for (let i = 0; i < this.enemies.length; i++) {
            let e = this.enemies[i]
            e.draw()
        }
        for (let i = 0; i < this.enemiesBullet.length; i++) {
            let e = this.enemiesBullet[i]
            e.draw()
        }
    }
    update() {
        // 更新了三样东西
        // 1、背景 敌人 玩家等
        // 2、玩家的子弹
        // 3、敌人的子弹
        for (let i = 0; i < this.elements.length; i++) {
            let e = this.elements[i]
            e.update()
        }
        for (let i = 0; i < this.enemies.length; i++) {
            let e = this.enemies[i]
            e.update()
        }
        for (let i = 0; i < this.enemiesBullet.length; i++) {
            let e = this.enemiesBullet[i]
            e.update()
        }
    }
}