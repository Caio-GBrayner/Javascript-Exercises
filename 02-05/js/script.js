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
    wifiBands : function (wb_2_5g, wb_5g){
        this.speed_wb_2_5g = wb_2_5g;
        this.speed_wb_5g = wb_5g;
    }
};

console.log("The laptop Object: ",laptop);