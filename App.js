//script 
// User choice
var userChoice = prompt("Do you choose rock, paper, scissors?");
if (!userChoice) {
    //User choice was undefined
    document.write("<p>Player 1, you cheated! Start over by refreshing this page!");
    } else {
        // Display user choice
        document.write("<p>PLauer 1:" + " " + userChoice + "</P>");
    }
    // Computer choice 
    var computerChoice = Math.random();
    if (computerChoice < 0.34) {
        computerChoice = "rock";
    } else if(computerChoice <= 0.67) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    // Display Computer choice
    document.wite("<p>Computer:" + " " + computerChoice + "</p>";
    //Compare user choice vs computer choice 
    var compare = function(choice1, choice2) {
        if (choice1 === choice2) {
            return "It's a tie!";
        }
        if (choice1 === "rock") {
            if (choice === "scissors")
        // rock wins
            return "You win!";
        } else {
            // paper win
            return "You Lose! Try again.";
        }
        if (choice1 === "paper") {
            if (choice2 === "rock")
        // rock wins
            return "You win!";
        } else {
            // scissors win
            return "You lose! Try again.";
        }
        if (choice1 === "scissors") {
            if (choice2 === "rock")
            // rock wins
            return "You lose! Try again.";
        } else {
            // scissors wins
            return "You win!";
            }
        // scoreboard results 
        //var userPoints = 0;
       // var computerPoints = 0;
        //var scoreboard = function(result1, result2) {
            //if (result1  !== result 2)
                // adding points to winner 
                //userPoints = userPoints + 1;
                //return "You get one point!"
        
        }

     }
