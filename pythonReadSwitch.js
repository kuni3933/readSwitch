import GPIO, { read } from "rpio";

GPIO.setMode(GPIO.MODE_BCM);

// GPIO(11pin)を入力モードとし、pull up設定とする
GPIO.open(11, GPIO.INPUT, GPIO.PULL_UP);

while (true) {
  console, log(`11: ${GPIO.read(11)}`);
}
