class Label {
    constructor(game, text) {
        this.game = game
        this.text = text
    }

    static new(game, text) {
        const i = new this(game, text)
        return i
    }

    draw() {
        this.game.context.fillText(this.text, 150, 120)
    }

    update() {}
}
