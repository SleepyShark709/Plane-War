const log = console.log.bind(console)

const imageFromPath = (path) => {
    let img = new Image()
    img.src = path
    return img
}
const reactIntersects = (a, b) => {
    if (b.y > a.y && b.y < a.y + a.h && b.x > a.x && b.x < a.x + a.w) {
        return true
    } else {
        return false
    }
}

const randomBetween = (start, end) => {
    let n = Math.random() * (end - start + 1)
    return Math.floor(n + start)
}
const config = {
    player_speed: 10,
    cloud_speed: 1,
    enemy_speed: 5,
    bullet_speed: 5,
    fire_cooldown: 9,
}