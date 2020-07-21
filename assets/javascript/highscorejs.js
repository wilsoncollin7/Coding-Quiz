var highList = document.getElementById("highList");
var clear = document.getElementById("clearBtn");

var highScores = [];

init()

function renderHigh() {
    highList.innerHTML = "";
  
    for (var i = 0; i < highScores.length; i++) {
        var initial = highScores[i];
        var li = document.createElement("p");
        li.textContent = initial;
        highList.append(li);
    };
};

function init() {
    
    var storedScores = JSON.parse(localStorage.getItem("scores"));
  
    if (storedScores !== null) {
      highScores = storedScores;
    };

    renderHigh();
}

renderHigh();
