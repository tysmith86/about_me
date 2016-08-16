'use strict';

var totalCorrect = 0;
var videoGameQA = prompt('Do I play video games?').toLowerCase();
console.log('videoGameQA =', videoGameQA);

if (videoGameQA === 'yes' || videoGameQA === 'y') {
  alert('You are right!');
  totalCorrect++;
} else if (videoGameQA === 'no' || videoGameQA === 'n') {
  alert('Wrong, I love video games...maybe a little too much!');
} else {
  alert('What does that have to do with me playing video games??');
}

var favoriteColorQA = prompt('Is my favorite color red?').toLowerCase();
console.log('favoriteColorQA =', favoriteColorQA);

if (favoriteColorQA === 'no' || favoriteColorQA === 'n') {
  alert('Lucky guess. My favorite color is blue!');
  totalCorrect++;
} else if (favoriteColorQA === 'yes' || favoriteColorQA === 'y') {
  alert('Nope, my favorite color is blue!');
} else {
  alert('What kind of an answer is that?');
}

var codingQA = prompt('Do I like to code?').toLowerCase();
console.log('codingQA =', codingQA);

if (codingQA === 'yes' || codingQA === 'y') {
  alert('I would say congratulations on getting this correct, but that should be pretty obvious.');
  totalCorrect++;
} else if (codingQA === 'no' || codingQA === 'n') {
  alert('What a stupid answer, I\'m in a coding class!');
} else {
  alert('Is that seriously your answer?');
}

var footballQA = prompt('Do I like football?').toLowerCase();
console.log('footballQA =', footballQA);

if (footballQA === 'yes' || footballQA === 'y') {
  alert('Football is one of my favorite sports. GO BRONCOS!');
  totalCorrect++;
} else if (footballQA === 'no' || footballQA === 'n') {
  alert('I actually love football. GO BRONCOS!');
} else {
  alert('A simple yes or no is all I\'m looking for here.');
}

var windowsQA = prompt('Am I coding on Windows?').toLowerCase();
console.log('windowsQA =', windowsQA);

if (windowsQA == 'no' || windowsQA === 'n') {
  alert('You got this one correct. I\'m using Linux!');
  totalCorrect++;
} else if (windowsQA === 'yes' || windowsQA === 'y') {
  alert('Nope, I\'m using Linux!');
} else {
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
