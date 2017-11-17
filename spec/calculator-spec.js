import { Calc } from './../js/calculator.js';

describe('Calc', function () {
  it('should take a person’s age in years and convert it into seconds.', function () {
    let calc = new Calc(1);
    expect(calc.ToSeconds()).toEqual(60);
  });
});
