// Variables

var crystal = {
    blue:   {name: "Blue", value: 0},
    green:  {name: "Green", value: 0},
    red:    {name: "Red", value: 0},
    yellow: {name:"Yellow", value: 0}
};

// Scores
var currentScore = 0;
var targetScore = 0;

// Wins/Losses
var winNumber = 0;
var lossNumber = 0;

// Functions

var startGame = function() {

    var currentScore = 0;

    var getRandom = function(min, max) {
        return Math.floor(Math.random() * (max - min +1)) + min;
    }

    targetScore = getRandom(19, 120);
    
    crystal.blue.value = getRandom(1, 12);
    crystal.red.value = getRandom(1, 12);
    crystal.green.value = getRandom(1, 12);
    crystal.yellow.value = getRandom(1, 12);

    $("#yourScore").html(currentScore);
    $("#targetScore").html(targetScore);

    // Change HTML

    $("#yourScore").html(currentScore);
    $("#targetScore").html(targetScore);

    //Console Log

    console.log("Target Score: " + targetScore);
    console.log("Blue: " + crystal.blue.value + " | Red: " + crystal.red.value + " | Green: " + crystal.green.value + " | Yellow: " + crystal.yellow.value);
}


var addClicks = function(crystal) {
    currentScore = currentScore + crystal.value;
    $("#yourScore").html(currentScore);
    ifWin();
    console.log("Your score: " + currentScore);

}

var ifWin = function() {
    if(currentScore > targetScore) {
        alert("Oh no, You Lost!!");
        console.log("Oh no, You Lost!!");
    }
    else if (currentScore == targetScore) {
        alert("You're Awesome, You Win!!");
        console.leg("You're Awesome, You Win!!")
    }

}



//Starts Game
startGame();

$("#blue").click(function() {
    addClicks(crystal.blue);
});

$("#red").click(function() {
    addClicks(crystal.red);
});

$("#green").click(function() {
    addClicks(crystal.green);
});

$("#yellow").click(function() {
    addClicks(crystal.yellow);
});
