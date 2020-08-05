class SceneEnd extends GameScene{
    constructor(game) {
        super(game);
        game.context.fillStyle = 'black'
        let label = new GameLabel(game, '游戏结束，按R重新进入标题画面', 100, 190)
        this.addElement(label)
        game.registerAction('r', (event) => {
            var s = new SceneTitle(game)
            game.replaceScene(s)
        })
    }
}