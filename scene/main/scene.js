const config = {
    player_speed: 10,
    cloud_speed: 1,
    enemy_speed: 5,
    bullet_speed: 5,
    fire_cooldown: 9,
}
class Bullet extends GameImage{
    constructor(game) {
        super(game, 'bullet');
        this.setup()
    }
    setup() {
        // 放在这里可以动态实时的改变子弹的速度
        this.speed = config.bullet_speed
    }
    update() {
        this.y -= this.speed
    }
}

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
    }
    moveRight() {
        this.x += this.speed
    }
    moveUp() {
        this.y -= this.speed
    }
    moveDown() {
        this.y += this.speed
    }

}
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
class Enemy extends GameImage {
    constructor(game) {
        let type = randomBetween(0, 4)
        log('type is', type)
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
}

class Scene extends GameScene {
    constructor(game) {
        super(game);
        this.setup()
        this.setupInputs()
    }
    setup() {
        var game = this.game
        this.bg = new GameImage(game, 'sky')
        this.numberOfEnemies = 10
        this.player = new Player(game)
        this.cloud = new Cloud(game, 'cloud')
        this.player.x = 180
        this.player.y = 600
        this.addElement(this.bg)
        this.addElement(this.cloud)
        this.addElement(this.player)
        this.addEnemies()
    }
    addEnemies() {
        let es = []
        log('numberOfEnemies is', this.numberOfEnemies)
        for (let i = 0; i < this.numberOfEnemies; i++) {
            let e = new Enemy(this.game)
            es.push(e)
            this.addElement(e)
        }
        this.enemies= es
    }
    setupInputs() {
        let g = this.game
        let s = this
        g.registerAction('a', function() {
            s.player.moveLeft()
        })
        g.registerAction('d', function() {
            s.player.moveRight()
        })
        g.registerAction('w', function() {
            s.player.moveUp()
        })
        g.registerAction('s', function() {
            s.player.moveDown()
        })
        g.registerAction('j', function() {
            s.player.fire()
        })
    }
    update() {
        super.update()
        this.cloud.y += 1
        if (this.cloud.y > 768) {
            this.cloud.y = -50
        }
   }
}
