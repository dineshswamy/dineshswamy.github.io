$(document).ready(function(){

	$(".fancybox").fancybox();

	$(".thumbnails").click(function(event){

		href = $(this).attr("href");

		console.log("Inside thumbnails");

		image_src = $(href+" img").attr("data-src");

		$(href+" img").attr("src",image_src).load(function(){
			
			
			$(".description-holder").css("height",$(this).height());
			
			$(".description-holder").css("width",$(this).width());

		});

	});


	$("#thumbnail").click(function(){
		open_modal(this);
	});



});

function open_modal(element)
{
	
}