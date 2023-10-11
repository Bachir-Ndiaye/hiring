"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleRepository = void 0;
var VehicleRepository = /** @class */ (function () {
    function VehicleRepository(vehicles) {
        this.vehicles = vehicles.map(function (vehicle) { return vehicle; });
    }
    return VehicleRepository;
}());
exports.VehicleRepository = VehicleRepository;
