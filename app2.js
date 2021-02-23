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
