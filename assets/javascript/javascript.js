var introJumbo = document.getElementById("introJumbo");
var questionJumbo = document.getElementById("questionJumbo");
var question = document.getElementById("question");
var answers = document.getElementById("answers");
var verdict = document.getElementById("verdict");
var timeDisplay = document.getElementById("timeDisplay");
var startBtn = document.getElementById("startBtn");
var doneJumbo = document.getElementById("doneJumbo")
var submitBtn = document.getElementById("submitBtn")

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
    var timeLeft = 5;
    introJumbo.setAttribute("style", "display: none;");
    questionJumbo.setAttribute("style", "display: ;");

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

    function startQuiz() {
        function quiz(x) {
            
            question.textContent = x.question;
            var choices = x.choices

            for (var i = 0; i < choices.length; i++) {
                var li = document.createElement("li");
                li.innerHTML = choices[i]
                answers.appendChild(li);
            };  
        };

        quiz(q1)

        
    };

    function gameOver() {
        introJumbo.setAttribute("style", "display: none;");
        questionJumbo.setAttribute("style", "display: none;");
        doneJumbo.setAttribute("style", "display: ;");
    };

    submitBtn.addEventListener("click", function() {
        
    });

    startTime()
    startQuiz()

});