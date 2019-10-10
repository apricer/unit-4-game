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
//     console.log("Blue: " + blue + " | "Red: " + red + " | "Green: " + green + " | "Yellow: " + yellow + ");
}


// Functions being called
startGame();
$("#blue").click(function() {
});

$("#red").click(function() {
});

$("#green").click(function() {
});

$("#yellow").click(function() {
});
