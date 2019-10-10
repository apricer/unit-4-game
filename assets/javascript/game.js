// Variables

var blue = 0;
var red = 0;
var green = 0;
var yellow = 0;

// Scores
var currentScore = 0;
var targetScore = 0;

// Wins/Losses
var winNumber = 0;
var lossNumber = 0;

// Functions

var startGame = function() {

    var currentScore = 0;

    targetScore = Math.floor(Math.random() * (120 - 19 + 1)) + 19;

    blue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    red = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    green = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    yellow = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

    $("#yourScore").html(currentScore);
    $("#targetScore").html(targetScore);

    console.log("Target Score: " + targetScore);
}

var addBlue = function(blue) {
    currentScore + blue;
    console.log("Your Score: " + currentScore);
}

var addRed = function(red) {
    currentScore + red;
    console.log("Your Score: " + currentScore);
}

var addGreen = function(green) {
    currentScore + green;
    console.log("Your Score: " + currentScore);
}

var addYellow = function(yellow) {
    currentScore + yellow;
    console.log("Your Score: " + currentScore);
}


// Functions being called
startGame();

$("#blue").click(function() {
    addBlue(blue);
});

$("#red").click(function() {
    addRed(red);
});

$("#green").click(function() {
    addGreen(green);
});

$("#yellow").click(function() {
    addYellow(yellow);
});
