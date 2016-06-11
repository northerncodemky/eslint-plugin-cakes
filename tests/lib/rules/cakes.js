/* eslint-env mocha */
'use strict';
var should = require('chai').should(); // eslint-disable-line no-unused-vars
let cakes = require('../../../lib/rules/cakes');

describe('Cakes rules', () => {
  it('should export an environment', () => {
    cakes.should.have.ownProperty('environments');
  });

  describe('Environments', () => {
    it('should provide a cakes environment', () => {
      cakes.environments.should.have.ownProperty('cakes');
    });

    describe('Cakes environment', () => {
      let env = cakes.environments.cakes;
      describe('globals', () => {
        it('should provide globals', () => {
          env.should.have.ownProperty('globals');
        });

        let expectedGlobals = [
          'Feature', 'Scenario', 'Given', 'When', 'Then', 'And', 'But'
        ];
        expectedGlobals.forEach((glob) => {
          describe(glob, () => {
            it(`should define ${glob} as a global`, () => {
              env.globals.should.have.ownProperty(glob);
            });

            it('should not be overwritable', () => {
              env.globals[glob].should.be.false;
            });
          });
        });
        it('should not define any unexpected globals', () => {
          Object.keys(env.globals).sort().should.deep.equal(expectedGlobals.sort());
        });
      });
    });
  });
});
