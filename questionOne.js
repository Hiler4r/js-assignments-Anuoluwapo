let fullName = "Anuoluwapo Oyedele"
let regexName = /^[A-Za-z\s]+$/
let result = regexName.test(fullName)


let phoneNumber = "08125020560"
let regexNumber = /^0\d{10}$/
let resultNumber = regexNumber.test(phoneNumber)
console.log(resultNumber)

let universityName = "@tasfued.edu.ng"
let generateEmail = result && resultNumber ? fullName.toLowerCase().split(" ").join("") + phoneNumber.slice(7) + universityName : "invalid email"


let isValid = result && resultNumber ? `your email generation is successful: ${generateEmail}` : "invalid"
console.log(isValid)