#!/usr/bin/env yarn ts-node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = require("commander");
var FleetCommand_1 = require("./src/App/Command/FleetCommand");
var fleetCommand = new FleetCommand_1.FleetCommand();
commander_1.program
    .command('create <userId>')
    .description('Create a new fleet for the specified user. We assume that the user already exists')
    .action(function (userId) {
    var fleetId = fleetCommand.createFleet(userId);
    console.log("FleetID: ".concat(fleetId));
});
commander_1.program
    .command('register-vehicle <fleetId> <vehiclePlateNumber>')
    .description('Register a vehicle in a fleet')
    .action(function (fleetId, vehiclePlateNumber) {
    var result = fleetCommand.registerVehicle(fleetId, vehiclePlateNumber);
    console.log(result);
});
commander_1.program
    .command('localize-vehicle <fleetId> <vehiclePlateNumber> <lat> <lng> [alt]')
    .description('Localize a vehicle in a fleet given his location')
    .action(function (fleetId, vehiclePlateNumber, latitude, longitude, altitude) {
    var result = fleetCommand.localizeVehicle(fleetId, vehiclePlateNumber, latitude, longitude, altitude);
    console.log(result);
});
commander_1.program.parse(process.argv);
