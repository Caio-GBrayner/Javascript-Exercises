import Computer from "./Computer.js";

const desktop = new Computer (
    "config01",
    "Custom",
    "UHD Monitor",
    64,
    1000,
    true,
    "Win 11",
    "AMD",
    "img/laptop.jpg"
);


const laptop = new Computer (
    "config02",
    "Dell",
    "UHD Monitor",
    32,
    512,
    true,
    "Win 11",
    "AMD",
    "img/laptop.jpg"
);

const computerObjectArray = [desktop, laptop];

export default computerObjectArray;