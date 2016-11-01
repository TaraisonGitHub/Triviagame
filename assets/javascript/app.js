
//==================PSEUDO-CODE===================================


var correctAnswers = 0;
//the questions should be hidden when the game loads
//$('#question_one').hide();
//$('#question_two').hide();
//$('#next_question').hide();
//user presses start button, and the time starts

//check if clicked radio matches answers array (correct answer), if so, it adds 1 to the correct answers
function checkAnswer(checkedValue) { //checkedValue is a variable being passed int to the function CheckAnswer
  var answers =["Nevada", "Wisconsin"]; //these are the correct answers in an array
  for (var b = 0; b < answers.length; b++) {
      if (answers[b] == checkedValue){// if any of the correct answers matches the checkedValue, 
        correctAnswers++;

      }
  }
}

//iterate through each radio button group and see if the status of any of them is "checked"
function getAnswer(radioName) { //radoName is just a variable being passed into the function getAnswer
//getAnswer is called on line 54

  var radioButtons = document.getElementsByName((radioName).toString()); //radioName checks the groups by their name, which is 1 or 2, and converts that into a String
  for (var x = 0; x < radioButtons.length; x++) {//iterate ("count") all the radio buttons
  	if (radioButtons[x].checked) {
  		console.log("getAnswer is running");
  		return radioButtons[x].value; //the function stops running, and returns the value of the checked radio to you. It does this once for each group.
      //if "Texas", is checked, this is saying "I looked at all the radio buttons, and the one with the value 'Texas' is checked"
  	}
  }
}

$('#start').on('click', function() {
//	$('#start').hide();
	startTimer();
	console.log("started");
	var myInterval;

    function startTimer () {
    	myInterval = setTimeout(intervalEnd, 3000);
    	alert("myInterval");
    }
    function intervalEnd() {
    	alert("Time's Up!");
    }

// call the function getAnswer twice.
 var clickedValue = "";
 for (var n = 1; n < 3; n++) {
    clickedValue = getAnswer(n);
    //if something is checked (not empty) then check if it is correct
    if (clickedValue != null) {
        checkAnswer(clickedValue);
    }
  }
  alert(correctAnswers);


    //question one should appear after the button is clicked
//    $('#question_one').show();
 //   $('#next_question').show();
});

//display results when all questions are answered, or when timer runs out
//user makes a selection

//record whether selection was correct answer or not, stor in wins and looses variables
//repeat previous two steps for all the questions in the quiz