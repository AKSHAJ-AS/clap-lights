input.onSound(DetectedSound.Loud, function () {
    if (!(LIGHTLEVEL)) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        LIGHTLEVEL = 1
    } else {
        basic.clearScreen()
        LIGHTLEVEL = 0
    }
})
let LIGHTLEVEL = 0
input.setSoundThreshold(SoundThreshold.Loud, 130)
