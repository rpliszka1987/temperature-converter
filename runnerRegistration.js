let raceNumber = Math.floor(Math.random() * 1000);

let registerRunner = false;
let runnerAge = 18;

if (runnerAge > 18 && registerRunner) {
  raceNumber += 1000;
}

if (runnerAge > 18 && registerRunner === true) {
  console.log(`Your race is at 9:30 AM and your race number is ${raceNumber}`);
} else if (runnerAge > 18 && registerRunner === false) {
  console.log(`Your race is at 11:00 AM and your race number is ${raceNumber}`);
} else if (runnerAge < 18) {
  console.log(`Your race is at 12:30 PM and your race number is ${raceNumber}`);
} else {
  console.log("Please go see registration desk for more information.");
}
