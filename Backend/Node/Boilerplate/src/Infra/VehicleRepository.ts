import { Vehicle } from "../Domain/Vehicle";

export class VehicleRepository {

    vehicles : Vehicle[];

    constructor (vehicles : Vehicle[]) {
        this.vehicles = vehicles.map((vehicle : Vehicle) => vehicle);
    }
}