$(document).ready(function(){

	$(".fancybox").fancybox();

	$(".thumbnails").click(function(event){

		href = $(this).attr("href");

		console.log("Inside thumbnails");

		image_src = $(href+" img").attr("data-src");

		$.fancybox.showLoading();

		$(href+" img").attr("src",image_src).load(function(){

				$.fancybox.hideLoading();
				$.fancybox.update();			
			




		});

	});


	



});

function open_modal(element)
{
	
}