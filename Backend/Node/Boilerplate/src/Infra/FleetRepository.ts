
import { Fleet } from '../Domain/Fleet';
import { User } from '../Domain/User';
import { Vehicle } from '../Domain/Vehicle';

export class FleetRepository {
    
     fleets: Fleet[];

     constructor (fleets : Fleet[] | []) {
        this.fleets = fleets.map((fleet : Fleet) => fleet);
     }

     getFleets() {
        return this.fleets;
     }

     addFleet(fleetToAdd : Fleet){
        if(!fleetToAdd.user.id){
            throw new Error('NO_USER_FOUND_FOR_CURRENT_FLEET');
        }
        this.fleets.push(fleetToAdd);
     }

     removeFleet(fleetToRemove : Fleet){
        const index = this.fleets.findIndex((fleet : Fleet) => fleet.id === fleetToRemove.id);

        this.fleets.splice(index, 1);

        return this.fleets;
     }

     getFleetById(value : number, id: string) {
        const fleet  = this.fleets.find((fleet : Fleet) =>  fleet.id === value);

        if(!fleet){
            throw new Error('NO_FLEET_FOUND');
        }

        return fleet;
     }

     getVehiclesByFleetId (id : number) {

        const fleet = this.getFleetById(id, 'id');

        if(!fleet){
            throw new Error('NO_FLEET_FOUND');
        }

        return fleet.vehicles as Vehicle[];
     }
}
