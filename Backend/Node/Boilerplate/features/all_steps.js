
const {Given, Then, When} = require('@cucumber/cucumber');
const assert = require('assert');
const {Vehicle} = require('../src/Domain/Vehicle');
const {Location} = require('../src/Domain/Location');
const { Fleet } = require('../src/Domain/Fleet');
const { User } = require('../src/Domain/User');

let user;
let myFleet;
let vehicle;
let location;
let result;
let duplicateRegistration;
let found = false;

// Background
Given('my fleet', () => {
    user = new User();
    myFleet = new Fleet(user.id, 'Fleet for candidates for Back End developers at FULLL');
});

Given('a vehicle', () => {
    vehicle = new Vehicle('EP-152-ZK'); 
});

Given('I have registered this vehicle into my fleet', () => {
    myFleet.registerVehicle(vehicle);
});

Given('a location', () => {
    location = new Location(1, 12.458547,-45.458574,1500);
});


// Scenario  1 : How the handle the critical annotation ?
When('I park my vehicle at this location', () => {
    vehicle.park(location);
});

Then('the known location of my vehicle should verify this location', () => {
    assert.strictEqual(vehicle.location, location, "THE VEHICLE IS WELL PARKED");
});

Given('my vehicle has been parked into this location', () => {
    // Already parked : line 36
});

When('I try to park my vehicle at this location', () => {
    // Park first time
    vehicle.park(location);

    // Park second time
    result = vehicle.park(location);
});

Then('I should be informed that my vehicle is already parked at this location', () => {
    assert.strictEqual(result, "ALREADY_AT_THIS_LOCATION", "THE VEHICLE IS ALREADY PARKED AT THE GIVEN LOCATION");
});

// Scenario 2
When('I register this vehicle into my fleet', () => {
    myFleet.registerVehicle(vehicle);
});

Then('this vehicle should be part of my vehicle fleet', () => {
    assert.strictEqual(myFleet.vehicles[0], vehicle, "THE VEHICLE IS PART OF MY FLEET");
});

When('I try to register this vehicle into my fleet', function () {
    // Second registration
    duplicateRegistration = myFleet.registerVehicle(vehicle);
});

Then('I should be informed this this vehicle has already been registered into my fleet', function () {
    assert.strictEqual(duplicateRegistration, "VEHICLE_ALREADY_PARKED_IN_FLEET", "THE VEHICLE IS ALREADY PARKED HERE, PLEASE CHANGE LOCATION");
});

Given('the fleet of another user', function () {
    const newUser = new User();

    // Find fleet in vehicle
    found = vehicle.fleets?.forEach((item) => {
        if(item.user.id === newUser.id){
            return true;
        }
    });
});

Given('this vehicle has been registered into the other user\'s fleet', function () {
   //assert.strictEqual(found, true, "THE VEHICLE HAS BEEN REGISTRED INTO THE OTHER USER'S FLEET");
});
