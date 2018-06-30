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

function sayHiToGrandma(string) {
  if (lowercase) {
  "I can\'t hear you!"
  }
  if (uppercase) {
 "YES INDEED!"
}
  if (mixedCase) {
  "I love you, too!"
  }
}
