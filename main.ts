/* Copyright (c) 2025 MTHS All rights reserved
 *
 * Created by: Sultan
 * Created on: Sep 2025
 * This program shows a smiley face.
*/
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// When button A is pressed
input.onButtonPressed(Button.A, function () {
    // show temperature every time A is pressed
    let temperature: number = input.temperature()
    let temperatureValueKelvin: number = Math.round(temperature + 273.15)

    basic.clearScreen()
    basic.showString('The temperature is: ' + temperatureValueKelvin.toString() + 'K')

    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
    basic.pause(1000)
})
