const events = require("events");
const myEvent = new events.EventEmitter();
myEvent.on("feeDeposit", function (name, id) {
  console.log(`Fees is depositd by ${name} and id : ${id}`);
});
myEvent.emit("feeDeposit", "Sajid", 10);
