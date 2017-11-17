export class Calc {
  constructor() {
 }

  AgeToSeconds(age) {
    return age * 31556952;
  }

  DateToSeconds(date) {
    return this.EarthAge(date) * 31556952;
  }

  // DatesDifference(dateOne, dateTwo) {
  //   let dateOne = new Date(dateOne);
  //   let dateTwo = new Date(dateTwo);
  //   return (new Date(dateOne) - new Date(dateTwo)) / 1000;
  // }

  EarthAge(date) {
    let currentdate = new Date();
    let birthdate = new Date(date);
    const age = new Date(currentdate - birthdate).getFullYear()-1970;
    return age;
  }

  MarsAge(date) {
    return Math.round(100*(this.EarthAge(date) / 1.88))/100;
  }
}
