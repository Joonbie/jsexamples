let ans = 10;
let ansString = "ten";

// let userInput = prompt("Guess the number. Press q or Q to quit.");

const feedbackGuess = "Guess the number.";
const feedbackCorrect = "You are correct!!";
const feedbackQuit = " (Press q or Q to quit)";
const feedbackEmpty = "Your answer is empty. Please try again." + feedbackQuit;
const feedbackTooHigh = "Your answer is too high! Try again.";
+feedbackQuit;
const feedbackTooLow = "Your answer is too low! Try again." + feedbackQuit;
const feedbackWrong = "Wrong answer. Guess again." + feedbackQuit;

let userInput = prompt(feedbackGuess + feedbackQuit);

while (userInput.toUpperCase() !== "Q") {
  // as long as the user doesn't enter 'q' AND 'Q', run the loop

  let correctAns = false;
  let userFeedback = "";

  switch (true) {
    case userInput == ans:
      userFeedback = feedbackCorrect;
      correctAns = true;
      break;

    case userInput.toLowerCase() == ansString:
      userFeedback = feedbackCorrect;
      correctAns = true;
      break;

    case !userInput:
      userFeedback = feedbackEmpty;
      correctAns = false;
      break;

    case userInput > ans:
      userFeedback = feedbackTooHigh;
      correctAns = false;
      break;

    case userInput < ans:
      userFeedback = feedbackTooHigh;
      correctAns = false;
      break;

    default:
      userFeedback = feedbackWrong;
      console.log("from default " + typeof userInput);
      correctAns = false;
      break;
  }

  if (correctAns) {
    alert(userFeedback);
    break;
  } else {
    userInput = prompt(userFeedback);
  }
}
