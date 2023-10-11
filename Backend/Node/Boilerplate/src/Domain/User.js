"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User() {
        var uuid = (new Date()).getTime();
        this.id = uuid || -1;
        this.pseudo = 'SECRET_PSEUDO_' + (uuid ? uuid : '0');
        this.password = 'SECRET_PASSWORD_' + (uuid ? uuid : '0');
    }
    return User;
}());
exports.User = User;
