radio.setGroup(73)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        radio.sendString("moving")
        basic.showLeds(`
            . . . . .
            # . . . .
            # . . . .
            # . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            # # . . .
            # # . . .
            # # . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            # # # . .
            # # # . .
            # # # . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            # # # # .
            # # # # .
            # # # # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            # # # # #
            # # # # #
            # # # # #
            . . . . .
            `)
    } else {
        basic.clearScreen()
        radio.sendString("still")
    }
})
