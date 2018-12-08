var target=0;
var wins=0;
var losses=0;
var runningTotal=0;
var crystalOne=0;
var crystalTwo=0;
var crystalThree=0;
var crystalFour=0;

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var runningTotalText = document.getElementById("runningTotal");
var targetText = document.getElementById("target");

winsText.textContent = wins;
lossesText.textContent = losses;
runningTotalText.textContent = runningTotal;

var target = Math.floor((Math.random() * 102) + 19);
targetText.textContent = target;
console.log ("Target " + target);

//Crystal One
var crystalOne = Math.floor((Math.random() * 12) + 1); 
var crystalImageOne = $("<img>");
crystalImageOne.addClass("crystal-image");
crystalImageOne.attr("src", "assets/images/crystalOne.png");
crystalImageOne.attr("data-crystalvalue", crystalOne);
$("#crystalImageOne").append(crystalImageOne);
console.log(crystalOne);

//Crystal two
var crystalTwo = Math.floor((Math.random() * 12) + 1); 
var crystalImageTwo = $("<img>");
crystalImageTwo.addClass("crystal-image");
crystalImageTwo.attr("src", "assets/images/crystalTwo.png");
crystalImageTwo.attr("data-crystalvalue", crystalTwo);
$("#crystalImageTwo").html(crystalImageTwo);
console.log(crystalTwo);

//Crystal three
var crystalThree = Math.floor((Math.random() * 12) + 1); 
var crystalImageThree = $("<img>");
crystalImageThree.addClass("crystal-image");
crystalImageThree.attr("src", "assets/images/crystalThree.png");
crystalImageThree.attr("data-crystalvalue", crystalThree);
$("#crystalImageThree").append(crystalImageThree);
console.log(crystalThree);

//Crystal four
var crystalFour = Math.floor((Math.random() * 12) + 1); 
var crystalImageFour = $("<img>");
crystalImageFour.addClass("crystal-image");
crystalImageFour.attr("src", "assets/images/crystalFour.png");
crystalImageFour.attr("data-crystalvalue", crystalFour);
$("#crystalImageFour").append(crystalImageFour);
console.log(crystalFour);



$(".crystal-image").on("click", function()
{
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    console.log("Crystal value = " + crystalValue);
    runningTotal += crystalValue;
    runningTotalText.textContent = runningTotal;
    console.log("Running total value = " + runningTotal);

    if(runningTotal === target)
        {
            alert("You win!");
            wins++;
            winsText.textContent = wins;
            runningTotal = 0;
            runningTotalText.textContent = runningTotal;
            reset();
        }   

        else if (runningTotal > target)
        {
            alert("You lose!");
            losses++;
            lossesText.textContent = losses;
            runningTotal = 0;
            runningTotalText.textContent = runningTotal;
            reset();
        }
})

    function reset()
    {
        target = Math.floor((Math.random() * 102) + 19);
        targetText.textContent = target;
        crystalImageOne.attr("data-crystalvalue", crystalOne);
        console.log ("New Target " + target);
        
        crystalOne = Math.floor((Math.random() * 12) + 1); 
        crystalImageOne.attr("data-crystalvalue", crystalOne);
        console.log("New Crystal 1 " + crystalOne);
        
        crystalTwo = Math.floor((Math.random() * 12) + 1); 
        crystalImageTwo.attr("data-crystalvalue", crystalTwo);
        console.log("New Crystal 2 " + crystalTwo);
        
        crystalThree = Math.floor((Math.random() * 12) + 1); 
        crystalImageThree.attr("data-crystalvalue", crystalThree);
        console.log("New Crystal 3 " + crystalThree);
        
        crystalFour = Math.floor((Math.random() * 12) + 1); 
        crystalImageFour.attr("data-crystalvalue", crystalFour);
        console.log("New Crystal 4 " + crystalFour);
    }