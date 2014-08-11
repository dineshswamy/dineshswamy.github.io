$(document).ready(function(){

	$(".fancybox").fancybox();

	$(".thumbnails").click(function(event){

		href = $(this).attr("href");

		console.log("Inside thumbnails");

		image_src = $(href+" img").attr("data-src");

		$(href+" img").attr("src",image_src).load(function(){
			
			console.log("loading image");
			
			$(href+" img").attr("width",this.naturalWidth);

			$(href+" img").attr("height",this.naturalHeight);

			



		});



	});


	$("#thumbnail").click(function(){
		open_modal(this);
	});



});

function open_modal(element)
{
	
}