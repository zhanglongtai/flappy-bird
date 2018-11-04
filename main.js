const enableDebugMode = function(game, enabled) {
    if (!enabled) {
        return
    }

    window.addEventListener('keydown', (event) => {
        const k = event.key
        if (k === 'p') {
            window.paused = !window.paused
        } else if ('123456789'.includes(k)) {
            // const scene = SceneMain.new(game, localLevels, Number(k))
            // game.replaceScene(scene)
        }
    })

    document.querySelector('#id-fps-input').addEventListener('input', (event) => {
        const value = event.target.value
        window.fps = Number(value)
    })
}

const __main = function() {
    const imgPath = {
        land: 'img/land.png',
        sky: 'img/sky.png',
        pipeUp: 'img/PipeUp.png',
        pipeDown: 'img/PipeDown.png',
        bird1: 'img/bird-01.png',
        bird2: 'img/bird-02.png',
        bird3: 'img/bird-03.png',
        bird4: 'img/bird-04.png',
    }

    const game = Game.singleInstance(30, imgPath, (gameInstance) => {
        // const scene = SceneMain.new(gameInstance)
        const scene = SceneTitle.new(gameInstance)
        game.runWithScene(scene)
    })

    enableDebugMode(game, true)
    window.paused = false
}

__main()
