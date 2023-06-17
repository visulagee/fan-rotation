input.onButtonPressed(Button.A, function () {
    I2C_LCD1602.clear()
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.analogWritePin(AnalogPin.P1, 500)
    basic.showLeds(`
        . . . # .
        . . # . #
        . # . . .
        # . . . .
        . . . . .
        `)
    I2C_LCD1602.on()
    I2C_LCD1602.BacklightOn()
    I2C_LCD1602.ShowString("Fan is on", 0, 0)
})
input.onButtonPressed(Button.B, function () {
    I2C_LCD1602.clear()
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.analogWritePin(AnalogPin.P1, 0)
    basic.showIcon(IconNames.No)
    I2C_LCD1602.on()
    I2C_LCD1602.BacklightOn()
    I2C_LCD1602.ShowString("Fan is off", 0, 0)
})
I2C_LCD1602.LcdInit(0)
I2C_LCD1602.clear()
I2C_LCD1602.ShowString("Fan is ready", 0, 0)
