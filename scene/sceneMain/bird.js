class Bird extends Animation {
    constructor(game) {
        super(game)

        this.setUp()
    }

    setUp() {
        for (let i = 1; i < 4; i++) {
            const name = `bird${i}`
            const texture = this.game.textureByName(name)
            this.animations['idle'].push(texture)
        }

        this.texture = this.frames()[0]
        this.width = this.texture.width
        this.height = this.texture.height

        this.flipX = false
        this.rotation = 0
        this.accelerationY = 10
        this.velocityY = 0

        this.x = 100
        this.y = 300
        this.speed = 5
    }

    jump() {
        this.velocityY = -10
        this.rotation = -45
    }

    update() {
        this.y += this.velocityY
        this.velocityY += this.accelerationY * 0.1

        const h = 475
        if (this.y > h) {
            this.y = h
        }

        if (this.rotation < 45) {
            this.rotation += 5
        }

        this.frameCount -= 1
        if (this.frameCount === 0) {
            this.frameCount = 3
            this.frameIndex = (this.frameIndex + 1) % this.frames().length
            this.texture = this.frames()[this.frameIndex]
        }
    }

    draw() {
        const context = this.game.context

        context.save()

        const w = this.width / 2
        const h = this.height / 2
        
        context.translate(this.x + w, this.y + h)

        if (this.flipX) {
            context.scale(-1, 1)
        }
        
        context.rotate(this.rotation * Math.PI / 180)

        context.translate(-w, -h)

        context.drawImage(this.texture, 0, 0)

        context.restore()
    }

    move(x, keyState) {
        if (x < 0) {
            this.flipX = true
        } else if (x > 0)  {
            this.flipX = false
        }

        this.x += x
        // const animationState = {
        //     keydown: 'run',
        //     keyup: 'idle',
        // }

        // const state = animationState[keyState]

        // this.changeAnimation(state)
    }

    debug() {
        this.speed = config.bird_speed.value
    }
}
