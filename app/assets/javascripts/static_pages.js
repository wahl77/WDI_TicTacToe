// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).ready(function(){
	var x = true;
	$('div').on("click", put_value);
	
	
	/* Puts in a value of X or O if the space is available */
	function put_value(event){
		turn = x ? "x" : "o"
		clicked_square = $("#" + event.target.id.toString())
		if (clicked_square.text() == ""){
			clicked_square.text(turn);
			x = !x
			
		}
		console.log(event);
	}
	
});