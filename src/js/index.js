import 'pixi'
import 'p2'
import Phaser from 'phaser'

class Game extends Phaser.Game {

  constructor () {
    let width = document.documentElement.clientWidth
    let height = document.documentElement.clientHeight

    super(width, height, Phaser.AUTO, 'content', null)
  }
}

window.game = new Game()
