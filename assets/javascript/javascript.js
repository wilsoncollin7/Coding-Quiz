var introJumbo = document.getElementById("introJumbo");
var questionJumbo = document.getElementById("questionJumbo");
var question = document.getElementById("question");
var answers = document.getElementById("answers");
var verdict = document.getElementById("verdict");
var timeDisplay = document.getElementById("timeDisplay");
var startBtn = document.getElementById("startBtn");
var doneJumbo = document.getElementById("doneJumbo");
var submitBtn = document.getElementById("submitBtn");
var initialInput = document.getElementById("initials");
var finalScore = document.getElementById("finalScoreDisplay");


questionJumbo.setAttribute("style", "display: none;")
doneJumbo.setAttribute("style", "display: none;");

var q1 = {
    question: "Commonly used data types DO NOT include:",
    choices: ["String","Boolean","Number","Float"]
};

var q2 = {
    question: "Using ___ statement is how you test for a specific condition.",
    choices: ["For","Select","If","Switch"]
};

var q3 = {
    question: "Which of the following is not considered a JavaScript operator?",
    choices: ["this","new","delete","typeof"]
};

var q4 = {
    question: "JavaScript is interpreted by ____",
    choices: ["Server","Client","Oject","None of these"]
};

var q5 = {
    question: "____method evaluates a string of JavaScript code in the context of the specified object.u5",
    choices: ["Evparse","ParseInt","Parsclick","Eval"] 
};

var timeLeft = 81;

startBtn.addEventListener("click", function() {
    
    introJumbo.setAttribute("style", "display: none;");
    questionJumbo.setAttribute("style", "display: ;");

    function startTime() {
        var timerInterval = setInterval(function() {
            timeLeft--;
            timeDisplay.textContent = "Time: " + timeLeft;
        
            if(timeLeft <= 0) {
                clearInterval(timerInterval);
                gameOver();
            }
      
        }, 1000);
    };

    function quiz(x) {
        
        answers.innerHTML = ""
        question.textContent = x.question;
        var choices = x.choices

        for (var i = 0; i < choices.length; i++) {
            var li = document.createElement("li");
            li.setAttribute("class", "choice btn btn-secondary mb-1 mt-2")
            li.setAttribute("id", [i])
            li.textContent = choices[i]
            var br = document.createElement("br")
            answers.appendChild(li);
            answers.appendChild(br);
        };  
    };

    function right() {
        verdict.textContent = "right!"
    };

    function wrong() {
        verdict.textContent = "wrong!"
        timeLeft = timeLeft - 1
    };

    function ques1() {
        
        quiz(q1)
        
        answers.addEventListener("click", function(event) {
            var target = event.target;
            if (target.id === "3") {
                right();
                ques2();
            } else {
                wrong();
                ques2();
            }
        })
    };

    function ques2() {
        
        quiz(q2)
        
        answers.addEventListener("click", function(event) {
            var target = event.target;
            if (target.id === "2") {
                right();
                ques3();
            } else {
                wrong();
                ques3();
            }
        })
    };

    function ques3() {
        
        quiz(q3)
        
        answers.addEventListener("click", function(event) {
            var target = event.target;
            if (target.id === "0") {
                right();
                ques4();
            } else {
                wrong();
                ques4();
            }
        })
    };

    function ques4() {
        
        quiz(q4)
        
        answers.addEventListener("click", function(event) {
            var target = event.target;
            if (target.id === "1") {
                right();
                ques5();
            } else {
                wrong();
                ques5();
            }
        })
    };

    function ques5() {
        
        quiz(q5)
        
        answers.addEventListener("click", function(event) {
            var target = event.target;
            if (target.id === "3") {
                right();
                gameOver()
            } else {
                wrong();
                gameOver()
            }
        })
    };

    function gameOver() {
        introJumbo.setAttribute("style", "display: none;");
        questionJumbo.setAttribute("style", "display: none;");
        doneJumbo.setAttribute("style", "display: ;");
        finalScore.textContent = "Your final score is: " + timeLeft
    };

    startTime()
    ques1()
});

var highScores = [];

submitBtn.addEventListener("click", function() {
    
    var initialText = initialInput.value.trim()

    if (initialText === "") {
        return;
    }

    // var storedScores = JSON.parse(localStorage.getItem("scores"));

    if (highScores !== null) {
        highScores = JSON.parse(localStorage.getItem("scores"));
    } 

    highScores.push(initialText + " score: " + timeLeft)
    
    storedScores()
});

function storedScores() {
    localStorage.setItem("scores", JSON.stringify(highScores));
};