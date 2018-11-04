class Scene {
    constructor(game, ...args) {
        this.game = game
        this.debugModeEnabled = true

        this.elements = []
    }

    static new(game, ...args) {
        const i = new this(game, ...args)
        return i
    }

    addElement(element) {
        element.scene = this
        this.elements.push(element)
    }

    draw() {
        for (const e of this.elements) {
            // this.game.drawImage(e)
            e.draw()
        }
    }

    update() {
        if (this.debugModeEnabled) {
            // scene
            this.debug && this.debug()
            // elements
            for (const e of this.elements) {
                e.update()
                e.debug && e.debug()
            }
        } else {
            for (const e of this.elements) {
                e.update()
            }
        }
    }
}
