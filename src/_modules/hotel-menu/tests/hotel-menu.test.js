'use strict';

var HotelMenu = require('../hotel-menu');

describe('HotelMenu View', function() {

  beforeEach(function() {
    this.hotelMenu = new HotelMenu();
  });

  it('Should run a few assertions', function() {
    expect(this.hotelMenu);
  });

});
