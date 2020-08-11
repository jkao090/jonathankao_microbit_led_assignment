input.onButtonPressed(Button.A, function () {
    LEDx = randint(0, 4)
    LEDy = randint(0, 4)
    while (led.point(LEDx, LEDy)) {
        LEDx = randint(0, 4)
        LEDy = randint(0, 4)
    }
    led.plot(LEDx, LEDy)
    xy = [LEDx, LEDy]
    Array2.push(xy)
    if (Array2.length == 25) {
        basic.clearScreen()
        basic.pause(100)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    basic.showString("RESET")
    Array2 = []
})
input.onButtonPressed(Button.B, function () {
    if (Array2.length > 0) {
        xy2 = Array2.shift()
        LEDx = xy2[0]
        LEDy = xy2[1]
        led.unplot(LEDx, LEDy)
    } else {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(100)
        basic.clearScreen()
    }
})
let xy2: number[] = []
let Array2: number[][] = []
let xy: number[] = []
let LEDy = 0
let LEDx = 0
basic.clearScreen()
