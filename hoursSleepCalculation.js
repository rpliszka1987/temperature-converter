// User sleep hours total for each day of week
const getSleepHours = (day) => {
  let userDay = day.toLowerCase();
  switch (userDay) {
    case "monday":
      return 5;
      break;
    case "tuesday":
      return 8;
      break;
    case "wednesday":
      return 8;
      break;
    case "thursday":
      return 8;
      break;
    case "friday":
      return 8;
      break;
    case "saturday":
      return 8;
      break;
    case "sunday":
      return 8;
      break;
    default:
      return "Pick a day of the week.";
      break;
  }
};

// Adding user total amount of hours of sleep
const getActualSleepHours = () => {
  let totalHours =
    getSleepHours("monday") +
    getSleepHours("tuesday") +
    getSleepHours("wednesday") +
    getSleepHours("thursday") +
    getSleepHours("friday") +
    getSleepHours("saturday") +
    getSleepHours("sunday");
  return totalHours;
};

// Calculation of perfect amount of sleep
const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
};

// Check if user is getting enough hours of sleep.
const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log(`You are getting perfect amount of sleep!`);
  } else if (actualSleepHours > idealSleepHours) {
    console.log(
      `You slept ${actualSleepHours} which is ${
        actualSleepHours - idealSleepHours
      } then the needed amount!`
    );
  } else if (actualSleepHours < idealSleepHours) {
    console.log(
      `You slept ${actualSleepHours} which is under ${
        idealSleepHours - actualSleepHours
      } the standard amount! You should get more rest!`
    );
  }
};

calculateSleepDebt();
