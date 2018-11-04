class SceneMain extends Scene {
    constructor(game) {
        super(game)

        this.setup()
        this.setupInputs()

        this.score = 0
        this.dragging = false

        // this.game.registerAction('ArrowLeft', () => {
        //     this.paddle.moveLeft()
        // })
    
        // this.game.registerAction('ArrowRight', () => {
        //     this.paddle.moveRight()
        // })
    
        // this.game.registerAction('f', () => {
        //     this.ball.fire()
        // })

        // this.game.canvas.addEventListener('mousedown', (event) => {
        //     const x = event.offsetX
        //     const y = event.offsetY
        //     if (this.ball.hasPoint(x, y)) {
        //         this.dragging = true
        //     }
        // })

        // this.game.canvas.addEventListener('mousemove', (event) => {
        //     const x = event.offsetX
        //     const y = event.offsetY
        //     if (this.dragging) {
        //         this.ball.x = x
        //         this.ball.y = y
        //     }
        // })

        // this.game.canvas.addEventListener('mouseup', (event) => {
        //     this.dragging = false
        // })
    }

    setup() {
        this.background = GameImage.new(this.game, 'sky')
        this.cloud = Cloud.new(this.game, 'cloud')
        this.player = Player.new(this.game)
        this.player.x = 100
        this.player.y = 150

        this.enemyNum = 10
        this.enemies = []

        this.addElement(this.background)
        this.addElement(this.player)
        this.addElement(this.cloud)

        this.addEnemies()

        const particleSystem = ParticleSystem.new(this.game)
        this.addElement(particleSystem)
    }

    addEnemies() {
        const es = []
        for (let i = 0; i < this.enemyNum; i++) {
            const e = Enemy.new(this.game)
            es.push(e)
            this.addElement(e)
        }

        this.enemies = es
    }

    setupInputs() {
        const g = this.game
        const s = this

        this.game.registerAction('ArrowLeft', () => {
            this.player.moveLeft()
        })
    
        this.game.registerAction('ArrowRight', () => {
            this.player.moveRight()
        })
    
        this.game.registerAction('ArrowUp', () => {
            this.player.moveUp()
        })

        this.game.registerAction('ArrowDown', () => {
            this.player.moveDown()
        })

        this.game.registerAction(' ', () => {
            this.player.fire()
        })
    }

    // update() {
    //     if (window.paused) {
    //         return
    //     }

    //     for (const e of this.enemies) {
    //         e.update()
    //     }
    // }
}
