// Set kelvin temperature
let kelvin = 0;
// Convert kelvin to celsius
let celsius = kelvin - 273;
// converting celsius to fahrenheit and rounds it down
let fahrenheit = Math.floor(celsius * (9/5) + 32);
let newton = Math.floor(celsius * (33/100));

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
console.log(newton);