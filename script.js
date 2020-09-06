// ## Acceptance Criteria

// ```
// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score
// ```
const quiz = document.getElementById("quiz");

const quizData = [
    {
        question: "JavaScript is a _____-side programming language?",
        a: "client",
        b: "server",
        c: "both",
        d: "none",
        correct: "a",
    },
    {
        question: "In JavaScript, how do you write 'Let's jam' in an alert box?",
        a: "msgBox(Let's jam);",
        b: "alertBox(Let's jam);",
        c: "msg(Let's jam);",
        d: "alert(Let's jam);",
        correct: "d",
    },
    {
        question: "How do you add a comment in JavaScript?",
        a: "'A comment'",
        b: '"<!--A comment-->"',
        c: "~A comment~",
        d: "//A comment",
        correct: "d",
    },
    {
        question: "What is the correct way to write a JavaScript array?",
        a: "let names = (1:'ed', 2:'ein', 3:'spike')",
        b: "let names = ['ed', 'ein', 'spike']",
        c: "let names = 1 = ('ed'), 2 = ('ein'), 3 = ('spike')",
        d: "let names = 'ed', 'ein', 'spike',",
        correct: "b",
    },
    {
        question: "In JavaScript, which operator is used to assign a value to a variable?",
        a: "*",
        b: "-",
        c: "=",
        d: "X",
        correct: "c",
    },
]

const renderQuizBtn = document.querySelector("#begin_quiz");

const buttonA = document.querySelector("#a");

const buttonB = document.querySelector("#b");

const buttonC = document.querySelector("#c");

const buttonD = document.querySelector("#d");

const title = document.getElementById("quiz_title");

const answers = document.querySelectorAll(".answer");

let time = 75;

let current_question = 0;

let renderQuizEl = document.querySelector("#quiz_questions");

function hideTitle() {
    document.getElementById("quiz_title").style.display = "none";
}

function renderQuizQuestion() {
    renderQuizEl.innerHTML = `
    <h3>${quizData[current_question].question}</h3>
    `
    buttonA.textContent = quizData[current_question].a;
    buttonB.textContent = quizData[current_question].b;
    buttonC.textContent = quizData[current_question].c;
    buttonD.textContent = quizData[current_question].d;

}

// User clicks begin to kick off the quiz
// Attach on click to index.html for begin button
renderQuizBtn.addEventListener("click", function () {
    hideTitle();
    // Start the timer
    let quizTimer = setInterval(
        function () {
            time--;
            document.querySelector("#timer").innerHTML = time;
            if (time === 0) {
                clearInterval(quizTimer);
                quiz.innerHTML = `
                <h3>time is up</h3>
                `
            }
        }, 1000);

    // Render question 1/quiz
    renderQuizQuestion();

})

// function getSelected() {
//     let answer = undefined;

//     answers.forEach((answerEl) => {
//         if (answerEl.checked) {
//             answer = answerEl.id;
//         }
//     });

//     return answer;
// }

// function answerSelected() {
//     let userSelection = getSelected();
//     if (userSelection !== quizData[current_question].correct) {
//         document.querySelector("#timer").innerHTML = time;
//         time = time - 10;
//         time.textContent = time;
//     }
    
// }

// answerSelected();

for (let i = 0; i < answers.length; i++) {
    answers[i].addEventListener("click", function () {
        current_question++;
        if (current_question >= quizData.length) {
            // Game is over
            quiz.innerHTML = `
            <h3>Game over</h3>
            `
        }
        else {
            renderQuizQuestion();
        }
    
    })

}

// Timer starts to countdown
// Generate a timer that counts down from 60 seconds
// set interval, clear interval, set timeout
// - set interval - a function that executes after a specified interval of milliseconds
// assign set interval to a variable, allows us to execute clear interval by passing in the variable name
// - set timeout - if ever you want to execute code after a delay 

// Question 1 is rendered
// Populate question 1 with buttons for answer selection
// Indicate to the user that the question is correct or incorrect
// Then populate the next question until quiz is completed
// If user does not select an answer and presses submit, alert user to answer the question
// If user answers the question incorrectly, then 15 seconds is deducted from the timer

// Once answer is submitted, the next question is rendered.
// Users answer selection is saved and updates the quiz data to move from q1 to q2, etc. 

// Once all questions are answered or timer reaches 0 then the game is over
// User can save their initials and score
// Score is based on time left on the clock
// Once user submits their initials, they can see the cumulative scores ranked by highest to lowest

