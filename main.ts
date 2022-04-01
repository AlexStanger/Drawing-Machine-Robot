let yval = 0
let xval = 0
basic.showIcon(IconNames.Heart)
let motor = stepperMotor.createMotor(
DigitalPin.P13,
DigitalPin.P14,
DigitalPin.P15,
DigitalPin.P16
)
let motor2 = stepperMotor.createMotor(
DigitalPin.P8,
DigitalPin.P9,
DigitalPin.P10,
DigitalPin.P12
)
let motor3 = stepperMotor.createMotor(
DigitalPin.P3,
DigitalPin.P4,
DigitalPin.P6,
DigitalPin.P7
)
basic.pause(1000)
basic.clearScreen()
basic.forever(function () {
    xval = pins.analogReadPin(AnalogPin.P1)
    yval = pins.analogReadPin(AnalogPin.P0)
    if (xval < 400) {
        motor.moveClockwise(100, stepUnit.Steps)
    } else if (xval > 600) {
        motor.moveAntiClockwise(100, stepUnit.Steps)
    } else if (yval < 400) {
        motor2.moveAntiClockwise(100, stepUnit.Steps)
    } else if (yval > 600) {
        motor2.moveClockwise(100, stepUnit.Steps)
    } else if (input.buttonIsPressed(Button.A)) {
        motor3.moveClockwise(100, stepUnit.Steps)
    } else if (input.buttonIsPressed(Button.B)) {
        motor3.moveAntiClockwise(100, stepUnit.Steps)
    } else {
        motor.stopMotor()
        motor2.stopMotor()
        motor3.stopMotor()
    }
})
