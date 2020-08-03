class SceneTitle extends GameScene{
    constructor(game) {
        super(game);
        let label = new GameLabel(game, '欢迎进入游戏，按K开始游戏', 100, 190)
        this.addElement(label)
        game.registerAction('k', (event) => {
            var s = new Scene(game)
            game.replaceScene(s)
        })
        // let ps = new GameParticleSystem(game)
        // this.addElement(ps)
    }
}
