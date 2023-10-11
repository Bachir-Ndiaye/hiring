"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FleetRepository = void 0;
var FleetRepository = /** @class */ (function () {
    function FleetRepository(fleets) {
        this.fleets = fleets.map(function (fleet) { return fleet; });
    }
    FleetRepository.prototype.getFleets = function () {
        return this.fleets;
    };
    FleetRepository.prototype.addFleet = function (fleetToAdd) {
        if (!fleetToAdd.user.id) {
            throw new Error('NO_USER_FOUND_FOR_CURRENT_FLEET');
        }
        this.fleets.push(fleetToAdd);
    };
    FleetRepository.prototype.removeFleet = function (fleetToRemove) {
        var index = this.fleets.findIndex(function (fleet) { return fleet.id === fleetToRemove.id; });
        this.fleets.splice(index, 1);
        return this.fleets;
    };
    FleetRepository.prototype.getFleetById = function (value, id) {
        var fleet = this.fleets.find(function (fleet) { return fleet.id === value; });
        if (!fleet) {
            throw new Error('NO_FLEET_FOUND');
        }
        return fleet;
    };
    FleetRepository.prototype.getVehiclesByFleetId = function (id) {
        var fleet = this.getFleetById(id, 'id');
        if (!fleet) {
            throw new Error('NO_FLEET_FOUND');
        }
        return fleet.vehicles;
    };
    return FleetRepository;
}());
exports.FleetRepository = FleetRepository;
