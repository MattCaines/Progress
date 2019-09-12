var firstname = prompt("What is your first name?")
var lastname = prompt("What is your last name?")
var age = prompt("How old are you?")
var height = prompt("How tall are you?cm")
var petname = prompt("What is your pets name?")


var nameCond = null
var ageCond = null
var heightCond = null
var petCond = null


if (firstname[0] === lastname[0]) {
  nameCond = true
} else {
  nameCond = false
}

if (age > 20 && age < 30) {
  ageCond = true
} else {
  ageCond = false
}

if (height >= 170) {
  heightCond = true
} else {
  heightCond = false
}


if (petname[petname.length - 1] === "y") {
  petCond = true
} else {
  petCond = false
}

if (nameCond && ageCond && heightCond && petCond) {
  console.log("Congratulations");
} else {
  console.log("wah wah");
}
