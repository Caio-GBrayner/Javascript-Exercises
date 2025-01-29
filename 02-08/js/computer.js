class Computer {
    constructor(
        name,
        processor,
        ram,
        storage,
        os,
        wifi,
        monitor,
        wifiBand2G,
        wifiBand5G,
    ) {
            this.name = name;
            this.processor = processor;
            this.ram = ram;
            this.storage = storage;
            this.os = os;
            this.wifi = wifi;
            this.monitor = monitor;
            this.wifiSpeed = {
                lowSpeed: wifiBand2G,
                highSpeed: wifiBand5G
            };
    }
    toggleWifi(wifiStatus) {
        this.wifi = wifiStatus;
    }
    newWifiSpeed(upgrade2G, upgrade5G){
        this.wifiBand2G = upgrade2G;
        this.wifiBand5G = upgrade5G;
    }
}

export default Computer;