class SceneTitle extends Scene {
    constructor(game) {
        super(game)

        this.sky = GameImage.new(this.game, 'sky')
        this.addElement(this.sky)

        this.pipes = Pipes.new(this.game)
        this.addElement(this.pipes)

        this.landList = []
        for (let i = 0; i < 5; i++) {
            const l = GameImage.new(this.game, 'land')
            l.x = i * 336
            l.y = 500
            this.addElement(l)
            this.landList.push(l)
        }

        this.skipCount = 4

        this.bird = Animation.new(this.game)
        this.bird.x = 100
        this.bird.y = 300
        this.bird.speed = 5
        this.addElement(this.bird)

        this.setInputs()
    }

    setInputs() {
        const bird = this.bird

        this.game.registerAction('ArrowLeft', (keyState) => {
            bird.move(-bird.speed, keyState)
        })

        this.game.registerAction('ArrowRight', (keyState) => {
            bird.move(bird.speed, keyState)
        })

        this.game.registerAction('ArrowUp', (keyState) => {
            bird.jump()
        })
    }

    update() {
        super.update()
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

    debug() {
        log('run debug', config.bird_speed.value)
        this.bird.speed = config.bird_speed.value
    }
}
