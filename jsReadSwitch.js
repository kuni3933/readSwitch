import { Gpio } from "pigpio";

const PIN = 18;
// GPIO(11pin)を入力モードとし、pull up設定とする
const readSwitch = new Gpio(PIN, {
  mode: Gpio.INPUT,
  pullUpDown: Gpio.PUD_UP,
});

while (true) {
  console, log(`readSwitch: ${readSwitch.digitalRead()}`);
}
