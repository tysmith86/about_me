'use strict';

var totalCorrect = 0; // Used for a running tally of correct answers

var userName = prompt('What is your name?');
console.log('The user\'s name is ', userName);

var isReady = prompt('Welcome ' + userName + ', are you ready to take the quiz?').toLowerCase();
console.log('Is the user ready?', isReady.toUpperCase());

if (isReady === 'yes' || isReady === 'y') {
  alert('Good luck!');
} else if (isReady === 'no' || isReady === 'n') {
  alert('That\'s too bad, you don\'t really have a choice!');
} else {
  alert('Well, that doesn\'t answer the question, so we\'ll just go ahead and start.');
}
function videoGameQA() {
  var videoGameQA = prompt('Do I play video games?').toLowerCase();
  console.log('videoGameQA =', videoGameQA);

  if (videoGameQA === 'yes' || videoGameQA === 'y') {
    console.log('The user answered this correctly.');
    alert('You are right!');
    totalCorrect++;
  } else if (videoGameQA === 'no' || videoGameQA === 'n') {
    console.log('The user answered this incorrectly.');
    alert('Wrong, I love video games...maybe a little too much!');
  } else {
    console.log('Invalid response');
    alert('What does that have to do with me playing video games??');
  }
}
videoGameQA();
function favoriteColorQA() {
  var favoriteColorQA = prompt('Is my favorite color red?').toLowerCase();
  console.log('favoriteColorQA =', favoriteColorQA);

  if (favoriteColorQA === 'no' || favoriteColorQA === 'n') {
    console.log('The user answered this correctly.');
    alert('Lucky guess. My favorite color is blue!');
    totalCorrect++;
  } else if (favoriteColorQA === 'yes' || favoriteColorQA === 'y') {
    console.log('The user answered this incorrectly.');
    alert('Nope, my favorite color is blue!');
  } else {
    console.log('Invalid response');
    alert('What kind of an answer is that?');
  }
}
favoriteColorQA();

function codingQA() {
  var codingQA = prompt('Do I like to code?').toLowerCase();
  console.log('codingQA =', codingQA);

  if (codingQA === 'yes' || codingQA === 'y') {
    console.log('The user answered this correctly.');
    alert('I would congratulate you on getting this correct, but that should be pretty obvious.');
    totalCorrect++;
  } else if (codingQA === 'no' || codingQA === 'n') {
    console.log('The user answered this incorrectly.');
    alert('What a stupid answer, I\'m in a coding class!');
  } else {
    console.log('Invalid response');
    alert('Is that seriously your answer?');
  }
}
codingQA();

function footballQA() {
  var footballQA = prompt('Do I like football?').toLowerCase();
  console.log('footballQA =', footballQA);

  if (footballQA === 'yes' || footballQA === 'y') {
    console.log('The user answered this correctly.');
    alert('Football is one of my favorite sports. GO BRONCOS!');
    totalCorrect++;
  } else if (footballQA === 'no' || footballQA === 'n') {
    console.log('The user answered this incorrectly.');
    alert('I actually love football. GO BRONCOS!');
  } else {
    console.log('Invalid response');
    alert('A simple yes or no is all I\'m looking for here.');
  }
}
footballQA();

function windowsQA() {
  var windowsQA = prompt('Am I coding on Windows?').toLowerCase();
  console.log('windowsQA =', windowsQA);

  if (windowsQA == 'no' || windowsQA === 'n') {
    console.log('The user answered this correctly.');
    alert('You got this one correct. I\'m using Linux!');
    totalCorrect++;
  } else if (windowsQA === 'yes' || windowsQA === 'y') {
    console.log('The user answered this incorrectly.');
    alert('Nope, I\'m using Linux!');
  } else {
    console.log('Invalid response');
    alert('That doesn\'t really answer the question.');
  }
}
windowsQA();


function numSiblingsQA() {
  var numSiblings = 3;
  for (var i = 4; i >= 1 && siblingsQA != numSiblings; i--) {
    var siblingsQA = Number(prompt('How many siblings do I have? You have ' + i + ' guesses to get it right!'));
    console.log('SiblingsQA = ', siblingsQA);
    if (siblingsQA === numSiblings) {
      totalCorrect++;
      console.log('The user answered correctly.');
      alert('That\'s right! I have two brothers and one sister.');
    } else if (siblingsQA < numSiblings) {
      alert('Too low!');
    } else if (siblingsQA > numSiblings) {
      alert('Too high!');
    }
  }
}
numSiblingsQA();

function carColorsQA(){

  var carColors = ['red', 'green', 'gray', 'grey', 'silver', 'blue'];
  var possibleAnswers = carColors.length - 1; // subtracted 1 due to giving two spellings of grey

  var guesses = 7;
  var numCorrect = 0;

  do {
    guesses--;
    var carColorsQA = prompt('Of all the vehicles I owned, name 3 of their colors. There are ' + possibleAnswers + ' possible answers. You have ' + guesses + ' guesses.').toLowerCase();
    console.log('carColorsQA = ', carColorsQA);
    if (carColorsQA == carColors[0]) {
      numCorrect++;
      console.log('numCorrect = ', numCorrect);
      alert('My first vehicle was a red Toyota Pickup!');
    } else if (carColorsQA == carColors[1]) {
      numCorrect++;
      console.log('numCorrect = ', numCorrect);
      alert('I used to own a green Dodge Dakota.');
    } else if (carColorsQA == carColors[2]) {
      numCorrect++;
      console.log('numCorrect = ', numCorrect);
      alert('One of the favorite cars I used to own was a grey Mustang GT!');
    } else if (carColorsQA == carColors[3]) {
      numCorrect++;
      console.log('numCorrect = ', numCorrect);
      alert('One of the favorite cars I used to own was a grey Mustang GT!');
    } else if (carColorsQA == carColors[4]) {
      numCorrect++;
      console.log('numCorrect = ', numCorrect);
      alert('The last car I owned was a silver Honda Civic.');
    } else if (carColorsQA == carColors[5]) {
      numCorrect++;
      console.log('numCorrect = ', numCorrect);
      alert('I currently own a blue Honda Civic.');
    } else {
      alert('I never owned a ' + carColorsQA + ' vehicle.');
    }
  } while (guesses > 1 && numCorrect != 3);

  alert('The correct answers are ' + carColors[0] + ', ' + carColors[1] + ', ' + carColors[3] + ', ' + carColors[4] + ', and ' + carColors[5] + '.');
  if (numCorrect == 3) { // The user only gets a point for correctly guessing 3 car colors
    alert('Great job!');
    totalCorrect++;
  }
}
carColorsQA();

console.log('totalCorrect =', totalCorrect);

alert('You answered ' + totalCorrect + ' questions correctly.');

function randomNum() {
  var randomNum = Math.floor(Math.random() * 11);
  console.log('randomNum = ', randomNum);

  var userGuess = prompt('Between 0 and 10, what number am I thinking of?');
  console.log('userGuess = ', userGuess);
  if (userGuess == randomNum) {
    alert('Congratulations...for randomly guessing an arbitrary number.');
  } else {
    alert('Is that your final answer? Just kidding, you only get 1 guess...WRONG!.');
  }
}


if (totalCorrect >= 6) {
  alert('You really know me! BONUS ROUND!');
  randomNum();
} else if (totalCorrect > 3) {
  alert('Not too bad.');
} else {
  alert('You don\'t know me very well, do you?');
};
