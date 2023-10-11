import { User } from "./User";
import { Vehicle } from "./Vehicle";


export class Fleet{
   
    id: number;
    user : User = new User();
    name : string;
    vehicles : Vehicle[] = [];

    constructor(userId: number, name? : string) {

        // NOTA : We assume that the user already exists
        this.id = (new Date()).getTime();
        this.user.id = userId;
        this.name = name || '';
    }

    registerVehicle(newVehicle: Vehicle) {
        // Check if vehicle is not already registred in the fleet
        const vehicleParked = this.vehicles.find((vehicle : Vehicle) => (/*(vehicle.isParked) && */(vehicle.plateNumber === newVehicle.plateNumber)));

        if(!vehicleParked){
            this.vehicles.push(newVehicle);
        }else{
            return 'VEHICLE_ALREADY_PARKED_IN_FLEET';
        }
    }

    getVehicleByPlateNumber(plateNumber : string) {
        const vehicle = this.vehicles.find((vehicle : Vehicle) => vehicle.plateNumber === plateNumber);

        if(!vehicle){
            throw new Error('NO_VEHICULE_FOUND_FOR_GIVE_PLATENUMBER');
        }

        return vehicle;
    }

    registerVehicleInNewFleet(myFleet : Fleet, otherFleet : Fleet, plateNumber : string, persit = false){
        if(otherFleet.vehicles){
            // Search for registration
            const registredVehicleInOtherFleet = otherFleet.vehicles.find((vehicle : Vehicle) => ((vehicle.isParked) && (vehicle.plateNumber === plateNumber)));

            if(persit && registredVehicleInOtherFleet){
                // The Vehicle is registred -> I can registred it into my own feet
                myFleet.registerVehicle(registredVehicleInOtherFleet as Vehicle);
            }
        }
    }
}