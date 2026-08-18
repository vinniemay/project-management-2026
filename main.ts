namespace SpriteKind {
    export const Tut1 = SpriteKind.create()
    export const Tut2 = SpriteKind.create()
    export const Tut3 = SpriteKind.create()
    export const SpeedBoostPowerUp = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Temp_Player.vy == 0) {
        Temp_Player.vy = -200
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.SpeedBoostPowerUp, function (sprite, otherSprite) {
    sprites.destroy(Speed_Boost)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Tut3, function (sprite, otherSprite) {
    game.splash("Press D to walk left")
    sprites.destroy(Tut3sprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Tut1, function (sprite, otherSprite) {
    game.splash("Press D to walk right")
    sprites.destroy(Tut1sprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Tut2, function (sprite, otherSprite) {
    game.splash("Press W to jump")
    sprites.destroy(Tut2sprite)
})
let Speed_Boost: Sprite = null
let Tut3sprite: Sprite = null
let Tut2sprite: Sprite = null
let Tut1sprite: Sprite = null
let Temp_Player: Sprite = null
scene.setBackgroundColor(13)
Temp_Player = sprites.create(assets.image`Temp Sprite`, SpriteKind.Player)
Temp_Player.setPosition(17, 120)
scene.cameraFollowSprite(Temp_Player)
controller.moveSprite(Temp_Player, 120, 0)
tiles.setCurrentTilemap(tilemap`Test tilemap`)
Temp_Player.ay = 590
Tut1sprite = sprites.create(assets.image`Tut1`, SpriteKind.Tut1)
Tut1sprite.setPosition(17, 120)
Tut2sprite = sprites.create(img`
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
Tut3sprite = sprites.create(img`
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
    `, SpriteKind.SpeedBoostPowerUp)
Speed_Boost.setPosition(427, 60)
