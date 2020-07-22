// this page is for the highscore javascript
var highList = document.getElementById("highList");
var clear = document.getElementById("clearBtn");

var highScores = [];
// calling the initiation function to start the rendering of the highscores
init();
// the rendering of the highscore function
function renderHigh() {
    highList.innerHTML = "";
  
    for (var i = 0; i < highScores.length; i++) {
        var initial = highScores[i];
        var li = document.createElement("p");
        li.textContent = initial;
        highList.append(li);
    };
};
// the initiation function
function init() {
    var storedScores = JSON.parse(localStorage.getItem("scores"));
    if (storedScores !== null) {
      highScores = storedScores;
    };
    renderHigh();
};
// the click listener for the clear button which clears the memory
clear.addEventListener("click", function() {
    localStorage.clear();
    highList.innerHTML = ""
});
// calling the render function
renderHigh();
