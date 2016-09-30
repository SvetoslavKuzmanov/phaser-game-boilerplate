import mushroom from '../../assets/mushroom.png'

export default class Boot extends Phaser.State {

    preload() {
        this.stage.backgroundColor = '#EDEEC9'
        this.load.image('mushroom', mushroom);
    }

    create() {
        game.add.sprite(this.game.width / 2, this.game.height / 2, 'mushroom');
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
    }

}
