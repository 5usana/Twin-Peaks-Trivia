const question = document.querySelector(".triviaQuestion")
const answersA = document.querySelector(".answerOptionsA")
const answersB = document.querySelector(".answerOptionsB")
const answersC = document.querySelector(".answerOptionsC")
const triviaContainer = document.querySelector(".triviaResults")
const nextBtn = document.querySelector(".nextBtn");

let currentAnswer = " "
let answerSelected = false

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
        question: "The ____ are not what they seem.",
        answers: {
            a: "owls",
            b: "donuts",
            c: "murders"
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

let score = 0; //game starts with a score of 0
let currentQuestionIndex = 0; //trivia is sorted in an array
//generates questions & answers from array onto site one at a time
question.innerText = triviaQuestions[currentQuestionIndex].question
answersA.innerText = triviaQuestions[currentQuestionIndex].answers.a
answersB.innerText = triviaQuestions[currentQuestionIndex].answers.b
answersC.innerText = triviaQuestions[currentQuestionIndex].answers.c

nextBtn.addEventListener("click", (event) => {
    event.preventDefault;
    answerSelected = false //once nxtBtn is selected the answerSelected   returns to false (answerSeleced becomes true when answers a-c are chosen)
    currentQuestionIndex++;
    //if last question is on screen hide nextBtn
    if (currentQuestionIndex === 9) {
        nextBtn.style.display = 'none'
    }
    document.getElementById("wrong").innerText = "";
    //   increment question index & load next question w/its set of answers
    question.innerText = triviaQuestions[currentQuestionIndex].question
    answersA.innerText = triviaQuestions[currentQuestionIndex].answers.a
    answersB.innerText = triviaQuestions[currentQuestionIndex].answers.b
    answersC.innerText = triviaQuestions[currentQuestionIndex].answers.c

});

answersA.addEventListener("click", (event) => {
    event.preventDefault;
    if (answerSelected) { //return the info below if this answer is selected
        return
    }
    currentAnswer = "a"
    if (currentAnswer === triviaQuestions[currentQuestionIndex].correctAnswer) {
        score += 10;
        //if correct answer is selected ad 10pts to score & announce score
        document.getElementById("score").innerText = "Score : " + score;
    } else {
        // if wrong answer selected generate wrong answer response
        document.getElementById("wrong").innerText = "Wrong Answer";
    }
    answerSelected = true
});

answersB.addEventListener("click", (event) => {
    event.preventDefault;
    if (answerSelected) {
        return
    }
    currentAnswer = "b"
    if (currentAnswer === triviaQuestions[currentQuestionIndex].correctAnswer) {
        score += 10;
        document.getElementById("score").innerText = "Score : " + score;
    } else {
        document.getElementById("wrong").innerText = "Wrong Answer";
    }
    answerSelected = true
});

answersC.addEventListener("click", (event) => {
    event.preventDefault;
    if (answerSelected) {
        return
    }
    currentAnswer = "c"
    if (currentAnswer === triviaQuestions[currentQuestionIndex].correctAnswer) {
        score += 10;
        document.getElementById("score").innerText = "Score : " + score;
    } else {
        document.getElementById("wrong").innerText = "Wrong Answer";
    }
    answerSelected = true
});

triviaContainer.addEventListener("click", (event) => {
    event.preventDefault;
    //once answer is selected on last question
    if (currentQuestionIndex === 9) {
        triviaContainer.style.display = 'none' // remove current question & answers from triviaContainer
        gameOver() // and display GAME OVER & score
    }
});

//SCORE DISPLAY
function gameOver() {
    if (score === 100) { //response based on score
        document.querySelector(".board").innerText = score + " points: Now that's a damn fine perfect score!";
        //TP-understand.jpg
    } else if (score >= 60) {
        document.querySelector(".board").innerText = score + " points: Now that's a damn fine effort!"; //massive-quantities.jpg
    } else if (score >= 40) {
        document.querySelector(".board").innerText = score + " points: Maybe it's time for a rewatch!"; //thumbs-up.jpeg
    } else {
        document.querySelector(".board").innerText = score + " points: Time to start watching Twin Peaks!"; //low-score.jpg
    }
}

// /*
// source used  for triviaQuestions array https://www.sitepoint.com/simple-javascript-quiz/
// source for Twin Peaks h1 font https://halloweenlove.com/twin-peaks-font-style-download/
// */