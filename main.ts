namespace SpriteKind {
    export const Tut1 = SpriteKind.create()
    export const Tut2 = SpriteKind.create()
    export const Tut3 = SpriteKind.create()
    export const SpeedBoostPowerUp = SpriteKind.create()
    export const PowerUpTut = SpriteKind.create()
    export const Trapdoor = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Temp_Player.vy == 0) {
        Temp_Player.vy = -200
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Tut3, function (sprite, otherSprite) {
	
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Tut1, function (sprite, otherSprite) {
	
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.PowerUpTut, function (sprite, otherSprite) {
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
let Speed_Boost: Sprite = null
let Temp_Player: Sprite = null
scene.setBackgroundColor(13)
Temp_Player = sprites.create(assets.image`Vamp 1`, SpriteKind.Player)
Temp_Player.setPosition(17, 120)
scene.cameraFollowSprite(Temp_Player)
controller.moveSprite(Temp_Player, 120, 0)
tiles.setCurrentTilemap(tilemap`Test tilemap`)
Temp_Player.ay = 590
let Tut1sprite = sprites.create(assets.image`Tut1`, SpriteKind.Tut1)
Tut1sprite.setPosition(17, 120)
let Tut2sprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Tut2)
Tut2sprite.setPosition(190, 145)
let Tut3sprite = sprites.create(img`
    ...................................
    ...................................
    ...................................
    ...................................
    ...................................
    ...................................
    ...................................
    ...................................
    ...................................
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    ...................................
    ...................................
    ...................................
    ...................................
    ...................................
    ...................................
    `, SpriteKind.Tut3)
Tut3sprite.setPosition(527, 94)
Speed_Boost = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . d d . . . . . . . 
    . . . . . . b 1 1 1 . . . . . . 
    . . . . . . . b 1 . . . . . . . 
    . . . . . . . b 1 . . . . . . . 
    . . . . . . b . . 1 . . . . . . 
    . . . . . b . . . . 1 . . . . . 
    . . . . b . . . . . . 1 . . . . 
    . . . . b . . 2 2 1 2 1 . . . . 
    . . . . b f 2 2 2 2 2 1 . . . . 
    . . . . b f 2 2 2 2 2 1 . . . . 
    . . . . . b f f f f 1 . . . . . 
    . . . . . . b b b 1 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.PowerUpTut)
Speed_Boost.setPosition(427, 60)
let Trapdoor = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    e e e e e e d e e d e e e e e e 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Trapdoor)
Trapdoor.setPosition(736, 142)
