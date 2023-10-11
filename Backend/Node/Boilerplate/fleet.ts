#!/usr/bin/env yarn ts-node

import { program } from 'commander';
import { FleetCommand } from './src/App/Command/FleetCommand';

const fleetCommand = new FleetCommand();

program
  .command('create <userId>')
  .description('Create a new fleet for the specified user. We assume that the user already exists')
  .action((userId: number) => {
    const fleetId = fleetCommand.createFleet(userId);
    console.log(`FleetID: ${fleetId}`);
  });

program
  .command('register-vehicle <fleetId> <vehiclePlateNumber>')
  .description('Register a vehicle in a fleet')
  .action((fleetId: number, vehiclePlateNumber: string) => {
    const result = fleetCommand.registerVehicle(fleetId, vehiclePlateNumber);
    console.log(result);
  });

program
  .command('localize-vehicle <fleetId> <vehiclePlateNumber> <lat> <lng> [alt]')
  .description('Localize a vehicle in a fleet given his location')
  .action((fleetId: number, vehiclePlateNumber: string, latitude: number, longitude: number, altitude: number) => {
    const result = fleetCommand.localizeVehicle(fleetId, vehiclePlateNumber, latitude, longitude, altitude);
    console.log(result);
  });

program.parse(process.argv);
