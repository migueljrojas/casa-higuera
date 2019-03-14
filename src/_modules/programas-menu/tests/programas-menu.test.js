'use strict';

var ProgramasMenu = require('../programas-menu');

describe('ProgramasMenu View', function() {

  beforeEach(function() {
    this.programasMenu = new ProgramasMenu();
  });

  it('Should run a few assertions', function() {
    expect(this.programasMenu);
  });

});
