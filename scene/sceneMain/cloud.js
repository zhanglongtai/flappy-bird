class Cloud extends GameImage {
    constructor(game) {
        super(game, 'cloud')

        this.setUp()
    }

    setUp() {
        this.speed = 1
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
       
        this.y += this.speed

        if (this.y > 600) {
            this.setUp()
        }
    }

    debug() {
        this.speed = config.cloud_speed
    }
}
