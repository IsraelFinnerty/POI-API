'use strict';

const assert = require('chai').assert;
const POIService = require('./poi-service');
const fixtures = require('./fixtures.json');
const _ = require('lodash');

suite('User API tests', function () {

    let users = fixtures.users;
    let newUser = fixtures.newUser;

    const POI = new POIService(fixtures.POI);

    setup(async function () {
        await POI.deleteAllUsers();
    });

    teardown(async function () {
        await POI.deleteAllUsers();
    });
/*
  test('get venue details', async function () {

  get categories

  get locations
 */


    test('add a venue', async function () {
        const returnedVenue = await POI.addVenue(newVenue);
        assert(_.some([returnedVenue], newVenue), 'returned Venue must be a superset of new Venue');
        assert.isDefined(returnedVenue._id);
    });

    test('get one venue', async function() {
        const u1 = await POI.addVenue(newVenue);
        const u2 = await POI.findOne(u1._id);
        assert.deepEqual(u1, u2);
    });

    test('get all venues', async function() {
        for (let u of venues) {
            await POI.addVenue(u);
        }

        const allVenues = await POI.getVenues();
        assert.equal(allVenues.length, venues.length);
    });

});