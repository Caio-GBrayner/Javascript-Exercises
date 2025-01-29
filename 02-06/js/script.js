const laptop = {
    screens : {
        resolution : 1080,
        displaytype : "LCD",
        touchEnable : false
    },
    poitingDevice : "Trackpad",
    ram: "16 GB",
    storage : "512 GB",
    wifi : true, 
    toggleWifi : function (wifi_status){
        this.wifi = wifi_status;
    },
    bands : {
        speed_wb_2_5g : 150,
        speed_wb_5g : 1000
    },
    wifiBands : function (wb_2_5g, wb_5g){
        this.bands.speed_wb_2_5g = wb_2_5g;
        this.bands.speed_wb_5g = wb_5g;
    }
};

console.log("The laptop Storage is: ",laptop.storage);
console.log("The laptop screen resolution is: ", laptop.screens.resolution);

var query = "ram"
console.log("The laptop RAM is: ", laptop[query]);

console.log("2.5g speed before: ", laptop.bands.speed_wb_2_5g);
console.log("2.5g speed before: ", laptop.bands.speed_wb_5g);

laptop.wifiBands(1000, 2000);

console.log("2.5g speed after: ", laptop.bands.speed_wb_2_5g);
console.log("2.5g speed after: ", laptop.bands.speed_wb_5g);


