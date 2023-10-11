import { Fleet } from '../../Domain/Fleet';
import { Location } from '../../Domain/Location';
import { Vehicle } from '../../Domain/Vehicle';
import { FleetRepository } from '../../Infra/FleetRepository';

export class FleetCommand {

    fleetRepository: FleetRepository;

    constructor () {
        this.fleetRepository = new FleetRepository([]);
    }

    createFleet(userId : number) {
        const fleet = new Fleet(userId);

        this.fleetRepository.addFleet(fleet);

        return fleet.id;
    }
    
    registerVehicle(fleetId : number, vehiclePlateNumber : string) {
        const fleet = this.fleetRepository.getFleetById(fleetId as number, 'id');

        const vehicle = new Vehicle(vehiclePlateNumber as string);

        fleet.registerVehicle(vehicle);

        return `> SUCCESSFULL REGISTRATION OF VEHICLE ${vehiclePlateNumber} IN FLEET ${fleetId}`;
    }
    
    localizeVehicle(fleetId : number, vehiclePlateNumber : string, latitude : number, longitude : number, altitude : number) {
        
        const fleet = this.fleetRepository.getFleetById(fleetId as number, 'id');
        const vehicle = fleet.getVehicleByPlateNumber(vehiclePlateNumber as string);

        if (vehicle) {
            const location = new Location((new Date().getTime()), latitude, longitude, altitude);
            const result = vehicle.park(location);
            return result ? `> VEHICLE ${vehiclePlateNumber} IS PARKED AT THE GIVEN LOCATION` : result;
        } else {
            throw new Error('VEHICLE_NOT_FOUND_IN_FLEET');
        }
    }
}