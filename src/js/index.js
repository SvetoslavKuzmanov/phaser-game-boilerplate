import 'pixi'
import 'p2'
import Phaser from 'phaser'
import BootState from './states/Boot'

class Game extends Phaser.Game {

    constructor() {
        let width = document.documentElement.clientWidth
        let height = document.documentElement.clientHeight
        super(width, height, Phaser.AUTO, 'content', null)

        this.state.add('Boot', BootState, false)
        this.state.start('Boot')
    }
}

window.game = new Game()
