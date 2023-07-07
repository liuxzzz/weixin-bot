import { WechatyBuilder } from "wechaty";
import { defaultMessage } from "./sendMessage.js";

const onMessage = async (message) => {
  await defaultMessage(message);
};

const wechaty = WechatyBuilder.build(); // get a Wechaty instance
wechaty
  .on("scan", (qrcode, status) =>
    console.log(
      `Scan QR Code to login: ${status}\nhttps://wechaty.js.org/qrcode/${encodeURIComponent(
        qrcode
      )}`
    )
  )
  .on("login", (user) => console.log(`User ${user} logged in`))
  .on("message", onMessage);
wechaty.start();
