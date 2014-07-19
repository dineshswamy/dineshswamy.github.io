$(document).ready(function(){

	$(".chatminion-wh-questions a").click(function(event){
		event.preventDefault();
		scroll_to_id = $(this).attr("href");
		$.scrollTo(scroll_to_id,1000);

	});
});