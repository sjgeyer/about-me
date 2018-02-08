//use strict declaration
'use strict';

//declaring count variable
var count = 0;

//Collecting user's name
var username = prompt('Hello there! Welcome to my website! What\'s your name?');

alert(username + ', huh? That\'s a beautiful name. Now let\'s play a fun guessing game about me. I\'ll be keeping track of how many answers you get right so try your best!');
console.log('User was asked their name and responded with ' + username + '.');

//First question: have I been to more than 10 countries??
var answerOne = prompt('Are you ready? And please ' + username + ', answer these first five questions with either yes/no or y/n. Do you think I have been to more than 10 countries?').toLowerCase().trim();
console.log('User responded with ' + answerOne + ' when asked if I have been to more than 10 countries.');

if (answerOne === 'yes' || answerOne === 'y') {
  alert('Wrong! I am not as well traveled as I would like to be. The only other countries besides the U.S. that I have visited are Canada and the Dominican Republic.');
} else if (answerOne === 'no' || answerOne === 'n') {
  alert('Correct! I am not as well traveled as I would like to be. The only other countries besides the U.S. that I have visited are Canada and the Dominican Republic.');
  count++;
} else {
  alert('Hey come on, I told you to answer with either yes, no, y, or n!');
}

//Second question: do I speak any other languages besides English?
var answerTwo = prompt('Do I know any other languages besides English?').toLowerCase().trim();
console.log('User responded with ' + answerTwo + ' when asked if I know other languages.');

if (answerTwo === 'yes' || answerTwo === 'y') {
  alert('Correct! I have varied fluencies in French, German, and American Sign Language.');
  count++;
} else if (answerTwo === 'no' || answerTwo === 'n') {
  alert('Wrong! I have varied fluencies in French, German, and American Sign Language.');
} else {
  alert('That was not a valid answer, but it\'s ok because that was a trick question anyway! I don\'t even have a favorite food!');
}

//Third question: do I have any siblings?
var answerThree = prompt('Do you think I have any siblings?').toLowerCase().trim();
console.log('User responded with ' + answerThree + ' when asked if I have any siblings.');

if (answerThree === 'yes' || answerThree === 'y') {
  alert('Correct! I have one brother and one sister.');
  count++;
} else if (answerThree === 'no' || answerThree === 'n') {
  alert('Wrong! I have one brother and one sister.');
} else {
  alert('You\'re bad at this. Let\'s just move on.');
}

//Fourth question: do I have any pets?
var answerFour = prompt('Do I have any pets?').toLowerCase().trim();
console.log('User responded with ' + answerFour + ' when asked if I have any pets.');

if (answerFour === 'yes' || answerFour === 'y') {
  alert('Wrong! Though in the past I have had a guinea pig and three hamsters named Pikachu, Paddles, Peanut, and Miss Wiggles, respectively.');
} else if (answerFour === 'no' || answerFour === 'n') {
  alert('Correct! Though in the past I have had a guinea pig and three hamsters named Pikachu, Paddles, Peanut, and Miss Wiggles, respectively.');
  count++;
} else {
  alert('Alright now I know you know that wasn\'t a valid answer.');
}

//Fifth question: would you like to get to know me more?
var answerFive = prompt('Now for the most important question, would you like to find out more about me??').toLowerCase().trim();
console.log('User responded with ' + answerFive + ' when asked if they would like to get to know me more.');

if (answerFive === 'yes' || answerFive === 'y') {
  alert('Hooray! You, ' + username + ', are a class act.');
  count++;
} else if (answerFive === 'no' || answerFive === 'n') {
  alert('Well, ' + username + ', that\'s very rude. I\'m counting that as a wrong answer!');
} else {
  alert('I don\'t know what that means. But I\'ll interpret that as a yes!');
}

//Sixth question: number guessing game!
var numBooks = 323;
for (var i = 0; i < 4; i++) {
  var guess;
  if (i === 0) {
    guess = prompt('Now for something a little more fun. For this question, please answer with a number! You get 4 tries. How many books do I own?');
  } else if (i < 3) {
    guess = prompt('How many books do I own?');
  } else {
    guess = prompt('Last chance! How many books do I own?');
  }
  console.log('User responded with ' + guess + ' when asked how many books I own.');
  var numGuess = parseInt(guess);

  if (numGuess === numBooks) {
    alert('Congratulations, ' + username + '! You guessed it! I own ' + numBooks + ' books, and am always searching for more!');
    count++;
    break;
  } else if (numGuess < numBooks && i < 3) {
    alert('Nope! Too low! Try again! Guesses used: ' + (i + 1));
  } else if (numGuess > numBooks && i < 3) {
    alert('Wow! Too high! Maybe some day... Guesses used: ' + (i + 1));
  } else if (i === 3 && numGuess !== numBooks) {
    alert('Well, you tried. The correct answer was ' + numBooks + '.');
  } else {
    alert('Are you sure you answered with a number? Guesses used: ' + (i + 1));
  }
}

//Seventh question: question with many answers!
var faveBooks = ['Harry Potter', 'Hitchhiker\'s Guide to the Galaxy', 'Lord of the Rings', 'A Song of Ice and Fire', 'Ender\'s Game'];

var guesses = 0;
var wrong = true;

while (guesses < 6 && wrong) {
  var input;
  if (guesses === 0) {
    input = prompt('Now that you know how much I love books, what do you think is one of my favorite book series? I have a lot so there are 5 possible answers. I\'ll give you 6 tries!');
  } else {
    input = prompt('What is one of my favorite book series?');
  }
  console.log('User responded with ' + input + ' when asked to guess my favorite book series.');
  for (var j = 0; j < faveBooks.length; j++) {
    if (input === faveBooks[j].toLowerCase()) {
      alert('You got one! Here are all the correct answers: ' + faveBooks.join(', ') + '. Check out the rest of my page to find out some of my other favorite things!');
      count++;
      wrong = false;
      break;
    }
  }
  guesses++;
  if (guesses < 5 && wrong) {
    alert('Nope! Try again! Guesses used: ' + guesses + '.');
  } else if (guesses === 5 && wrong) {
    alert('Wrong again! Now this is your last guess, really think this time! Hint: I love the sci-fi and fantasy genre.');
  }
}

if (guesses === 6 && wrong) {
  alert('Couldn\'t figure it out? Here are all the possible correct responses: ' + faveBooks.join(', ') + '. Check out my page to find out some of my other favorite things!');
}

//final count alert
alert('Well, ' + username + ' that\'s all the questions I have for you! Feel free to refresh the page anytime to play again. Total correct: ' + count + ' of 7.');