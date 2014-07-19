$(document).ready(function(){

$('.chatminion-wh-questions a').on('click', function(event) {

	event.preventDefault();

    var target = $(this).attr("href");
    
    console.log(target);

    $.smoothScroll({scrollTarget: target,speed:1000,easing:'swing'});
    
});


});