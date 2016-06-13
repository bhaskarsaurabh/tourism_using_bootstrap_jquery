$(document).ready(function(){
	$('.placesx-data').on('mouseenter', 'img', function(){
		$(this).closest('.placesx-data').find('p').slideDown();
	});

	$('.placesx-data').on('mouseleave', 'img', function(){
		$(this).closest('.placesx-data').find('p').slideUp();
	});
});