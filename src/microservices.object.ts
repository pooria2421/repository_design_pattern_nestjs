import { Transport } from "@nestjs/microservices";

// map microcervices to array and export new array

const array = [
  {
    name: "NOTIF_SERVICE",
    queue: "notification_queue",
  },
];
const microservices = [];
array.forEach((element) => {
  microservices.push({
    name: element.name,
    transport: Transport.RMQ,
    options: {
      urls: ["amqp://127.0.0.1:5672"],
      queue: element.queue,
      queueOptions: {
        durable: false,
      },
    },
  });
});

export default microservices;
