
//==================PSEUDO-CODE===================================

//user presses start button, and the time starts
//<button onclick="startTimer()">Try it</button>


$('#start').on('click', function(startTimer) {
	console.log("started");
	var myInterval;

    function startTimer () {
    	myInterval = setInterval(hello, 3000);
    }
    function hello() {
    	alert("hello");
    }
});
//display results when all questions are answered, or when timer runs out
//user makes a selection
//record whether selection was correct answer or not, stor in wins and looses variables
//repeat previous two steps for all the questions in the quiz
