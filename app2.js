let currentQuestionIndex = [0];
const triviaQuestions = document.querySelectorAll(".question-container");
const nextBtn = document.querySelector("button");

nextBtn.addEventListener("click", (event) => {
  event.preventDefault;
  //   add hide to current question
  triviaQuestions[currentQuestionIndex].classList.add("hide");
  //   increment question index
  currentQuestionIndex++;
  //   remove 'hide' from class of current question so that it is displayed
  triviaQuestions[currentQuestionIndex].classList.remove("hide");
  //
});

//keep score



// this only works for the 1st question, either create a new const for every answer or find an easier solution?
//addeventlistner applies to the first round of quetions

//do i use map() to bring together all my right & wrong answers

//is the checked feature in rado inputs helpful to this solution?



const rightAnswerRadio = document.getElementsByClassName("rightAnswer")[0];
rightAnswerRadio.addEventListener("click", correctAnswer);
// console.log(rightAnswerRadio)

function correctAnswer() {
  console.log("Correct Answer!")
}
// console.log(correctAnswer());



// this only works for the 1st question, either create a new const for every answer or find an easier solution?
const wrongAnswerRadio = document.getElementsByClassName("wrongAnswer")[0];
const wrongAnswerRadio2 = document.getElementsByClassName("wrongAnswer")[1];
wrongAnswerRadio.addEventListener("click", wrongAnswer);
wrongAnswerRadio2.addEventListener("click", wrongAnswer);
// console.log(wrongAnswerRadio)

function wrongAnswer() {

  console.log("Wrong Answer!")
}
// console.log(wrongAnswer());






// how do i synce up the bottons with the correct answer?
//testing the below, not sure how to proceed
// const rightAnswerRadio = document.getElementById("rightAnswer");
// rightAnswerRadio.addEventListener("click", (event) => {
  // event.preventDefault;


// });
// console.log(rightAnswerRadio)










//create div for trivia questions & answers

//multiple choice 'click'

//eventlistener for click

//button for submitting answer

//determine if the answer selected resulted in a correct answer

//add/update score with answers

//use a data property like data-id='0' ect
// to figure out which box was clicked

//use an if/else to check ea winning combo
//starting point, but something cleaner can be 
//done??

// ---Trivia Questions---
// What is The Log made of?
// Correct answer- Ponderosa Pine 
// Wrong answers- douglas fir, pine, redwood

// 2. Who killed Laura Palmer?
// Correct- Bob
// Wrong-  Leo Johnson, Bobby, Donna Hayward

// 3. Don’t drink the coffee, a ____ was found in the percolator!
// Correct answer- fish
// Wrong answers-  cockroach, finger nail, sedative

// 4. What is the name of the casino girls have gone missing from?
// Correct answer- One-Eyed Jack’s
// Wrong answers- Smoky Poker, Lucky Hunch, Dealer Yard

// 5. Who almost directed the second season in place of David Lynch?
// Correct answer- Steve Spielberg
// Wrong answers- Stanley Kubrick, Wes Anderson

// 6. Entertainment Weekly included this show in its “25 Greatest Cult TV Shows Ever” in 2009 listed at number…?
// Correct answer- 5
// Wrong answers- 1, 20

// 7. Which character was a homage to the 1993 film The Fugitive?
// Correct answer- The One armed man
// Wrong answers- The Giant, Leo Johnson

// 8. Which character was spontaneously cast from the crew?
// Correct answer- Bob
// Wrong answers- Josie Packard, Jean Renault

// 9. What David Lynch film featured the same floor from the Red Room?
// Correct answer- Eraserhead
// Wrong answers- Mulholland Drive, Lost Highway

// 10. The conspiracies surrounding what famous actress’s death influenced the show?
// Correct answer- Marilyn Monroe
// Wrong answers- Natalie Wood, Brittany Murphy
// */