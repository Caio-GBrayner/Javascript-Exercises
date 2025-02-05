import computerObjectArray from "./data.js";

const content = computerObjectArray.map( (computer) => {

    let computerArticle = document.createElement("div");
    computerArticle.classList.add("col-md-4");

    computerArticle.setAttribute("id", computer.id);

    computerArticle.innerHTML = `
        <ul>
            <li class: "feature"><strong>Screen: </strong>${computer.screen}</li>
            <li class: "feature"><strong>Memory: </strong>${computer.ram}</li>
            <li class: "feature"><strong>Storage: </strong>${computer.storage}</li>
            <li class: "feature"><strong>Wi-Fi: </strong>${computer.wifi}</li>
            <li class: "feature"><strong>OS: </strong>${computer.os}</li>
            <li class: "feature"><strong>CPU: </strong>${computer.cpu}</li>
        </ul>
    `;

    return computerArticle;
} );

const main = document.getElementById("content_row");

content.forEach( (computer) => {
    main.append(computer);
} );