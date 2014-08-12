$(document).ready(function(){

	$(".fancybox").fancybox({

		'autoDimensions':true;

	});

	$(".thumbnails").click(function(event){

		href = $(this).attr("href");

		console.log("Inside thumbnails");

		image_src = $(href+" img").attr("data-src");

		$(href+" img").attr("src",image_src).load(function(){

				$.fancybox.resize();			
			
//			$(".description-holder").css("height",$(this).height());

//		$(".description-holder").css("width",$(this).width());



		});

	});


	



});

function open_modal(element)
{
	
}