class SceneMain extends Scene {
    constructor(game) {
        super(game)

        this.setUp()
        this.setInputs()
    }

    setUp() {
        // this.sky = GameImage.new(this.game, 'sky')
        this.skys = Skys.new(this.game)
        this.addElement(this.skys)

        this.pipes = Pipes.new(this.game)
        this.addElement(this.pipes)

        this.lands = Lands.new(this.game)
        this.addElement(this.lands)

        this.bird = Bird.new(this.game)
        this.addElement(this.bird)
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

        // game over
        for (const p of this.pipes.pipeList) {
            if (this.pipes.collide(p, this.bird)) {
                const sceneEnd = SceneEnd.new(this.game)
                this.game.replaceScene(sceneEnd)
            }
        }
    }

    debug() {}
}
