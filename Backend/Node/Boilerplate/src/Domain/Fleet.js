"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fleet = void 0;
var User_1 = require("./User");
var Fleet = /** @class */ (function () {
    function Fleet(userId, name) {
        this.user = new User_1.User();
        this.vehicles = [];
        // NOTA : We assume that the user already exists
        this.id = (new Date()).getTime();
        this.user.id = userId;
        this.name = name || '';
    }
    // Scenario 1 & 2
    Fleet.prototype.registerVehicle = function (newVehicle) {
        // Check if vehicle is not already registred in the fleet
        var vehicleParked = this.vehicles.find(function (vehicle) { return ( /*(vehicle.isParked) && */(vehicle.plateNumber === newVehicle.plateNumber)); });
        if (!vehicleParked) {
            this.vehicles.push(newVehicle);
        }
        else {
            return 'VEHICLE_ALREADY_PARKED_IN_FLEET';
        }
    };
    Fleet.prototype.getVehicleByPlateNumber = function (plateNumber) {
        var vehicle = this.vehicles.find(function (vehicle) { return vehicle.plateNumber === plateNumber; });
        if (!vehicle) {
            throw new Error('NO_VEHICULE_FOUND_FOR_GIVE_PLATENUMBER');
        }
        return vehicle;
    };
    Fleet.prototype.registerVehicleInNewFleet = function (myFleet, otherFleet, plateNumber, persit) {
        if (persit === void 0) { persit = false; }
        if (otherFleet.vehicles) {
            // Search for registration
            var registredVehicleInOtherFleet = otherFleet.vehicles.find(function (vehicle) { return ((vehicle.isParked) && (vehicle.plateNumber === plateNumber)); });
            if (persit && registredVehicleInOtherFleet) {
                // The Vehicle is registred -> I can registred it into my own feet
                myFleet.registerVehicle(registredVehicleInOtherFleet);
            }
        }
    };
    return Fleet;
}());
exports.Fleet = Fleet;
