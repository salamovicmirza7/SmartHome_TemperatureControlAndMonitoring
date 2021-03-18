let temp = 0
Obloq.Obloq_mqtt_setup(
SerialPin.P1,
SerialPin.P2,
"Mirza",
"nina250311",
"Bb_pNZQMg",
"Bb_tNWwMRz",
"-t9pHZQGg",
Obloq.SERVERS.Global
)
basic.forever(function () {
    temp = dstemp.celsius(DigitalPin.P0)
    basic.pause(1000)
})
basic.forever(function () {
    if (temp > 38) {
        pins.analogWritePin(AnalogPin.P3, 1023)
        pins.digitalWritePin(DigitalPin.P5, 1)
    } else {
        pins.analogWritePin(AnalogPin.P3, 0)
        pins.digitalWritePin(DigitalPin.P5, 0)
    }
})
basic.forever(function () {
    Obloq.Obloq_mqtt_send_message(convertToText(temp))
    basic.pause(30000)
})
