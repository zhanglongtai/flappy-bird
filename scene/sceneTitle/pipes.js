class Pipes {
    constructor(game) {
        this.game = game

        this.pipes = []
        this.pipeSpace = 150
        this.pipeInterval = 200
        this.columnsOfPipes = 5
        for (let i = 0; i < this.columnsOfPipes; i++) {
            const pUp = GameImage.new(game, 'pipeUp')
            pUp.height = pUp.texture.height
            pUp.x = 500 + this.pipeSpace * i
            
            const pDown = GameImage.new(game, 'pipeDown')
            pDown.x = pUp.x

            this.resetPipePosition(pUp, pDown)

            this.pipes.push(pUp, pDown)
        }
    }

    static new(game) {
        return new this(game)
    }

    resetPipePosition(pUp, pDown) {
        pUp.y = randomBetween(-10, 0)
        pDown.y = pUp.y + this.pipeInterval + pUp.height
    }

    draw() {
        for (const p of this.pipes) {
            const context = this.game.context
            context.drawImage(p.texture, p.x, p.y)
        }
    }

    update() {
        for (let i = 0; i < this.pipes.length; i += 2) {
            const pipeUp = this.pipes[i]
            const pipeDown = this.pipes[i + 1]
            
            pipeUp.x -= 5
            pipeDown.x -= 5

            if (pipeUp.x < -100) {
                pipeUp.x += this.pipeSpace * this.columnsOfPipes
                pipeDown.x = pipeUp.x

                this.resetPipePosition(pipeUp, pipeDown)
            }
        }
    }

    debug() {
        this.pipeInterval = config.pipe_interval.value
        this.pipeSpace = config.pipe_space.value
    }
}
