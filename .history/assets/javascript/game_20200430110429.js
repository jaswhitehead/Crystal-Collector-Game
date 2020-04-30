// GLOBAL VARIABLES

// Crystal Variables
var crystal = {
    purple:
    {
        name: "purple",
        value: 0
    },
    yellow:
    {
        name: "yellow",
        value: 0
    },
    red:
    {
        name: "red",
        value: 0
    },
    blue:
    {
        name: "green",
        value: 0
    },
}

//FUNCTIONS

var getRandom = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

var startGame = function () {
    // Reset the current score
    currentScore = 0;
    // Set a new target score (19-120)
    targetScore = getRandom(19, 120);
    // Set different values for each of the crystals (1-12)
    crystal.purple.value = getRandom(1, 12);
    crystal.yellow.value = getRandom(1, 12);
    crystal.red.value = getRandom(1, 12);
    
    
    // Change the HTML to reflect all of these changes
    $("#yourScore").html(currentScore);
    $("#targetScore").html(targetScore);
    // Console log to test 
    console.log("------------------------");
    console.log("Target Score: " + targetScore);
    console.log("Purple: " + crystal.purple.value + " | Yellow: " + crystal.yellow.value + " | Red: " + crystal.yellow.value + " | Red: " + crystal.red.value + " | Green: " + crystal.green.value);
    console.log("------------------------");
};

// Respond to clicks on the crystals
var addValues = function (crystal) {
    // Change current score
    currentScore = currentScore + crystal.value;
    // Change the HTML to reflect changes in current score
    $("#yourScore").html(currentScore);
    // Call checkWin Function
    checkWin();
    // Testing console
    console.log("Your score " + currentScore);
}

// Check if user Won or Lost and reset the game
var checkWin = function () {
    // Check if currentScore is larger than targetScore
    if (currentScore > targetScore) {
        console.log("You lost");
        // Add to loss counter
        lossCount++;
        // Change HTML to reflect changes
        $("#lossCount").html(lossCount);
        // Restart the game
        setTimeout(function () {
            alert("Sorry. You Lost");
            startGame();
        }, 00);
    }
    else if (currentScore == targetScore) {
        alert("Congratulations! You Won!");
        console.log("You won");
        // Add to win counter
        winCount++;
        // Change HTML to reflect changes
        $("#winCount").html(winCount);
        // Restart the game
        setTimeout(function () {
            alert("Sorry. You Lost");
            startGame();
        }, 00);
    }
}
// MAIN PROCESS
//---------------------------------------------------------
startGame();

$("#purple").click(function () {
    addValues(crystal.purple);
});

$("#yellow").click(function () {
    addValues(crystal.yellow);
});

$("#red").click(function () {
    addValues(crystal.red);
});

$("#green").click(function () {
    addValues(crystal.green);
});

// Scores: target and current
var targetScore = 0;
var currentScore = 0;

// Wins and Losses
var winCount = 0;
var lossCount = 0;

