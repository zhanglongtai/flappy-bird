class Bullet extends GameImage {
    constructor(game) {
        super(game, 'bullet')

        this.setUp()
    }

    setUp() {
        this.speed = 5
    }

    update() {
        this.speed = config.bullet_speed
        this.y -= this.speed
    }
}
