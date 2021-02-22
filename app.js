const question = document.querySelector(".triviaQuestion")
// console.log(question)
const answersA = document.querySelector(".answerOptionsA")
// console.log(answersA)
const answersB = document.querySelector(".answerOptionsB")
const answersC = document.querySelector(".answerOptionsC")
let currentAnswer = " "

const triviaQuestions = [{
        question: "What is The Log made of?",
        answers: {
            a: "Douglas fir",
            b: "Redwood",
            c: "Ponderosa Pine"
        },
        correctAnswer: "c"
    },
    {
        question: "Who killed Laura Palmer?",
        answers: {
            a: "Leo Johnson",
            b: "Bob",
            c: "Bobby"
        },
        correctAnswer: "b"
    },
    {
        question: "Don’t drink the coffee, a ____ was found in the percolator!",
        answers: {
            a: "Fish",
            b: "Cockroach",
            c: "Fingernail"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the name of the casino girls have gone missing from?",
        answers: {
            a: "Smokey Poker",
            b: "One-Eyed Jack's",
            c: "Dealer's Yard"
        },
        correctAnswer: "b"
    },
    {
        question: "What famous diretor almost directed the second season in place of David Lynch?",
        answers: {
            a: "Stanley Kubrick",
            b: "Steven Spielberg",
            c: "Wes Anderson"
        },
        correctAnswer: "b"
    },
    {
        question: "Entertainment Weekly included this show in its “25 Greatest Cult TV Shows Ever” in 2009 listed at number__?",
        answers: {
            a: 5,
            b: 1,
            c: 20
        },
        correctAnswer: "a"
    },
    {
        question: "Which character was a homage to the 1993 film The Fugitive?",
        answers: {
            a: "The Giant",
            b: "Leo Johnson",
            c: "The One armed man"
        },
        correctAnswer: "c"
    },
    {
        question: "Which character was spontaneously cast from the crew?",
        answers: {
            a: "Jean Renault",
            b: "Agent Rosenfield",
            c: "Bob"
        },
        correctAnswer: "c"
    },
    {
        question: "What David Lynch film featured the same floor from the Red Room?",
        answers: {
            a: "Eraserhead",
            b: "Lost Highway",
            c: "Mulholland Drive"
        },
        correctAnswer: "a"
    },
    {
        question: "The conspiracies surrounding what famous actress’s death influenced the show?",
        answers: {
            a: "Natalie Wood,",
            b: "Brittany Murphy",
            c: "Marilyn Monroe"
        },
        correctAnswer: "c"
    }
];
// console.log(triviaQuestions[0].question)
// console.log(triviaQuestions)
// console.log(triviaQuestions[0].answers)

let currentQuestionIndex = 0;
question.innerText = triviaQuestions[currentQuestionIndex].question
//replicate line 101 w/answers, loop over 
answersA.innerText = triviaQuestions[currentQuestionIndex].answers.a
answersB.innerText = triviaQuestions[currentQuestionIndex].answers.b
answersC.innerText = triviaQuestions[currentQuestionIndex].answers.c



const nextBtn = document.querySelector(".nextBtn");

nextBtn.addEventListener("click", (event) => {
    event.preventDefault;
    //   increment question index
    currentQuestionIndex++;
    question.innerText = triviaQuestions[currentQuestionIndex].question
    answersA.innerText = triviaQuestions[currentQuestionIndex].answers.a
    answersB.innerText = triviaQuestions[currentQuestionIndex].answers.b
    answersC.innerText = triviaQuestions[currentQuestionIndex].answers.c
});

answersA.addEventListener("click", (event) => {
    event.preventDefault;
    currentAnswer = "a"

    if (currentAnswer === triviaQuestions[currentQuestionIndex].correctAnswer) {
        pleaseWork()
    }
});

answersB.addEventListener("click", (event) => {
    event.preventDefault;
    currentAnswer = "b"

    //    console.log(currentAnswer)

    if (currentAnswer === triviaQuestions[currentQuestionIndex].correctAnswer) {
        pleaseWork()
    }
});

answersC.addEventListener("click", (event) => {
    event.preventDefault;
    currentAnswer = "c"


    if (currentAnswer === triviaQuestions[currentQuestionIndex].correctAnswer) {
        pleaseWork()
    }


});

console.log(triviaQuestions[currentQuestionIndex].correctAnswer)





function pleaseWork() {
    currentQuestionIndex++
    question.innerText = triviaQuestions[currentQuestionIndex].question

    answersA.innerText = triviaQuestions[currentQuestionIndex].answers.a
    answersB.innerText = triviaQuestions[currentQuestionIndex].answers.b
    answersC.innerText = triviaQuestions[currentQuestionIndex].answers.c
}








// /*
// //create div for trivia questions & answers

// //multiple choice 'click'

// //eventlistener for click

// //button for submitting answer

// //determine if theanswer selected resulted in a correct answer

// //const player = "x"

// //syntax for trivia questions, use object literals to display questions in
// // an array

// source used https://www.sitepoint.com/simple-javascript-quiz/

// //use a data property like data-id='0' ect
// // to figure out which box was clicked


// //use an if/else to check ea winning combo
// //starting point, but something cleaner can be 
// //done??

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
// Wrong answers- Stanley Kubrick, Tim Burton, Wes Anderson

// 6. Entertainment Weekly included this show in its “25 Greatest Cult TV Shows Ever” in 2009 listed at number…?
// Correct answer- 5
// Wrong answers- 1, 25, 20

// 7. Which character was a homage to the 1993 film The Fugitive?
// Correct answer- The One armed man
// Wrong answers- The Giant, Dr. Jacoby, Leo Johnson

// 8. Which character was spontaneously cast from the crew?
// Correct answer- Bob
// Wrong answers- Josie Packard, Jean Renault, Agent Rosenfield
// 9. What David Lynch film featured the same floor from the Red Room?
// Correct answer- Eraserhead
// Wrong answers- Mulholland Drive, Lost Highway, Blue Velvet

// 10. The conspiracies surrounding what famous actress’s death influenced the show?
// Correct answer- Marilyn Monroe
// Wrong answers- Natalie Wood, Thelma Todd, Brittany Murphy





// */