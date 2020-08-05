const __main = () => {
    // 这个地方是加了一个滑动条来控制帧率
    let input = document.querySelector('#id-input-speed')
    input.addEventListener('input', (event) => {
        let input = event.target
        window.fps = Number(input.value)
    })
    var images = {
        bullet: 'image/bullet.png',
        cloud: 'image/cloud.png',
        player: 'image/player.png',
        sky: 'image/sky.png',
        enemy0: 'image/enemy0.png',
        enemy1: 'image/enemy1.png',
        enemy2: 'image/enemy2.png',
        enemy3: 'image/enemy3.png',
        enemy4: 'image/enemy4.png',
        fire: 'image/fire.png',
    }

    var game = new Game(50, images, function(g) {
        var s = SceneTitle.new(g)
        g.runWithScene(s)
    })
}
__main()
