import { Fleet } from "./Fleet";
import { Location } from "./Location";


export class Vehicle {

    id : number;
    plateNumber : string;
    isParked : boolean;
    location : Location | null = null;
    fleets : Fleet[] | null = null;

    constructor (plateNumber : string, isParkerd?: boolean) {
        this.id = (new Date()).getTime();
        this.plateNumber = plateNumber;
        this.isParked = isParkerd || false;
    }

    // Scenario 5
    park(location : Location){

        if(location){
            if(this.location  === location && this.isParked){
                return 'ALREADY_AT_THIS_LOCATION';
            }
    
            this.location = location;
            this.isParked = true;
    
            return this.location;
        }else{
            return 'NO_LOCATION_GIVEN'
        }
    }
}
