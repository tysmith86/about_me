'use strict';

var totalCorrect = 0;

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

var codingQA = prompt('Do I like to code?').toLowerCase();
console.log('codingQA =', codingQA);

if (codingQA === 'yes' || codingQA === 'y') {
  console.log('The user answered this correctly.');
  alert('I would say congratulations on getting this correct, but that should be pretty obvious.');
  totalCorrect++;
} else if (codingQA === 'no' || codingQA === 'n') {
  console.log('The user answered this incorrectly.');
  alert('What a stupid answer, I\'m in a coding class!');
} else {
  console.log('Invalid response');
  alert('Is that seriously your answer?');
}

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

console.log('totalCorrect =', totalCorrect);

alert('You answered ' + totalCorrect + ' questions correctly.');

if (totalCorrect >= 4) {
  alert('You really know me!');
} else if (totalCorrect === 3) {
  alert('Not too bad.');
} else {
  alert('You don\'t know me very well, do you?');
};
