namespace SpriteKind {
    export const Tut1 = SpriteKind.create()
    export const Tut2 = SpriteKind.create()
    export const Tut3 = SpriteKind.create()
    export const SpeedBoostPowerUp = SpriteKind.create()
    export const PowerUpTut = SpriteKind.create()
    export const Trapdoor = SpriteKind.create()
    export const questionTUT = SpriteKind.create()
    export const tutbutton1 = SpriteKind.create()
    export const press = SpriteKind.create()
    export const tutbutton2 = SpriteKind.create()
    export const tutbutton3 = SpriteKind.create()
    export const answer = SpriteKind.create()
    export const correctanswer = SpriteKind.create()
    export const correct = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Temp_Player.vy == 0) {
        Temp_Player.vy = -200
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.tutbutton1, function (sprite, otherSprite) {
    sprites.destroy(button)
    sprites.destroy(press)
    sprites.destroy(Question_1_tut)
    sprites.destroy(Question1Tut2)
    sprites.destroy(Question1Tut3)
    sprites.destroy(Question1Tut4)
    questtut5 = sprites.create(assets.image`text1`, SpriteKind.questionTUT)
    questtut5.setPosition(122, 460)
    pause(5000)
    questtut5.setImage(assets.image`text2`)
    pause(5000)
    questtut5.setImage(assets.image`text3`)
    pause(5000)
    questtut5.setImage(assets.image`text4`)
    pause(5000)
    questtut5.setImage(assets.image`text5`)
    questtut5.setPosition(122, 462)
    pause(5000)
    Temp_Player.setPosition(357, 483)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Temp_Player.setImage(assets.image`Vamp Main LEFT proper`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.correctanswer, function (sprite, otherSprite) {
    sprites.destroy(questtut5)
    sprites.destroy(questtut6)
    sprites.destroy(questtut7)
    sprites.destroy(questtut8)
    sprites.destroy(answer1)
    sprites.destroy(answer2)
    correct = sprites.create(assets.image`correct`, SpriteKind.correct)
    correct.setPosition(357, 463)
    correct2 = sprites.create(assets.image`myImage0`, SpriteKind.correct)
    correct2.setPosition(357, 463)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Tut3, function (sprite, otherSprite) {
    game.splash("Press D to walk left")
    sprites.destroy(Tut3sprite)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Temp_Player.setImage(assets.image`Vamp Main RIGHT`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Tut1, function (sprite, otherSprite) {
    game.splash("Press D to walk right")
    sprites.destroy(Tut1sprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.PowerUpTut, function (sprite, otherSprite) {
    sprites.destroy(Speed_Boost)
    game.splash("Bottles give you power ups")
    controller.moveSprite(Temp_Player, 240, 0)
    pause(5000)
    controller.moveSprite(Temp_Player, 120, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Trapdoor, function (sprite, otherSprite) {
    Temp_Player.setPosition(114, 483)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Tut2, function (sprite, otherSprite) {
    game.splash("Press W to jump")
    sprites.destroy(Tut2sprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.tutbutton2, function (sprite, otherSprite) {
    sprites.destroy(button)
    sprites.destroy(press)
})
let correct2: Sprite = null
let correct: Sprite = null
let answer2: Sprite = null
let questtut8: Sprite = null
let answer1: Sprite = null
let questtut7: Sprite = null
let questtut6: Sprite = null
let questtut5: Sprite = null
let press: Sprite = null
let button: Sprite = null
let Question1Tut4: Sprite = null
let Question1Tut3: Sprite = null
let Question1Tut2: Sprite = null
let Question_1_tut: Sprite = null
let Speed_Boost: Sprite = null
let Tut3sprite: Sprite = null
let Tut2sprite: Sprite = null
let Tut1sprite: Sprite = null
let Temp_Player: Sprite = null
scene.setBackgroundColor(13)
Temp_Player = sprites.create(assets.image`Vamp Main RIGHT`, SpriteKind.Player)
Temp_Player.setPosition(17, 120)
Temp_Player.setPosition(119, 483)
scene.cameraFollowSprite(Temp_Player)
controller.moveSprite(Temp_Player, 120, 0)
tiles.setCurrentTilemap(tilemap`VAMPIRE MAP`)
Temp_Player.ay = 590
Tut1sprite = sprites.create(assets.image`Tut Dot`, SpriteKind.Tut1)
Tut1sprite.setPosition(17, 120)
Tut2sprite = sprites.create(assets.image`Tut Dot`, SpriteKind.Tut2)
Tut2sprite.setPosition(200, 137)
Tut3sprite = sprites.create(assets.image`Tut Dot`, SpriteKind.Tut3)
Tut3sprite.setPosition(470, 87)
Speed_Boost = sprites.create(assets.image`Blood Bottle`, SpriteKind.PowerUpTut)
Speed_Boost.setPosition(392, 57)
let Trapdoor2 = sprites.create(assets.image`Trapdoor`, SpriteKind.Trapdoor)
Trapdoor2.setPosition(624, 136)
Question_1_tut = sprites.create(assets.image`welcome`, SpriteKind.questionTUT)
Question_1_tut.setPosition(118, 439)
Question1Tut2 = sprites.create(assets.image`the`, SpriteKind.questionTUT)
Question1Tut2.setPosition(88, 457)
Question1Tut3 = sprites.create(assets.image`vampires 4`, SpriteKind.questionTUT)
Question1Tut3.setPosition(132, 453)
Question1Tut4 = sprites.create(assets.image`castle something`, SpriteKind.questionTUT)
Question1Tut4.setPosition(119, 471)
button = sprites.create(assets.image`button`, SpriteKind.tutbutton1)
button.setPosition(174, 505)
press = sprites.create(assets.image`press to continue`, SpriteKind.press)
press.setPosition(178, 482)
questtut5 = sprites.create(assets.image`question 1`, SpriteKind.questionTUT)
questtut5.setPosition(357, 443)
questtut6 = sprites.create(assets.image`myImage0`, SpriteKind.questionTUT)
questtut6.setPosition(357, 463)
questtut7 = sprites.create(assets.image`button`, SpriteKind.answer)
questtut7.setPosition(303, 505)
answer1 = sprites.create(assets.image`answer1`, SpriteKind.answer)
answer1.setPosition(303, 482)
questtut8 = sprites.create(assets.image`button`, SpriteKind.correctanswer)
questtut8.setPosition(412, 505)
answer2 = sprites.create(assets.image`answer2`, SpriteKind.correctanswer)
answer2.setPosition(412, 482)
