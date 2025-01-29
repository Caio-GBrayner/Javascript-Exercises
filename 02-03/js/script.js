//Create an Array
const my_desktop = [
    "Apple",
    "Laptop",
    "Phone",
    "Remote",
    "Cup",
    "Book",
    "Headphones",
    "Pendrive",
    "USB Hub"
]

console.log("Original Items: " + my_desktop); 

//Remove last item and return to console
// console.log("This item will be removed: ", my_desktop.pop());
// console.log("This is the new list:  ", my_desktop);


//Move the last item to the first postion
// let lastItem = my_desktop.pop;

// console.log("This last Item will be moved to 1st: ", lastItem);
// my_desktop.unshift(lastItem);
// console.log("Las item now is 1st item: ", my_desktop);


//Sort items Alphabetically
// my_desktop.sort();
// console.log("Array sorted Alphabetically: ", my_desktop);


//Find a specific item
// let item = "Charger";
// const item_found = my_desktop.find((something) => something === item) || "No such item in list";

// console.log("Item found: ", item_found);

//Remove a specific content from the array
let remove_item = "Cup";

my_desktop.splice(my_desktop.indexOf(remove_item), 1);

console.log(`Array item with name  "${remove_item}" has been removed: `,my_desktop);
