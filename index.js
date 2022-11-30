import GPIO from "rpi-gpio";

GPIO.setMode(GPIO.MODE_BCM);

// GPIO(11pin)を入力モードとし、pull up設定とする
GPIO.setup(11, GPIO.DIR_IN, readInput);

function readInput(err) {
  if (err) throw err;
  GPIO.read(11, function (err, value) {
    if (err) throw err;
    console.log("The value is " + value);
  });
}
