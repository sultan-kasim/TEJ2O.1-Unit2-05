/* Copyright (c) 2025 MTHS All rights reserved
 *
 * Created by: Sultan
 * Created on: Sep 2025
 * This program shows a smiley face.
*/
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// When button A is presse
input.onButtonPressed(Button.A, function () {
// Temperture in K.
    let temperature = input.temperature()
    let temperatureValueKelvin = Math.round(temperature + 273.15)
    basic.clearScreen()
    basic.showString("The temperature is: " + temperatureValueKelvin + "Kelvin")
    basic.pause(1000)
    basic.showIcon(IconNames.Happy)
})
