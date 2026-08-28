namespace SpriteKind {
    export const Tut1 = SpriteKind.create()
    export const Tut2 = SpriteKind.create()
    export const Tut3 = SpriteKind.create()
    export const SpeedBoostPowerUp = SpriteKind.create()
    export const PowerUpTut = SpriteKind.create()
    export const Trapdoor = SpriteKind.create()
}
let Temp_Player: Sprite = null
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Temp_Player.vy == 0) {
        Temp_Player.vy = -200
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Tut3, function (sprite, otherSprite) {
	
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Tut1, function (sprite, otherSprite) {
	
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.PowerUpTut, function (sprite, otherSprite) {
    let Speed_Boost: Sprite = null
    sprites.destroy(Speed_Boost)
    game.splash("Bottles give you power ups")
    controller.moveSprite(Temp_Player, 240, 0)
    pause(5000)
    controller.moveSprite(Temp_Player, 120, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Trapdoor, function (sprite, otherSprite) {
    Temp_Player.setPosition(122, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Tut2, function (sprite, otherSprite) {
	
})
