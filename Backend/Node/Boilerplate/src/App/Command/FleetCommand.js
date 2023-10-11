"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FleetCommand = void 0;
var Fleet_1 = require("../../Domain/Fleet");
var Location_1 = require("../../Domain/Location");
var Vehicle_1 = require("../../Domain/Vehicle");
var FleetRepository_1 = require("../../Infra/FleetRepository");
var FleetCommand = /** @class */ (function () {
    function FleetCommand() {
        this.fleetRepository = new FleetRepository_1.FleetRepository([]);
    }
    FleetCommand.prototype.createFleet = function (userId) {
        var fleet = new Fleet_1.Fleet(userId);
        this.fleetRepository.addFleet(fleet);
        return fleet.id;
    };
    FleetCommand.prototype.registerVehicle = function (fleetId, vehiclePlateNumber) {
        var fleet = this.fleetRepository.getFleetById(fleetId, 'id');
        var vehicle = new Vehicle_1.Vehicle(vehiclePlateNumber);
        fleet.registerVehicle(vehicle);
        return "> SUCCESSFULL REGISTRATION OF VEHICLE ".concat(vehiclePlateNumber, " IN FLEET ").concat(fleetId);
    };
    FleetCommand.prototype.localizeVehicle = function (fleetId, vehiclePlateNumber, latitude, longitude, altitude) {
        var fleet = this.fleetRepository.getFleetById(fleetId, 'id');
        var vehicle = fleet.getVehicleByPlateNumber(vehiclePlateNumber);
        if (vehicle) {
            var location_1 = new Location_1.Location((new Date().getTime()), latitude, longitude, altitude);
            var result = vehicle.park(location_1);
            return result ? "> VEHICLE ".concat(vehiclePlateNumber, " IS PARKED AT THE GIVEN LOCATION") : result;
        }
        else {
            throw new Error('VEHICLE_NOT_FOUND_IN_FLEET');
        }
    };
    return FleetCommand;
}());
exports.FleetCommand = FleetCommand;
