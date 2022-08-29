let houseArea = (width, length) => {
  return width * length;
};

console.log(`The area of the house is ${houseArea(5, 100)}`);

// This is an example of a helper function. Which uses another function to help calculate the area.
let houseSquareFeel = (width, length, height) => {
  return houseArea(width, length) * height;
};

console.log(`The total area of the house is ${houseSquareFeel(10, 10, 10)}`);

let websiteAccess = (age) => {
  if (age < 18) {
    console.log(`You are only ${age} and too young to use the site.`);
  } else if (age > 50) {
    console.log(`You are too old to be on this site.`);
  } else {
    console.log(`Welcome to the site.`);
  }
};

websiteAccess(14);
