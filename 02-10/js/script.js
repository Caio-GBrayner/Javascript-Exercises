import Computer from "./Computer.js";

const desktop = new Computer(
    "Iphone",
    "Apple Silicon",
    16,
    512,
    "MAC OS",
    false,
    "UHD Monitor",
    150,
    1000,
    "Thu Mar 24 2024 13:28:56 GMT+0530 (India Standard Time)"
)

const laptop = new Computer(
    "Lenovo",
    "AMD",
    16,
    512,
    "Windows 11",
    true,
    "HD Monitor",
    150,
    1000,
    "Wed Aug 25 2018 13:28:56 GMT+0530 (India Standard Time)"
)

console.log("The Lenovo Laptop: ", laptop);
console.log("The OS it comes with: ", laptop.os);
console.log("Date Laptop was bought: ", laptop.dateAquired);
console.log("Days since laptop bought: ", laptop.computerAge());

console.log("The Mac PC: ", desktop);
console.log("The Desktop it comes with: ", desktop.os);
console.log("Date Desktop was bought: ", desktop.dateAquired);
console.log("Days since Desktop bought: ", desktop.computerAge());