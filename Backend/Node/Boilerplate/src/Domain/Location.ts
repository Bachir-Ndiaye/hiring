export class Location {
    
    id : number = 0;
    latitude : number = 0;
    longitude : number = 0;
    altitude : number = 0;

    constructor (id : number, latitude : number, longitude : number, altitude : number) {

        // Same location handle
        if((this.latitude == latitude) && (this.longitude == longitude) && (this.altitude == altitude)){
            return this;
        }

        this.id = id;
        this.latitude = latitude;
        this.longitude = longitude;
        this.altitude = altitude;
    }
}
