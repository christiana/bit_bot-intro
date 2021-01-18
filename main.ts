input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 8; index++) {
        led.toggle(4, 0)
        basic.pause(50)
    }
    sonar_value = bitbot.sonar(BBPingUnit.Centimeters)
    basic.clearScreen()
    for (let index = 0; index <= sonar_value; index++) {
        led.toggle(2, 0)
        basic.pause(50)
        led.toggle(2, 0)
        basic.pause(50)
    }
    ShowGraphicInteger(Math.round(sonar_value))
})
function ShowGraphicInteger (val: number) {
    basic.clearScreen()
    if (val > 25) {
        for (let index = 0; index <= val / 25 - 1; index++) {
            ShowGraphicInteger(25)
            basic.clearScreen()
        }
    }
    basic.clearScreen()
    for (let iy = 0; iy <= 4; iy++) {
        for (let ix = 0; ix <= 4; ix++) {
            if (val == 25 || ix + 5 * iy < val % 25) {
                led.plot(ix, iy)
                basic.pause(50)
            }
        }
    }
}
let sonar_value = 0
basic.showLeds(`
    . . . . .
    # # # . .
    # # # # #
    # # # # #
    . # . # .
    `)
bitbot.select_model(BBModel.XL)
bitbot.ledRainbow()
basic.forever(function () {
    bitbot.ledRotate()
    basic.pause(200)
})
