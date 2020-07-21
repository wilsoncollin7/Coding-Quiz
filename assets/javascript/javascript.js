var introJumbo = document.getElementById("introJumbo");
var questionJumbo = document.getElementById("questionJumbo");
var question = document.getElementById("question");
var answers = document.getElementById("answers");
var verdict = document.getElementById("verdict");
var timeDisplay = document.getElementById("timeDisplay");
var startBtn = document.getElementById("startBtn");

questionJumbo.setAttribute("style", "display: none;")

var q1 = {
    question: "q1",
    wrong1: "w1",
    wrong2: "w2",
    wrong3: "w3",
    right: "right"

};

var q2 = {
    question: "q2",
    wrong1: "w1",
    wrong2: "w2",
    wrong3: "w3",
    right: "right"

};

var q3 = {
    question: "q3",
    wrong1: "w1",
    wrong2: "w2",
    wrong3: "w3",
    right: "right"
};

var q4 = {
    question: "q4",
    wrong1: "w1",
    wrong2: "w2",
    wrong3: "w3",
    right: "right"
};

var q5 = {
    question: "q5",
    wrong1: "w1",
    wrong2: "w2",
    wrong3: "w3",
    right: "right"
};


startBtn.addEventListener("click", function() {

    var timeLeft = 81

    function startTime() {
        var timerInterval = setInterval(function() {
          timeLeft--;
          timeDisplay.textContent = "Time: " + timeLeft;
      
          if(timeLeft === 0) {
            clearInterval(timerInterval);
            gameOver();
          }
      
        }, 1000);
    };

    startTime()

    introJumbo.setAttribute("style", "display: none;");
    questionJumbo.setAttribute("style", "display: ;")

    

});