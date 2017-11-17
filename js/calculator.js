export class Calc {
  constructor(userAge) {
    userAge = parseInt(userAge);
    this.userAge = userAge;
  }

  AgeToSeconds() {
    return this.userAge * 31556952;
  }

  DateToSeconds() {
    let date = new Date();
    let seconds = Math.round(date.getTime() / 1000);
    return seconds;
  }

  DatesDifference() {
    let dateOne = new Date(dateOne);
    let dateTwo = new Date(dateTwo);
    return (new Date(dateOne) - new Date(dateTwo)) / 1000;
  }

  EarthAge(date){
    let currentdate = new Date();
    let birthdate = new Date(date);
    const age = new Date(currentdate - birthdate).getFullYear()-1970;
    return age;
  }
}
