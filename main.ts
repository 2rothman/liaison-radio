bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Yes)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
})
input.onButtonPressed(Button.A, function () {
    bluetooth.uartWriteString("Temp =")
    bluetooth.uartWriteNumber(input.temperature())
    bluetooth.uartWriteLine("")
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    donnee_recue = bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine))
    if (donnee_recue.includes("on")) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        if (donnee_recue.includes("off")) {
            basic.clearScreen()
        }
    }
})
let donnee_recue = ""
bluetooth.startUartService()
basic.showIcon(IconNames.Square)
basic.forever(function () {
	
})
