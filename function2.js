const convertToCelsius = function(fahrenheit) {
  return parseInt((fahrenheit - 32) * 5 / 9)
}

console.log(convertToCelsius(63))
console.log(convertToCelsius(100))
