//when the start button is clicked
var startButton = document.getElementById("startbutton");
var startBox = document.getElementById("start-box");
var quizBox = document.getElementById("quiz");
const quizEl = document.getElementById("questions");
var highscoreBox = document.getElementById("highscore");
var submitButton = document.getElementById("submit");
var timer = document.getElementById("timer");
var choicesEl = document.getElementById("choices");
var startTime = 60;
let currentQuestion = 0;
var resultElement = document.getElementById("result");
var timerInterval;
var allScores= JSON.parse(localStorage.getItem("savedData")) || [];


var questionArr = [
  {
    question: "What are JavaScript Data Types?",
    choices: ["Number", "String", "Object", "Boolean", "All of the above"],
    answer: "All of the above",
  },
  {
    question: "1+2",
    choices: [0, 1, 2, 3],
    answer: 3,
  },
];

function startQuiz() {
  // hide the startbox
  startBox.classList.add("hide");
  quizBox.classList.remove("hide");
  // show the quiz container

  // start timer
  timerInterval = setInterval(() => {
    startTime--;
    timer.textContent = startTime;
  }, 1000);
  // show question
  showQuestion();

  if (startTime === 0) {
    console.log("times up");
    endQuiz();
  }
}

function showQuestion() {
  quizEl.textContent = questionArr[currentQuestion].question;
  choicesEl.innerHTML = "";
  //if quiz is started
  //then show question text
  //and show choices for each question
  questionArr[currentQuestion].choices.forEach((choice, index) => {
    const choiceButton = document.createElement("button");
    choiceButton.textContent = choice;
    choiceButton.addEventListener("click", checkAnswer);
    choicesEl.appendChild(choiceButton);
  });
  // choiceText.forEach((choice,index) => { choice.textContent =
  // questions[currentQuestion].choices[index]});
  // choiceText.forEach((choice, index) => {document.createElement('button')}
  // );
}


function checkAnswer() {
  //  stopTimer();
  // Clear answer choices
  if (this.textContent !== questionArr[currentQuestion].answer) {
    resultElement.textContent = "Incorrect!";
    startTime -= 5;
    timer.textContent = startTime;
  } else {
    resultElement.textContent = "Correct!";
    // score = score + 1;
  }
  currentQuestion++;

  if (currentQuestion === questionArr.length) {
    endQuiz();
  } else {
    showQuestion();
  }
}

function endQuiz() {
  clearInterval(timerInterval);
  quizBox.classList.add("hide");
  highscoreBox.classList.remove("hide");
}
function submitScore() {
 var savedData = {
    initials: document.getElementById("initials").value,
    score: startTime
 }
 allScores.push(savedData);

 localStorage.setItem("savedData",JSON.stringify(allScores));

}
// declare a function to show question

startButton.addEventListener("click", startQuiz);
submitButton.addEventListener("click",submitScore);
