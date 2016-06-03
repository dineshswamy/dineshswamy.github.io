$(document).ready(function(){

createBubbles();
	
});


function createBubbles() {
	bubbleHolder = $("#bubble-holder");
	for (i = 0;i<30;i++) {
		bubble = $("<div class='bubble'></div>");
		duration = Math.floor((Math.random() * 10) + 3);
		bubble.css('animation-duration', (duration)+'s');
		bubble.css('-webkit-animation-duration', (duration)+'s');
		bubbleHolder.append(bubble);
	}


}