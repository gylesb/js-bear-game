export class HungryBear {

  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
    this.moodLevel = 10;
    this.sleepLevel = 10;
    this.activityLevel = 10;
    this.shelterLevel = 10;
    this.healthLevel = 50;
  }

  setLevelEasy() {
    setInterval(() => {
      this.foodLevel--;
      this.sleepLevel--;
    }, 1500);
  }

  setLevelMed() {
    setInterval(() => {
      this.foodLevel--;
      this.moodLevel--;
      this.sleepLevel--;
      this.activityLevel--;
      this.healthLevel--;
    }, 1000);
  }

  setLevelHard() {
    setInterval(() => {
      this.foodLevel--;
      this.moodLevel--;
      this.sleepLevel--;
      this.activityLevel--;
      this.shelterLevel--;
      this.healthLevel - 2;
    }, 500);
  }

  survivalTime() {
    setTimeout(function(){
      alert("Congradulations you survived!");
    }, 1800000);
  }

  difficultySwitchMedium() {
    setTimeout(function(){
      alert("Good Job! Advance to medium level.");
      setLevelMed();
    }, 600000);
  }

  difficultySwitchHard() {
    setTimeout(function(){
      alert("Great! Advance to hard level.");
      setLevelHard();
    }, 600000);
  }

  didYouGetEaten() {
    if (this.foodLevel > 0 && this.moodLevel > 0 && this.sleepLevel > 0 && this.activityLevel > 0) {
      return false;
    } else {
      return true;
    }
  }

  feed() {
    console.log(this.foodLevel);
    if (this.foodLevel > 0) {
      this.foodLevel += 10;
      this.sleepLevel -= 5;
      this.healthLevel++;
    } else if (this.foodLevel <= 0) {
      this.foodLevel = 0;
    }
  }

  sleep() {
    console.log(this.sleepLevel);
    if (this.sleepLevel > 0) {
      this.sleepLevel += 10;
      this.foodLevel -= 5;
      this.healthLevel++;
    } else if (this.sleepLevel <= 0) {
      this.sleepLevel = 0;
    }
  }

  mood() {
    console.log(this.moodLevel);
    if (this.moodLevel > 0) {
      this.moodLevel += 10;
      this.activityLevel -= 5;
      this.foodLevel += 3;
      this.sleepLevel -= 3;
      this.healthLevel += 3;
    } else if (this.moodLevel <= 0) {
      this.moodLevel = 0;
    }
  }

  play() {
    console.log(this.activityLevel);
    if (this.activityLevel > 0) {
      this.activityLevel += 10;
      this.moodLevel -= 5;
      this.sleepLevel += 3;
      this.foodLevel -= 3;
      this.healthLevel -= 3;
    } else if (this.activityLevel <= 0) {
      this.activityLevel = 0;
    }
  }

  build() {
    if (this.shelterLevel > 0) {
      this.shelterLevel += 5;
      this.healthLevel -= 3;
      this.activityLevel += 1;
      this.moodLevel += 1;
      this.foodLevel -= 2;
      this.sleepLevel -= 1;
    }
  }
}
