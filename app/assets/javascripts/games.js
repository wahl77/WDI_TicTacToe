// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$('div').on("click", put_value);

function put_value(event){
	///* Find out which square was clicked */
	//clicked_square = $("#" + event.target.id.toString())
	//
	//if (clicked_square.text() == ""){ /* Only play if clicked_square was previously empty */
	//	
	//	alert("HY");
	//	clicked_square.text(turn); 				/* Fill the square in */
	//	board[parseInt(event.target.id)] = x;  /* Keep track on the board */
	//			
	//}
}


$(document).ready(function(){
	options = {
		url: window.location.href+ "/get_moves.js",
		type: "GET",
		complete: function(response){
			x = true;
			/* Find out if its x's or o's turn */
			
			
			
			
			str = response.responseText.split(",");
			console.log(str)
			for (var i = 0; i < str.length-1; ++i){	 /* The minius one is to compensate for the return character */
				turn = x ? "x" : "o";
				$("#" + parseInt(str[i])).text(turn);
				x = !x;
			}
		}
	};


	$.ajax(options);
	
});
