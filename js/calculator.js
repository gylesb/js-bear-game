export class Calc {
  constructor(userAge) {
    userAge = parseInt(userAge);
    this.userAge = userAge;
  }

  ToSeconds() {
    return this.userAge * 60;
  }

}
