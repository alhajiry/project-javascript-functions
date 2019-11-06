"use strict";

function logName(name) {
    console.log(`Hello, ${name}!`)
  }

  const nameA = 'Alpha'
  const nameB = 'Betty'

  logName(nameA)
  logName(nameB)

  // Feel free to have some experiments with functions
/////////////////////////////////

const showNameWithAge = (name = 'Unknown', age = 0) => {
    const nameWithAge = `${name} is ${age} year(s) old`

    return nameWithAge // return the value to be used later
  }

  const alpha = showNameWithAge('Alpha', 11)
  const betty = showNameWithAge('Betty', 42)
  const gamma = showNameWithAge('Gamma', 30)

  console.log(alpha)
  console.log(betty)
  console.log(gamma)

///////////////
const myAge = prompt('How old are you?')

function isAgeOlderThan18(age) {
  if (age >= 18) return true
  else return false
}

function checkAllowance() {
  // call another function inside a function
  const alcdcxlowed = isAgeOlderThan18(myAge)

  if (allowed) {
    alert ('You are allowed')
  }
  else alert ('You are not allowed')
}

function canHaveNationalID() {

  const can = isAgeOlderThan18(myAge)

  if (can) alert ('You can have national ID')
  else alert ('You can not have national ID yet')
}

checkAllowance()
canHaveNationalID()

// if (checkAllowance()) {
//     canHaveNationalID()
// }

console.log('myAge:', myAge)
console.log('allowedMessage:', allowedMessage)
console.log('canHaveMessage:', canHaveMessage)

//Check People Name/////
const names = ["Darth Vader", "Darth Nihilus", "Obi-Wan", "Anakin Skywalker"]

showNames = names => {

    for (i = 0; i < names.length; i++) {
        const name = names[i]

        console.log(`[${i + 1}] ${name}`)
    }
}