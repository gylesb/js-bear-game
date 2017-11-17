import { Calc } from './../js/calculator.js';

describe('Calc', function () {

  it('should take a person’s age in years and convert it into seconds.', function () {
    let calc = new Calc(1);
    expect(calc.AgeToSeconds()).toEqual(31556952);
  });

  it('should take a person’s birthdate and convert it to seconds.', function () {
    let calc = new Calc("2015-08-25");
    expect(calc.DateToSeconds()).toEqual(1510949067);
  });

  // it('should take 2 dates and convert the difference into seconds.', function () {
  //   let calc = new Calc("2015-08-25", "2016-08-25");
  //   expect(calc.DatesDifference()).toEqual(31556952);
  // });

  // it('should take a person’s birthdate and calculate their age on earth.', function () {
  //   let calc = new Calc("1968-08-08");
  //   expect(calc.EarthAge()).toEqual(49);
  // });
});
