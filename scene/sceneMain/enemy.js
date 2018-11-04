class Enemy extends GameImage {
    constructor(game) {
        const enemyIndex = randomBetween(0, 4)
        const enemyType = `enemy${enemyIndex}`
        super(game, enemyType)

        this.setUp()
    }

    setUp() {
        this.speed = randomBetween(2, 5)
        this.x = randomBetween(0, 350)
        this.y = -randomBetween(0, 200)
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

    update() {
        this.speed = config.enemy_speed
        this.y += this.speed

        if (this.y > 600) {
            this.setUp()
        }
    }
}
