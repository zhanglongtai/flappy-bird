class Lands {
    constructor(game) {
        this.game = game

        this.setUp()
    }

    static new(game) {
        return new this(game)
    }

    setUp() {
        this.landList = []
        for (let i = 0; i < 5; i++) {
            const l = GameImage.new(this.game, 'land')
            l.x = i * 336
            l.y = 500
            this.landList.push(l)
        }

        this.skipCount = 4
    }

    update() {
        // land forward
        let offset = -5
        this.skipCount -= 1
        if (this.skipCount === 0) {
            this.skipCount = 4
            offset = 15
        }
        for (let i = 0; i < 5; i++) {
            const l = this.landList[i]
            l.x += offset
        }
    }

    draw() {
        for (const l of this.landList) {
            const context = this.game.context
            context.drawImage(l.texture, l.x, l.y)
        }
    }
}
