//when the start button is clicked
var startButton = document.getElementById("startbutton");
var startBox = document.getElementById("start-box");
var quizBox = document.getElementById("quiz");
var timer = document.getElementById("timer");
var choicesContainer = document.getElementById("choices");
var startTime = 60;
var currentQuestion;

var questionArr = [
    {
        question: 'What are JavaScript Data Types?',
        choices: ['Number','String','Object','Boolean'],
        answer: 3
    },
    {
        question: '1+2',
        choices: [0,1,2,3],
        answer: 3
    }
]

function startQuiz() {
    // hide the startbox
startBox.classList.add("hide");
quizBox.classList.remove("hide");
    // show the quiz container

    // start timer
var timerInterval = setInterval(() => {
    startTime--;
    timer.textContent = startTime;
}, 1000);
    // show question
}
function showQuestion()
{
    //if quiz is started
    //then show question text
    //and show choices for each question
    var questionText = document.getElementById("questions");
    questionText.textContent = questionArr[currentQuestion].question;
    
    var choiceText = document.querySelectorAll("#choices");
    choiceText.forEach((choice,index) => { choice.textContent = 
    questions[currentQuestion].choices[index]});
    
}
function selectAnswer()
{
    //given box is created
    //AND has a clickevent tied
    //if choice is clicked
    
    // THEN check if its correct
    // if its correct, add score and change question answer
    // ELSE minus startTime
}

// declare a function to show question

startButton.addEventListener("click", startQuiz);

choicesContainer.addEventListener("click",selectAnswer);
