import { Calc } from './../js/calculator.js';

describe('Calc', function () {

  it('should take a person’s age in years and convert it into seconds.', function () {
    let calc = new Calc();
    expect(calc.AgeToSeconds(1)).toEqual(31556952);
  });

  it('should take a person’s birthdate and convert it to seconds.', function () {
    let calc = new Calc();
    expect(calc.DateToSeconds("2015-08-25")).toEqual(63113904);
  });

  it('should take 2 dates and convert the difference into seconds.', function () {
    let calc = new Calc();
    expect(calc.DatesDifference("2015-08-25", "2016-08-25")).toEqual(31556952);
  });

  it('should take a person’s birthdate and calculate their age on Earth.', function () {
    let calc = new Calc();
    expect(calc.EarthAge("1968-08-08")).toEqual(49);
  });

  it('should take a person’s birthdate and calculate their age on Mercury.', function () {
    let calc = new Calc();
    expect(calc.MercuryAge("1968-08-08")).toEqual(204.17);
  });

  it('should take a person’s birthdate and calculate their age on Venus.', function () {
    let calc = new Calc();
    expect(calc.VenusAge("1968-08-08")).toEqual(79.03);
  });

  it('should take a person’s birthdate and calculate their age on Mars.', function () {
    let calc = new Calc();
    expect(calc.MarsAge("1968-08-08")).toEqual(26.06);
  });

  it('should take a person’s birthdate and calculate their age on Jupiter.', function () {
    let calc = new Calc();
    expect(calc.JupiterAge("1968-08-08")).toEqual(4.13);
  });

  it('should take a person’s gender and calculate their life expectancy.', function () {
    let calc = new Calc();
    expect(calc.LifeExpectancy("Male")).toEqual(60);
  });



});
