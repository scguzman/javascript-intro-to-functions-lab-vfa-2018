function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  return console.log('HELLO')
}

function logWhisper(string) {
  return console.log('hello')
}

function logLove(string) {
  return console.log('I love you, Grandma.')
}

var uppercase = "HELLO!"
uppercase.toUpperCase() === uppercase
 
var lowercase = 'hello!'
lowercase.toLowerCase() === lowercase

var mixedCase = 'I love you, too.'
mixedCase.toUpperCase() === mixedCase
mixedCase.toLowerCase() === mixedCase
 
/* var greeting1 = "I can't hear you"
var greeting2 = "YES INDEED!"
var greeting3 = "I love you, too."
*/

function sayHiToGrandma(string) {
  if (uppercase) {
  greeting = "YES INDEED!"
  }
  if (lowercase) {
  greeting = "I can't hear you!"
  }
  if (mixedCase) {
  greeting = "I love you, too!"
  }
}
