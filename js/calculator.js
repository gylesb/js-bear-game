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
    return Math.round(this.EarthAge(date) / .24)
  }

  VenusAge(date) {
    return Math.round(this.EarthAge(date) / .62);
  }

  MarsAge(date) {
    return Math.round(this.EarthAge(date) / 1.88);
  }

  JupiterAge(date) {
    return Math.round(this.EarthAge(date) / 11.86);
  }

  LifeExpectancy(gender) {
    let averageEarthLife = 79;
    if (gender == "male") {
      return averageEarthLife -= 3;
    } else if
      (gender !== "male") {
      return averageEarthLife += 5;
    }
  }

  LifeEarth(gender, date) {
    let age = Math.round(this.EarthAge(date));
    let earthExp = Math.round(this.LifeExpectancy(gender));
    if (age > earthExp)
    {
      return ("outlived your life expectancy and have 0");
    }
      else {
      return earthExp - age;
    }
  }

  LifeMercury(gender, date) {
    let age = Math.round(this.MercuryAge(date));
    let mercuryExp = Math.round(this.LifeExpectancy(gender) / .24);
    if (age > mercuryExp)
    {
      return ("outlived your life expectancy and have 0");
    }
      else {
      return mercuryExp - age;
    }
  }

  LifeVenus(gender, date) {
    let age = Math.round(this.VenusAge(date));
    let venusExp = Math.round(this.LifeExpectancy(gender) / .62);
    if (age > venusExp)
    {
      return ("outlived your life expectancy and have 0");
    }
      else {
      return venusExp - age;
    }
  }

  LifeMars(gender, date) {
    let age = Math.round(this.MarsAge(date));
    let marsExp = Math.round(this.LifeExpectancy(gender) / 1.88);
    if (age > marsExp)
    {
      return ("outlived your life expectancy and have 0");
    }
      else {
      return marsExp - age;
    }
  }

  LifeJupiter(gender, date) {
    let age = Math.round(this.JupiterAge(date));
    let jupiterExp = Math.round(this.LifeExpectancy(gender) / 11.86);
    if (age > jupiterExp)
    {
      return ("outlived your life expectancy and have 0");
    }
      else {
      return jupiterExp - age;
    }
  }
}
