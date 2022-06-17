controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f 2 2 f f . . . . . 
        . . . . f 5 2 5 5 2 5 f . . . . 
        . . . f f f f f f f f f f . . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . f f f f f f f f f f f f f f . 
        . f f f f f f f f f f f f f f . 
        . f f f f f f f f f f f f f f . 
        . f f f f f f f f f f f f f f f 
        . f f f f f f f f f f f f f f f 
        . . f f f f f f f f f f f f f f 
        . . 8 e f f f f f f f f f f f . 
        . . e 2 2 e 9 9 6 9 6 6 f . . . 
        . . . f e e 9 1 9 1 1 f f . . . 
        . . . . . f f f 6 6 f . . . . . 
        `)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . f 2 2 f f f f . . . . . . 
        . . f 2 5 5 2 5 f f f f . . . . 
        . . f 5 5 5 5 2 f f f f f . . . 
        . . f f 2 2 2 f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . f f f e e f f f f f f f f . . 
        . f f f e e e f f f f f f f . . 
        . f f e e e f 9 f f f f f f . . 
        . . f e 4 4 f 1 e f f f f f . . 
        . . . f 4 4 4 4 f f f f f f f . 
        . . . f e e e f f f f f f f f . 
        . . . f 9 9 9 e 4 4 f f f f . . 
        . . . f 9 9 9 e 4 4 e f f . . . 
        . . f 6 9 6 9 6 e e 6 f . . . . 
        . . f f 1 9 1 9 1 9 f f . . . . 
        . . . . f f 6 6 f f . . . . . . 
        `)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f 2 2 f . . . 
        . . . . f f f f 5 2 5 5 2 f . . 
        . . . f f f f f 2 5 5 5 5 f . . 
        . . f f f f f f f 2 2 2 f f . . 
        . . f f f f f f f f f f f f f . 
        . . f f f f f f f f e e f f f . 
        . . f f f f f f f e e e f f f . 
        . f f f f f f f 9 f e e e f . . 
        . f f f f f f e 1 f 4 4 e . . . 
        . f f f f f f f 4 4 4 4 f . . . 
        . . f f f f 4 4 e 9 9 9 f . . . 
        . . . f f f 4 4 e 9 9 9 f . . . 
        . . . f 6 6 e e 6 6 9 9 9 f . . 
        . . . . f 6 9 9 1 9 1 9 6 f . . 
        . . . . . f f f 6 6 f f f . . . 
        `)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . f f . . . . . . . 
        . . . . . f f 2 2 f f . . . . . 
        . . . . f 5 2 5 5 2 5 f . . . . 
        . . . f f 2 5 5 5 5 2 f f . . . 
        . . f f f f 2 2 2 2 f f f f . . 
        . f f f f f f f f f f f f f f . 
        . f f f f f f e e f f f f f f . 
        . f f f f f e e e e f f f f f . 
        f f f f f 9 f e e f 9 f f f f f 
        f f f f f 1 f 4 4 f 1 f f f f f 
        . f f f f e 4 4 4 4 4 f f f f . 
        . . f 4 4 4 e 9 9 9 6 4 4 4 . . 
        . . f e 4 4 e 9 9 9 9 8 4 e . . 
        . . . f e e 9 9 6 9 6 6 f e . . 
        . . . f f 1 9 1 9 1 1 f f . . . 
        . . . . . f f f 6 6 f . . . . . 
        `)
})
let mySprite: Sprite = null
info.setLife(3)
info.setScore(0)
mySprite = sprites.create(img`
    . . . . . f f 2 2 f f . . . . . 
    . . . . f 5 2 5 5 2 5 f . . . . 
    . . . f f 2 5 5 5 5 2 f f . . . 
    . . f f f f 2 2 2 2 f f f f . . 
    . . f f f f f f f f f f f f . . 
    . f f f f f f e e f f f f f f . 
    . f f f f f e e e e f f f f f . 
    . f f f f 9 f e e f 9 f f f f . 
    . f f f e 1 f 4 4 f 1 e f f f . 
    f f f f f 4 4 4 4 4 4 f f f f f 
    f f f f f f e e e e f f f f f f 
    . f e e f 6 9 9 9 9 6 f e e f . 
    . . e 2 8 9 9 9 9 9 9 8 2 e . . 
    . . e f 6 9 6 9 6 9 6 6 f e . . 
    . . . f f 1 9 1 9 1 9 f f . . . 
    . . . . . f f 6 6 f f . . . . . 
    `, SpriteKind.Player)
let evil_broski = sprites.create(img`
    ......ffff..............
    ....ffffffff............
    ...ffffffffff...........
    ..ffffffffffff..........
    ..ffffffffffff..........
    ..ffffffffffff..........
    ..ffffffffffff......2f2.
    .ffff2ffff2ffff....ff222
    .ffff2ffff2ffff...ff2f22
    .ffffddddddffff.fffff22.
    ffffffddddffffffffff..2.
    fffffffffffffffffff.....
    fffffffffffffffff.......
    fff.ffffffffffff........
    .ff.ffffffff............
    ....ffffffff............
    .....ff..ff.............
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Enemy)
tiles.setCurrentTilemap(tilemap`level1`)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
evil_broski.setPosition(randint(10, 160), randint(10, 100))
evil_broski.follow(mySprite, 73)
music.playMelody("F B C5 F B F B G ", 120)
