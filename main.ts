/* Copyright (c) 2025 MTHS All rights reserved
 *
 * Created by: Sultan
 * Created on: Sep 2025
 * This program shows temperature in kelvins.
*/
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// Variables
let temperature: number
let temperatureValueKelvin: number

// When button A is pressed...
input.onButtonPressed(Button.A, function () {

    // Gets temperature value
    temperature = input.temperature()
    temperatureValueKelvin = Math.round(temperature + 273.15)

    basic.clearScreen()
    basic.showString('The temperature is' + temperatureValueKelvin.toString() + 'K')
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
    basic.pause(1000)

})
