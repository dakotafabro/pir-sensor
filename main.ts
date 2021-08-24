radio.setGroup(73)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        basic.showIcon(IconNames.SmallDiamond)
        radio.sendString("moving")
    } else {
        basic.clearScreen()
        radio.sendString("still")
    }
    basic.pause(100)
})
