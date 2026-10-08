input.onButtonPressed(Button.A, function () {
    basic.showNumber(randint(1, 3))
    if (true) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . # # # .
            . . # . .
            `)
    }
})
