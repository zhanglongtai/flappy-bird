class Player extends GameImage {
    constructor(game) {
        super(game, 'player')

        this.setUp()
    }

    setUp() {
        this.speed = 10
        this.cooldown = 0
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

    fire() {
        if (this.cooldown === 0) {
            this.cooldown = 9

            const x = this.x + this.width / 2
            const y = this.y
            const b = Bullet.new(this.game)
            b.x = x
            b.y = y

            this.scene.addElement(b)
        }
        
    }

    update() {
        this.speed = config.player_speed
        if (this.cooldown > 0) {
            this.cooldown -= 1
        }
    }
}
