class Particle extends GameImage {
    constructor(game) {
        super(game, 'fire')
        this.game = this.game

        this.setUp()
    }

    setUp() {
        this.life = 10
    }

    init(x, y, vx, vy) {
        this.x = x
        this.y = y
        this.vx = vx
        this.vy = vy
    }

    update() {
        this.life -= 1
        this.x += this.vx
        this.y += this.vy
        const factor = 0.05
        this.vx += factor*this.vx
        this.vy += factor*this.vy
    }
}

class ParticleSystem {
    constructor(game) {
        this.game = game

        this.setUp()
    }

    static new(game) {
        const i = new this(game)
        return i
    }

    setUp() {
        this.duration = 50
        this.x = 150
        this.y = 200
        this.numberOfParticles = 100
        this.particles = []
    }

    update() {
        this.duration -= 1
        if (this.particles.length < this.numberOfParticles) {
            const p = Particle.new(this.game)

            const s = 2
            const vx = randomBetween(-s, s)
            const vy = randomBetween(-s, s)
            p.init(this.x, this.y, vx, vy)
            this.particles.push(p)
        }
        
        for (const p of this.particles) {
            p.update()
        }

        this.particles = this.particles.filter((p) => {
            return p.life > 0
        })
    }

    draw() {
        for (const p of this.particles) {
            p.draw()
        }
    }
}
