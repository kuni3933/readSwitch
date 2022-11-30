// create a raspberry pi (r) object
import GPIO from "array-gpio";

// set pin 11 as input
const input = GPIO.in(11);
input.setR("pu");

// GPIO(11pin)を入力モードとし、pull up設定とする

while (true) {
  console, log(`11: ${input.read()}`);
}
