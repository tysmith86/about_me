'use strict';

var totalCorrect = 0; // Used for a running tally of correct answers

var userName = prompt('What is your name?');
console.log('The user\'s name is ', userName);

var results = document.getElementById('results');
results.innerHTML = userName + '\'s Results:';

var isReady = prompt('Welcome ' + userName + ', are you ready to take the quiz?').toLowerCase();
console.log('Is the user ready?', isReady.toUpperCase());

//Correct answers stored in array
var correctAnswers = ['yes', 'no', 'yes', 'yes', 'no', 3, ['red', 'green', 'gray', 'grey', 'silver', 'blue']];

//Is the user ready?
if (isReady === 'yes' || isReady === 'y') {
  alert('Good luck!');
} else if (isReady === 'no' || isReady === 'n') {
  alert('That\'s too bad, you don\'t really have a choice!');
} else {
  alert('Well, that doesn\'t answer the question, so we\'ll just go ahead and start.');
}

//Video game question
function videoGameQA() {
  var videoGameQA = prompt('Do I play video games?').toLowerCase();
  console.log('videoGameQA =', videoGameQA);
  if (videoGameQA === correctAnswers[0] || videoGameQA === correctAnswers[0][0]) {
    console.log('The user answered this correctly.');
    alert('You are right!');

    var questionOne = document.getElementById('one');
    questionOne.innerHTML = 'You answered this question correctly!';

    totalCorrect++;
  } else if (videoGameQA === 'no' || videoGameQA === 'n') {
    console.log('The user answered this incorrectly.');
    alert('Wrong, I love video games...maybe a little too much!');

    questionOne = document.getElementById('one');
    questionOne.innerHTML = 'You answered this question incorrectly.';

  } else {
    console.log('Invalid response');
    alert('What does that have to do with me playing video games??');

    questionOne = document.getElementById('one');
    questionOne.innerHTML = 'You answered this question incorrectly.';

  }
}
videoGameQA();

//Favorite color question
function favoriteColorQA() {
  var favoriteColorQA = prompt('Is my favorite color red?').toLowerCase();
  console.log('favoriteColorQA =', favoriteColorQA);

  if (favoriteColorQA === correctAnswers[1] || favoriteColorQA === correctAnswers[1][0]) {
    console.log('The user answered this correctly.');
    alert('Lucky guess. My favorite color is blue!');

    var questionTwo = document.getElementById('two');
    questionTwo.innerHTML = 'You answered this question correctly!';

    totalCorrect++;
  } else if (favoriteColorQA === 'yes' || favoriteColorQA === 'y') {
    console.log('The user answered this incorrectly.');
    alert('Nope, my favorite color is blue!');

    questionTwo = document.getElementById('two');
    questionTwo.innerHTML = 'You answered this question incorrectly.';

  } else {
    console.log('Invalid response');
    alert('What kind of an answer is that?');

    questionTwo = document.getElementById('two');
    questionTwo.innerHTML = 'You answered this question incorrectly.';

  }
}
favoriteColorQA();

//Coding question
function codingQA() {
  var codingQA = prompt('Do I like to code?').toLowerCase();
  console.log('codingQA =', codingQA);

  if (codingQA === correctAnswers[2] || codingQA === correctAnswers[2][0]) {
    console.log('The user answered this correctly.');
    alert('I would congratulate you on getting this correct, but that should be pretty obvious.');

    var questionThree = document.getElementById('three');
    questionThree.innerHTML = 'You answered this question correctly!';

    totalCorrect++;
  } else if (codingQA === 'no' || codingQA === 'n') {
    console.log('The user answered this incorrectly.');
    alert('What a stupid answer, I\'m in a coding class!');

    questionThree = document.getElementById('three');
    questionThree.innerHTML = 'You answered this question incorrectly.';

  } else {
    console.log('Invalid response');
    alert('Is that seriously your answer?');

    questionThree = document.getElementById('three');
    questionThree.innerHTML = 'You answered this question incorrectly.';

  }
}
codingQA();

//Football question
function footballQA() {
  var footballQA = prompt('Do I like football?').toLowerCase();
  console.log('footballQA =', footballQA);

  if (footballQA === correctAnswers[3] || footballQA === correctAnswers [3][0]) {
    console.log('The user answered this correctly.');
    alert('Football is one of my favorite sports. GO BRONCOS!');

    var questionFour = document.getElementById('four');
    questionFour.innerHTML = 'You answered this question correctly!';

    totalCorrect++;
  } else if (footballQA === 'no' || footballQA === 'n') {
    console.log('The user answered this incorrectly.');
    alert('I actually love football. GO BRONCOS!');

    questionFour = document.getElementById('four');
    questionFour.innerHTML = 'You answered this question incorrectly.';

  } else {
    console.log('Invalid response');
    alert('A simple yes or no is all I\'m looking for here.');

    questionFour = document.getElementById('four');
    questionFour.innerHTML = 'You answered this question incorrectly.';

  }
}
footballQA();

//Windows question
function windowsQA() {
  var windowsQA = prompt('Am I coding on Windows?').toLowerCase();
  console.log('windowsQA =', windowsQA);

  if (windowsQA === correctAnswers[4] || windowsQA === correctAnswers[4][0]) {
    console.log('The user answered this correctly.');
    alert('You got this one correct. I\'m using Linux!');

    var questionFive = document.getElementById('five');
    questionFive.innerHTML = 'You answered this question correctly!';

    totalCorrect++;
  } else if (windowsQA === 'yes' || windowsQA === 'y') {
    console.log('The user answered this incorrectly.');
    alert('Nope, I\'m using Linux!');

    questionFive = document.getElementById('five');
    questionFive.innerHTML = 'You answered this question incorrectly.';

  } else {
    console.log('Invalid response');
    alert('That doesn\'t really answer the question.');

    questionFive = document.getElementById('five');
    questionFive.innerHTML = 'You answered this question incorrectly.';

  }
}
windowsQA();


//Siblings question
function numSiblingsQA() {
  // var numSiblings = 3;
  for (var i = 4; i >= 1 && siblingsQA != correctAnswers[5]; i--) {
    var siblingsQA = Number(prompt('How many siblings do I have? You have ' + i + ' guesses to get it right!'));
    console.log('SiblingsQA = ', siblingsQA);
    if (siblingsQA === correctAnswers[5]) {
      console.log('The user answered correctly.');
      alert('That\'s right! I have two brothers and one sister.');

      var questionSix = document.getElementById('six');
      questionSix.innerHTML = 'You answered this question correctly!';

      totalCorrect++;
    } else if (siblingsQA < correctAnswers[5]) {
      alert('Too low!');

      questionSix = document.getElementById('six');
      questionSix.innerHTML = 'You answered this question incorrectly.';

    } else if (siblingsQA > correctAnswers[5]) {
      alert('Too high!');

      questionSix = document.getElementById('six');
      questionSix.innerHTML = 'You answered this question incorrectly.';

    } else {
      alert('Not a number!');
      console.log('Invalid response');

      questionSix = document.getElementById('six');
      questionSix.innerHTML = 'You answered this question incorrectly.';
    }
  }
}
numSiblingsQA();

//Car color question
function carColorsQA() {
  // var carColors = ['red', 'green', 'gray', 'grey', 'silver', 'blue'];
  var possibleAnswers = correctAnswers[6].length - 1; // subtracted 1 due to giving two spellings of grey
  var guesses = 7;
  var numCorrect = 0;

  do {
    guesses--;
    var carColorsQA = prompt('Of all the vehicles I owned, name 3 of their colors. There are ' + possibleAnswers + ' possible answers. You have ' + guesses + ' guesses.').toLowerCase();
    console.log('carColorsQA = ', carColorsQA);
    if (carColorsQA === correctAnswers[6][0]) {
      numCorrect++;
      console.log('numCorrect = ', numCorrect);
      alert('My first vehicle was a red Toyota Pickup!');
    } else if (carColorsQA === correctAnswers[6][1]) {
      numCorrect++;
      console.log('numCorrect = ', numCorrect);
      alert('I used to own a green Dodge Dakota.');
    } else if (carColorsQA === correctAnswers[6][2] || carColorsQA === correctAnswers[6][3]) {
      numCorrect++;
      console.log('numCorrect = ', numCorrect);
      alert('One of the favorite cars I used to own was a grey Mustang GT!');
    } else if (carColorsQA === correctAnswers[6][4]) {
      numCorrect++;
      console.log('numCorrect = ', numCorrect);
      alert('The last car I owned was a silver Honda Civic.');
    } else if (carColorsQA === correctAnswers[6][5]) {
      numCorrect++;
      console.log('numCorrect = ', numCorrect);
      alert('I currently own a blue Honda Civic.');
    } else {
      alert('I never owned a ' + carColorsQA + ' vehicle.');
    }
  } while (guesses > 1 && numCorrect != 3);

  if (numCorrect === 3) { // The user only gets a point for correctly guessing 3 car colors
    alert('Great job! The correct answers are ' + correctAnswers[6][0] + ', ' + correctAnswers[6][1] + ', ' + correctAnswers[6][3] + ', ' + correctAnswers[6][4] + ', and ' + correctAnswers[6][5] + '.');

    var questionSeven = document.getElementById('seven');
    questionSeven.innerHTML = 'You answered this question correctly!';

    totalCorrect++;
  } else {
    alert('The correct answers are ' + correctAnswers[6][0] + ', ' + correctAnswers[6][1] + ', ' + correctAnswers[6][3] + ', ' + correctAnswers[6][4] + ', and ' + correctAnswers[6][5] + '.');
    console.log('The user answered this incorrectly.');

    questionSeven = document.getElementById('seven');
    questionSeven.innerHTML = 'You answered this question incorrectly.';
  }
}
carColorsQA();

console.log('totalCorrect =', totalCorrect);

//Random number game
function randomNum() {
  var randomNum = Math.floor(Math.random() * 11);
  console.log('randomNum = ', randomNum);

  var userGuess = prompt('Between 0 and 10, what number am I thinking of?');
  console.log('userGuess = ', userGuess);
  if (userGuess == randomNum) {
    alert('Congratulations...for randomly guessing an arbitrary number.');
  } else {
    alert('Is that your final answer? Just kidding, you only get one guess! The correct number was ' + randomNum + '.');
  }
}


if (totalCorrect >= 6) {
  alert('You answered ' + totalCorrect + ' questions correctly. You really know me! BONUS ROUND!');
  randomNum();
} else if (totalCorrect > 3) {
  alert('You answered ' + totalCorrect + ' questions correctly. Not too bad.');
} else {
  alert('You answered ' + totalCorrect + ' questions correctly. You don\'t know me very well, do you?');
};

var answers = document.querySelectorAll('td.hidden');
for (var i = 0; i < answers.length; i++) {
  answers[i].className = 'visible';
};
