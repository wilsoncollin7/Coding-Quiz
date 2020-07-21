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
    question: "qu1",
    choices: ["w1","w2","w3","right"]
};

var q2 = {
    question: "qu2",
    choices: ["w1","w2","w3","right"]
};

var q3 = {
    question: "qu3",
    choices: ["w1","w2","w3","right"]
};

var q4 = {
    question: "qu4",
    choices: ["w1","w2","w3","right"]
};

var q5 = {
    question: "qu5",
    choices: ["w1","w2","w3","right"] 
};

startBtn.addEventListener("click", function() {
    var timeLeft = 81;
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

    var highScores = [];

    submitBtn.addEventListener("click", function(event) {
        var initialText = initialInput.value.trim()

        if (initialText === "") {
            return;
        };

        highScores.push(initialText + ' score ' + timeLeft)
        console.log(highScores)
        
        storeHigh()
    });

    function storeHigh () {
        localStorage.setItem("scores", JSON.stringify(highScores));
    };

    startTime()
    ques1()
});