class Animation {
    constructor(game) {
        this.game = game

        this.animations = {
            idle: [],
        }

        this.animationState = 'idle'

        this.frameIndex = 0
        this.frameCount = 3
    }

    static new(game) {
        return new this(game)
    }

    frames() {
        return this.animations[this.animationState]
    }

    update() {}

    draw() {}

    changeAnimation(state) {
        this.animationState = state
    }
}
