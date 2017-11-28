import { HungryBear } from './../js/hungrybear.js';

describe('HungryBear', function() {
  let fuzzy = new HungryBear("Fuzzy");

  beforeEach(function() {
    fuzzy = new HungryBear("Fuzzy");
    jasmine.clock().install();
    fuzzy.setLevelMed();
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

  it('should have a food level of twelve if it is fed', function() {
    jasmine.clock().tick(8000);
    console.log("food level is: "+fuzzy.foodLevel);
    fuzzy.feed();
    console.log("food level is: "+fuzzy.foodLevel);
    expect(fuzzy.foodLevel).toEqual(12);
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

  it('should increase healthLevel and sleepLevel when sleep is run',
  function() {
    fuzzy.sleep();
    expect(fuzzy.healthLevel).toEqual(51);
    expect(fuzzy.sleepLevel).toEqual(20);
  });

  it('should decrease healthLevel, and increase shelterLevel and activityLevel when build is run',
  function() {
    fuzzy.build();
    expect(fuzzy.healthLevel).toEqual(47);
    expect(fuzzy.shelterLevel).toEqual(15);
    expect(fuzzy.activityLevel).toEqual(11);
  });

  it('should switch difficulty after one minute of play',
  function() {
    fuzzy.foodLevel = 1000;
    fuzzy.moodLevel = 1000;
    fuzzy.sleepLevel = 1000;
    fuzzy.activityLevel = 1000;
    fuzzy.shelterLevel = 1000;
    fuzzy.healthLevel = 5000;
    fuzzy.difficultySwitchHard();
    jasmine.clock().tick(121001);
    expect(fuzzy.foodLevel).toEqual(878);
    // expect(fuzzy.moodLevel).toEqual(860);
    // expect(fuzzy.sleepLevel).toEqual(860);
    // expect(fuzzy.activityLevel).toEqual(860);
    // expect(fuzzy.shelterLevel).toEqual(860);
    // expect(fuzzy.healthLevel).toEqual(4840);
  })


});
