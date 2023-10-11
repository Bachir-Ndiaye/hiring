"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Location = void 0;
var Location = /** @class */ (function () {
    function Location(id, latitude, longitude, altitude) {
        this.id = 0;
        this.latitude = 0;
        this.longitude = 0;
        this.altitude = 0;
        // Same location handle
        if ((this.latitude == latitude) && (this.longitude == longitude) && (this.altitude == altitude)) {
            return this;
        }
        this.id = id;
        this.latitude = latitude;
        this.longitude = longitude;
        this.altitude = altitude;
    }
    return Location;
}());
exports.Location = Location;
