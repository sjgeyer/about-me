//use strict declaration
'use strict';

//declaring count variable
var count = 0;

//Collecting user's name
var username = prompt('Hello there! Welcome to my website! What\'s your name?');

alert(username + ', huh? That\'s a beautiful name. Now let\'s play a fun guessing game about me. I\'ll be keeping track of how many answers you get right so try your best!');
console.log('User was asked their name and responded with ' + username + '.');

//all the arrays...
var questions = ['Are you ready? And please ' + username + ', answer these first five questions with either yes/no or y/n. Do you think I have been to more than 10 countries?', 'Do I know any other languages besides English?', 'Do you think I have any siblings?', 'Do I have any pets?', 'Now for the most important question, would you like to find out more about me??'];

var inputYes = ['Wrong! I am not as well traveled as I would like to be. The only other countries besides the U.S. that I have visited are Canada and the Dominican Republic.', 'Correct! I have varied fluencies in French, German, and American Sign Language.', 'Correct! I have one brother and one sister.', 'Wrong! Though in the past I have had a guinea pig and three hamsters named Pikachu, Paddles, Peanut, and Miss Wiggles, respectively.', 'Hooray! You, ' + username + ', are a class act.'];

var inputNo = ['Correct! I am not as well traveled as I would like to be. The only other countries besides the U.S. that I have visited are Canada and the Dominican Republic.', 'Wrong! I have varied fluencies in French, German, and American Sign Language.', 'Wrong! I have one brother and one sister.', 'Correct! Though in the past I have had a guinea pig and three hamsters named Pikachu, Paddles, Peanut, and Miss Wiggles, respectively.', 'Well, ' + username + ', that\'s very rude. I\'m counting that as a wrong answer!'];

var invalidInput = ['Hey come on, I told you to answer with either yes, no, y, or n!', 'That was not a valid answer, but it\'s ok because that was a trick question anyway! I don\'t even have a favorite food!', 'You\'re bad at this. Let\'s just move on.', 'Alright now I know you know that wasn\'t a valid answer.', 'I don\'t know what that means. But I\'ll interpret that as a yes!'];

var isYes = [false, true, true, false, true];
var isNo = [true, false, false, true, false];

//All yes/no questions
function ynQuestions() {
  for (var k = 0; k < questions.length; k++) {
    var answer = prompt(questions[k]).toLowerCase().trim();
    console.log('User responded with ' + answer + ' in response to question.');
    if (answer === 'yes' || answer === 'y'){
      alert(inputYes[k]);
      if (isYes[k]) {
        count++;
      }
    } else if (answer === 'no' || answer === 'n') {
      alert(inputNo[k]);
      if (isNo[k]) {
        count++;
      }
    } else {
      alert(invalidInput[k]);
    }
  }
}
ynQuestions();

//Sixth question: number guessing game!
function question6() {
  var numBooks = 323;
  for (var i = 0; i < 4; i++) {
    var guess;
    if (i === 0) {
      guess = parseInt(prompt('Now for something a little more fun. For this question, please answer with a number! You get 4 tries. How many books do I own?'));
    } else if (i < 3) {
      guess = parseInt(prompt('How many books do I own?'));
    } else {
      guess = parseInt(prompt('Last chance! How many books do I own?'));
    }
    console.log('User responded with ' + guess + ' when asked how many books I own.');

    if (guess === numBooks) {
      alert('Congratulations, ' + username + '! You guessed it! I own ' + numBooks + ' books, and am always searching for more!');
      count++;
      break;
    } else if (guess < numBooks && i < 3) {
      alert('Nope! Too low! Try again! Guesses used: ' + (i + 1));
    } else if (guess > numBooks && i < 3) {
      alert('Wow! Too high! Maybe some day... Guesses used: ' + (i + 1));
    } else if (i === 3 && guess !== numBooks) {
      alert('Well, you tried. The correct answer was ' + numBooks + '.');
    } else {
      alert('Are you sure you answered with a number? Guesses used: ' + (i + 1));
    }
  }
}
question6();

//Seventh question: question with many answers!
function question7() {
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
      if (input.toLowerCase() === faveBooks[j].toLowerCase()) {
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
}
question7();

//final count alert
alert('Well, ' + username + ' that\'s all the questions I have for you! Feel free to refresh the page anytime to play again. Total correct: ' + count + ' of 7.');