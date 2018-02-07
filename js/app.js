//use strict declaration
'use strict';

//Collecting user's name
var username = prompt('Hello there! Welcome to my website! What\'s your name?');

alert(username + ', huh? That\'s a good name I guess. Now let\'s play a fun guessing game about me!');
console.log('User was asked their name and responded with ' + username + '.');


//First question: do they know MY name??
var answerOne = prompt('Are you ready? And remember ' + username +  ', please answer all questions with either yes/y or no/n. Do you know my name?').toLowerCase().trim();

if (answerOne === 'yes' || answerOne === 'y') {
  alert('Yay! We must already be friends.');
  console.log('User was asked if they know my name and responded with yes.');
} else if (answerOne === 'no' || answerOne === 'n') {
  alert('Well that\'s ok. My name is Sarah. It is fantastic to meet you.');
  console.log('User was asked if they know my name and responded with no.');
} else {
  alert('Hey come on, I told you to answer with either yes, no, y, or n!');
  console.log('User was asked a simple question and responded with nonsense in the form of "' + answerOne + '".');
}


//Second question: do you know my favorite food?
var answerTwo = prompt('Do you know my favorite food?').toLowerCase().trim();

if (answerTwo === 'yes' || answerTwo === 'y') {
  alert('You do?? That\'s weird. Even I don\'t know what my favorite food is!');
  console.log('User was asked if they know my favorite food and responded with yes.');
} else if (answerTwo === 'no' || answerTwo === 'n') {
  alert('Trick question! I don\'t have a favorite food because I like almost all food.');
  console.log('User was asked if they know my favorite food and responded with no.');
} else {
  alert('That was not a valid answer, but it\'s ok because that was a trick question anyway! I don\'t even have a favorite food!');
  console.log('User was asked a simple question and responded with nonsense in the form of "' + answerTwo + '".');
}


//Third question: do I have any siblings?
var answerThree = prompt('Do you think I have any siblings?').toLowerCase().trim();

if (answerThree === 'yes' || answerThree === 'y') {
  alert('Correct! I have one brother and one sister.');
  console.log('User was asked if they think I have siblings and responded with yes.');
} else if (answerThree === 'no' || answerThree === 'n') {
  alert('Wrong! I have one brother and one sister.');
  console.log('User was asked if they think I have siblings and responded with no.');
} else {
  alert('You\'re bad at this. Let\'s just move on.');
  console.log('User was asked a simple question and responded with nonsense in the form of "' + answerThree + '".');
}


//Fourth question: do I have any phobias?
var answerFour = prompt('Do you think I have any phobias?').toLowerCase().trim();

if (answerFour === 'yes' || answerFour === 'y') {
  alert('Unfortunately, you are correct. Spiders are gross and terrifying.');
  console.log('User was asked if they think I have phobias and responded with yes.');
} else if (answerFour === 'no' || answerFour === 'n') {
  alert('No... I definitely do. But you must think I\'m so brave!');
  console.log('User was asked if they think I have phobias and responded with no.');
} else {
  alert('Alright now I know you know that wasn\'t a valid answer.');
  console.log('User was asked a simple question and responded with nonsense in the form of "' + answerFour + '".');
}


//Fifth question: would you like to get to know me more?
var answerFive = prompt('Now for the final question, would you like to find out more about me??').toLowerCase().trim();

if (answerFive === 'yes' || answerFive === 'y') {
  alert('Hooray! Thanks for playing, ' + username + '! Check out my page to find out more!');
  console.log('User was asked if they would like to find out more and responded with yes.');
} else if (answerFive === 'no' || answerFive === 'n') {
  alert('Well, ' + username + ', that\'s very rude. You can go ahead and leave and never come back!');
  console.log('User was asked if they would like to find out more and very rudely responded with no.');
} else {
  alert('I don\'t know what that means. But I\'ll interpret that as a yes!');
  console.log('User was asked a simple question and responded with nonsense in the form of "' + answerFive + '".');
}