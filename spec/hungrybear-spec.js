import { HungryBear } from './../js/hungrybear.js';

describe('HungryBear', function() {
  let fuzzy = new HungryBear("Fuzzy");

  beforeEach(function() {
    fuzzy = new HungryBear("Fuzzy");
    jasmine.clock().install();
    fuzzy.setHunger();
  });

  afterEach(function() {
    console.log("I reset");
    jasmine.clock().uninstall();
  });

  it('should have a name and a food level of 10 when it is created', function() {
    expect(fuzzy.name).toEqual("Fuzzy");
    expect(fuzzy.foodLevel).toEqual(10);
  });


  it('should have a food level of 7 after 3001 milliseconds', function() {
    jasmine.clock().tick(3001);
    expect(fuzzy.foodLevel).toEqual(7);
  });

  it('should get very hungry if the food level drops below zero', function() {
    fuzzy.foodLevel = 0;
    console.log("food level is: "+fuzzy.foodLevel);
    expect(fuzzy.didYouGetEaten()).toEqual(true);
  });

  it('should get very hungry if 10 seconds pass without feeding', function() {
    jasmine.clock().tick(10001);
    console.log("food level is: "+fuzzy.foodLevel);
    expect(fuzzy.didYouGetEaten()).toEqual(true);
  });

  it('should have a food level of ten if it is fed', function() {
    jasmine.clock().tick(7001);
    fuzzy.feed();
    console.log("food level is: "+fuzzy.foodLevel);
    expect(fuzzy.foodLevel).toEqual(10);
  });

  it('should not be able to feed the bear after being eaten', function() {
    jasmine.clock().tick(10001);
    fuzzy.feed();
    expect(fuzzy.foodLevel).toEqual(0);
  });

  it('should not feed with a negative foodLevel',
  function() {
    jasmine.clock().tick(12001);
    fuzzy.feed();
    expect(fuzzy.foodLevel).toEqual(0);
  });

});
