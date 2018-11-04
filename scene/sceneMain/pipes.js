class Pipes {
    constructor(game) {
        this.game = game

        this.setUp()
    }

    static new(game) {
        return new this(game)
    }

    setUp() {
        this.pipeList = []
        this.pipeSpace = 150
        this.pipeInterval = 200
        this.columnsOfPipes = 5
        for (let i = 0; i < this.columnsOfPipes; i++) {
            const pUp = GameImage.new(this.game, 'pipeUp')
            pUp.height = pUp.texture.height
            pUp.x = 500 + this.pipeSpace * i
            
            const pDown = GameImage.new(this.game, 'pipeDown')
            pDown.x = pUp.x

            this.resetPipePosition(pUp, pDown)

            this.pipeList.push(pUp, pDown)
        }
    }

    resetPipePosition(pUp, pDown) {
        pUp.y = randomBetween(-10, 0)
        pDown.y = pUp.y + this.pipeInterval + pUp.height
    }

    draw() {
        for (const p of this.pipeList) {
            const context = this.game.context
            context.drawImage(p.texture, p.x, p.y)
        }
    }

    update() {
        for (let i = 0; i < this.pipeList.length; i += 2) {
            const pipeUp = this.pipeList[i]
            const pipeDown = this.pipeList[i + 1]
            
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

    aInb(x, x1, x2) {
        return x >= x1 && x <= x2
    }

    collide(pipe, bird) {
        // return rectIntersects(o, ball) || rectIntersects(ball, o)
        const aInb = this.aInb
        const a = pipe
        const b = bird
        if (aInb(a.x, b.x, b.x + b.width) || aInb(b.x, a.x, a.x + a.width)) {
            if (aInb(a.y, b.y, b.y + b.height) || aInb(b.y, a.y, a.y + a.height)) {
                return true
            }
        }
        return false
    }
}
