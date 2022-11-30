import { Gpio } from "pigpio";
import { sleep } from "sleep";

const PIN = 11;
// GPIO(11pin)を入力モードとし、pull up設定とする
const readSwitch = new Gpio(PIN, {
  mode: Gpio.INPUT,
  pullUpDown: Gpio.PUD_UP,
});

let isOpened = false;
while (true) {
  const whileIsOpened = readSwitch.digitalRead();
  if (isOpened != whileIsOpened) {
    isOpened = whileIsOpened;
    console.log(`isOpened: ${whileIsOpened}`);
  }
  sleep(10);
  console.log("10 sec out");
}
