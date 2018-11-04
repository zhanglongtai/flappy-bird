class Game {
    constructor(fps, imgToLoad, loadedCallback) {
        window.fps = fps
        this.loadedCallback = loadedCallback

        const canvas = document.querySelector('#id-game-interface')
        const ctx = canvas.getContext('2d')

        this.canvas = canvas
        this.context = ctx
        this.actions = {}
        this.keydowns = {}
        this.imgList = {}
        this.scene = null

        window.addEventListener('keydown', (event) => {
            this.keydowns[event.key] = 'keydown'
        })
    
        window.addEventListener('keyup', (event) => {
            this.keydowns[event.key] = 'keyup'
        })

        this.loadImg(imgToLoad)
    }

    static singleInstance(fps, imgToLoad, loadedCallback) {
        this.instance = this.instance || new this(fps, imgToLoad, loadedCallback)
        return this.instance
    }

    drawImage(gameImgObj) {
        this.context.drawImage(gameImgObj.texture, gameImgObj.x, gameImgObj.y)
    }

    registerAction(keyName, callback) {
        this.actions[keyName] = callback
    }

    draw() {
        this.scene.draw()
    }

    update() {
        this.scene.update()
    }

    runloop() {
        // event
        const keyList = Object.keys(this.actions)
        for (const key of keyList) {
            const keyState = this.keydowns[key]
            if (keyState === 'keydown') {
                this.actions[key]('keydown')
            } else if (keyState === 'keyup') {
                this.actions[key]('keyup')
                this.keydowns[key] = null
            }
        }
        // update
        this.update()
        // clear
        this.context.clearRect(0, 0, this.canvas.clientWidth, this.canvas.clientHeight)
        // draw
        this.draw()

        // loop
        setTimeout(this.runloop.bind(this), 1000/window.fps)
    }

    loadImg(imgToLoad) {
        const loadedList = []
        const component = Object.keys(imgToLoad)

        for (const imgName of component) {
            const img = new Image()
            img.src = imgToLoad[imgName]

            img.onload = () => {
                // store img
                this.imgList[imgName] = img
                // valid all img loaded
                loadedList.push(1)
                if (loadedList.length === component.length) {
                    this.__init()
                }
            }
        }
    }

    textureByName(name) {
        const img = this.imgList[name]

        return img
    }

    runWithScene(scene) {
        this.scene = scene

        // start game
        setTimeout(this.runloop.bind(this), 1000/window.fps)
    }

    replaceScene(scene) {
        this.scene = scene
    }

    __init() {
        this.loadedCallback(this)
    }
}
