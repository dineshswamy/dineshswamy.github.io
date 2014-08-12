$(document).ready(function(){

	$(".fancybox").fancybox({

		'autoDimensions':true

	});

	$(".thumbnails").click(function(event){

		href = $(this).attr("href");

		console.log("Inside thumbnails");

		image_src = $(href+" img").attr("data-src");

		$.fancybox.showLoading();

		$(href+" img").attr("src",image_src).load(function(){

				$.fancybox.showActivity();
				$.fancybox.update();			
			




		});

	});


	



});

function open_modal(element)
{
	
}