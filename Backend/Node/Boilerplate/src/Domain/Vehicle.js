"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicle = void 0;
var Vehicle = /** @class */ (function () {
    function Vehicle(plateNumber, isParkerd) {
        this.location = null;
        this.fleets = null;
        this.id = (new Date()).getTime();
        this.plateNumber = plateNumber;
        this.isParked = isParkerd || false;
    }
    // Scenario 5
    Vehicle.prototype.park = function (location) {
        if (location) {
            if (this.location === location && this.isParked) {
                return 'ALREADY_AT_THIS_LOCATION';
            }
            this.location = location;
            this.isParked = true;
            return this.location;
        }
        else {
            return 'NO_LOCATION_GIVEN';
        }
    };
    return Vehicle;
}());
exports.Vehicle = Vehicle;
