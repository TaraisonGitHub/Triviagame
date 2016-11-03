
//==================PSEUDO-CODE===================================

//When game loads, the screen is a set of instructions and a START GAME button
//User presses START GAME button (this starts the timer)
//Screen becomes a form with radio button groups
//User selects one radio button from each group
//Selections are compared against an array of correct answers to see if they match, if they match, the answer is "correct", if there is no match the answer is "incorrect"
//Display results when all questions are answered, or when timer runs out (this ends the game)
//After timer runs out, a REPLAY button appears

//==================GLOBAL VARIABLES==============================

var correctAnswers = 0;
var incorrectAnswers = 0;

//==================GAME INITIALIZE===============================

// start the game by setting the interval function
$('#start').on('click', function() {
  startTimer();

    function startTimer () {
      myInterval = setInterval(intervalEnd, 3000 * 30);
    }
    function intervalEnd() {
      alert("Time's Up!");
    }

// get each radio button group by its name and see if any of them are checked; then get the checked radio's value
function getCheckedRadios(radioName) {

  var radioButtons = document.getElementsByName((radioName).toString());
    for (var x = 0; x < radioButtons.length; x++) {
      if (radioButtons[x].checked) {
        return radioButtons[x].val;
        
      }
    }
}


//check if clicked radio matches answers array (correct answer), if so, it adds 1 to the correct answers
function checkAnswer(checkedValue) { //checkedValue is a variable being passed int to the function CheckAnswer
  var answers =["Nevada", "Wisconsin"]; //these are the correct answers in an array
  for (var b = 0; b < answers.length; b++) {
    console.log("just cruising");
      if (answers[b] == checkedValue){// if any of the correct answers matches the checkedValue, 
        correctAnswers++;

      }
  }
}
// call the function getCheckedRadios twice.
 var clickedValue = "";
 for (var n = 1; n < 3; n++) {
    clickedValue = getCheckedRadios(n);
    //if something is checked (not empty) then check if it is correct
    if (clickedValue != null) {
        checkAnswer(clickedValue);
    }
  }
  console.log(correctAnswers);

});








