import Computer from "./Computer.js";

const laptop = new Computer (
    "Lenovo",
    "AMD",
    16,
    512,
    "Win 11",
    true,
    "HD Monitor",
    150,
    1000,
    "img/laptop.jpg"
)

const content = `
    <figure class = "computer_image">
        <img src = ${laptop.image} loading = "lazy"></img>
    </figure>

    <h1 class = "computer_name">${laptop.name}</h1>
    <ul class = "computer_features">
        <li class = "featured processor">Processor: ${laptop.processor}</li>
        <li class = "featured ram">RAM: ${laptop.ram}GB</li>
        <li class = "featured storage">Storage: ${laptop.storage}GB</li>
        <li class = "featured os">OS: ${laptop.os}</li>
        <li class = "featured wifi">Wifi: ${laptop.wifi ? "Wifi is avaible" : "Wifi is not avaible"}</li>
        <li class = "featured monitor">Monitor: ${laptop.monitor}</li>
        <li class = "featured wifiBand2g">Wifi Band 2g: ${laptop.wifiSpeed.lowSpeed}Mbps</li>
        <li class = "featured wifiBand5g">Wifi Band 5g: ${laptop.wifiSpeed.highSpeed}Mbps</li>
    </ul>
`;

const main = document.querySelector("main");

const newArticle = document.createElement("article");
newArticle.classList.add("computer");
newArticle.setAttribute("id", "laptop");
newArticle.innerHTML = content;

main.append(newArticle);

console.log(content);

if (laptop.wifi == true) {
    console.log("Wifi is Avaible");
}
else {
    console.log("Wifi is not Avaible");
}

console.log(laptop.wifi ? "Wifi is avaible" : "Wifi is not avaible");
