/* Classic magic 8 ball program which will produce a random fortune.

Program steps:

1. Get user to input their name and assign to a variable userName;
2. Check to see 'if' userName exists print 'Hello {userName}';
3. else print 'Hello!';
4. Prompt user for a qestion and assign to a variable userQuestion;
5. Print userQuestion to the console;
6. Generate a random number between 0-7 and assign to a variable randomNumber;
7. Create an empty string eightBall;
8. Using if / if else / switch statements save a random response to eightBall;
9. Print random fortune to console.

A master list of eight ball radom responses can be found @ https://en.wikipedia.org/wiki/Magic_8-Ball */

let userName = prompt("What is your name?"); // Get user name

// Test to see if user name has been provide else print default greeting
if (userName) {
  console.log("Hello " + userName);
} else {
  console.log("Hello!");
}

let userQuestion = prompt("What do you ask of the oracle? "); //Get user question

console.log(
  "Are you sure you want to ask the all powerfull oracle: " + userQuestion + "?"
); // Print user question to the console

let randomNumber = Math.floor(Math.random() * 8); // Generate random number between 0-7

let eightBall = ""; //Variable to hold random responses

// Switch statement to assign a random response to the eightBall variable
switch (randomNumber) {
  case 0:
    eightBall = "Better not tell you now.";
    break;
  case 1:
    eightBall = "Concentrate on the task at hand";
    break;
  case 2:
    eightBall = "Reply hazy try again";
    break;
  case 3:
    eightBall = "Cannot predict now";
    break;
  case 4:
    eightBall = "My reply is no";
    break;
  case 5:
    eightBall = "My sources say no";
    break;
  case 6:
    eightBall = "Outlook not so good";
    break;
  case 7:
    eightBall = "Signs are looking positive";
    break;
  default:
    eightBall = "The oracle is out to lunch, come back later";
}

console.log(eightBall); // Print random response to the console
