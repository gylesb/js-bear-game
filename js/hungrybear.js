export class HungryBear {

  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
  }

  setHunger() {
    setInterval(() => {
      this.foodLevel--;
    }, 1000);
  }

  didYouGetEaten() {
    if (this.foodLevel > 0) {
      return false;
    } else {
      return true;
    }
  }

  feed() {
    console.log(this.foodLevel);
    if (this.foodLevel > 0) {
      this.foodLevel = 10;
    } else if (this.foodLevel <= 0) {
      this.foodLevel = 0;
    }
  }
}
