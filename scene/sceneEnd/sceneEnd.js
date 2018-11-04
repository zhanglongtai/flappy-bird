class SceneEnd extends Scene {
    constructor(game) {
        super(game)

        this.setUp()
        this.setInput()
    }

    setUp() {
        this.skys = Skys.new(this.game)
        this.skys.update = () => {}
        this.addElement(this.skys)

        this.lands = Lands.new(this.game)
        this.lands.update = () => {}
        this.addElement(this.lands)

        this.text1 = Label.new(this.game, 'Game over', 150, 180)
        this.addElement(this.text1)

        this.text2 = Label.new(this.game, 'Press R to return main menu', 60, 220)
        this.addElement(this.text2)
    }

    setInput() {
        this.game.registerAction('r', () => {
            const scene = SceneTitle.new(this.game)
            this.game.replaceScene(scene)
        })
    }

    draw() {
        super.draw()
    }
}
