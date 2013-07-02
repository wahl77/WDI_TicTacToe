// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).ready(function(){
	
	/* First tap will be an x */
	var x = true;

	/* Initialize all values to "" */
	var board = new Array(9);
	for (var i = 0; i < board.length; ++i){
		board[i] = i;
	}

	$('div').on("click", put_value);
		
	/* Start a new game */
	function start_new_game(){
		window.location.href = window.location.href;
	}
	
	/* Puts in a value of X or O if the space is available */
	function put_value(event){
		
		/* Find out if its x's or o's turn */
		turn = x ? "x" : "o"
		
		/* Find out which square was clicked */
		clicked_square = $("#" + event.target.id.toString())
		
		if (clicked_square.text() == ""){ /* Only play if clicked_square was previously empty */
			
			clicked_square.text(turn); 				/* Fill the square in */
			board[parseInt(event.target.id)] = x;  /* Keep track on the board */
			
			if (check_for_win(board)){
				alert("Game Over, " + turn + " won");
				start_new_game();
				return;
			}
			
			if (is_draw(board)){
				alert("Game is a draw");
				start_new_game();
			}
			/* Swap players */ 	
			x = !x			
		}
	}	
	
	/* Returns true if game is a draw */
	function is_draw(board){
		for (var i = 0; i < board.length; ++i){
			if (board[i] == i){
				return false
			}
		}
		return true;
	}	
	
	/* Check if all elements in an array are equal */
	function is_equal(array){
		/* If only one element, return true */
		if (array.length == 1){
			return true
		}
		/* Go through array, and check each one is equivalent to number above */
		for (var i = 0; i < array.length-1; ++i){
			if (array[i] !== array[i+1]){
				return false
			}
		}
		return true
	}
	
	/* Find if the game is over */
	function check_for_win(board){
		return (
			is_equal([board[0], board[1], board[2]]) ||
			is_equal([board[3], board[4], board[5]]) ||
			is_equal([board[6], board[7], board[8]]) ||
			is_equal([board[0], board[3], board[6]]) ||
			is_equal([board[1], board[4], board[7]]) ||
			is_equal([board[2], board[5], board[8]]) ||
			is_equal([board[0], board[4], board[8]]) ||
			is_equal([board[2], board[4], board[6]]) 			
		)
	}
	
});