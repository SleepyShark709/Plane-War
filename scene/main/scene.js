class Scene extends GameScene {
    constructor(game) {
        super(game);
        this.setup()
        this.setupInputs()
    }
    setup() {
        var game = this.game
        this.bg = new GameImage(game, 'sky')
        this.numberOfEnemies = 5
        this.player = new Player(game)
        this.cloud = new Cloud(game, 'cloud')
        this.player.x = 180
        this.player.y = 600
        game.context.fillStyle = 'white'
        this.label = new lifeTime(game, 30, 700, 0)
        this.addElement(this.bg)
        this.addElement(this.cloud)
        this.addElement(this.player)
        this.addEnemies()
        // add time
        this.addElement(this.label)
    }
    addEnemies() {
        let es = []
        log('numberOfEnemies is', this.numberOfEnemies)
        for (let i = 0; i < this.numberOfEnemies; i++) {
            let e = new Enemy(this.game)
            es.push(e)
            this.addEnemiesElement(e)
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
        this.label.time += 1
        this.cloud.y += 1
        if (this.cloud.y > 768) {
            this.cloud.y = -50
        }
        for (let i = 0; i < this.enemies.length; i++) {
            let e = this.enemies[i]
            e.pengzhuang(this.player)
        }
   }
}
