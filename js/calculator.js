export class Calc {
  constructor() {
 }

  AgeToSeconds(age) {
    return age * 31556952;
  }

  DateToSeconds(date) {
    return this.EarthAge(date) * 31556952;
  }

  DatesDifference(dateOne, dateTwo) {
    return (this.DateToSeconds(dateTwo)) - (this.DateToSeconds(dateOne)) / 1000;
  }

  EarthAge(date) {
    let currentdate = new Date();
    let birthdate = new Date(date);
    const age = new Date(currentdate - birthdate).getFullYear()-1970;
    return age;
  }

  MercuryAge(date) {
    return Math.round(100*(this.EarthAge(date) / .24))/100;
  }

  VenusAge(date) {
    return Math.round(100*(this.EarthAge(date) / .62))/100;
  }

  MarsAge(date) {
    return Math.round(100*(this.EarthAge(date) / 1.88))/100;
  }

  JupiterAge(date) {
    return Math.round(100*(this.EarthAge(date) / 11.86))/100;
  }

  LifeExpectancy(gender) {
    let averageEarthLife = 70;
    if (gender == "Male") {
      return averageEarthLife -= 10;
    } else if
      (gender !== "Male") {
      return averageEarthLife += 10;
    }
  }
}
