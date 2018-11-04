class Label {
    constructor(game, text, x, y) {
        this.game = game
        this.text = text
        this.x = x
        this.y = y
    }

    static new(game, text, x, y) {
        const i = new this(game, text, x, y)
        return i
    }

    draw() {
        this.game.context.font = '20px Arial'
        this.game.context.fillStyle = "black"
        this.game.context.fillText(this.text, this.x, this.y)
    }

    update() {}
}
