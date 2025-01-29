import Computer from "./computer.js";

const laptop = new Computer(
    "Lenovo",
    "AMD",
    16,
    512,
    "Linux",
    true,
    "HD MOnitor",
    150,
    1000,
)

console.log("The lenovo laptop: ", laptop);
console.log("The laptop comes with os: ", laptop.os);

