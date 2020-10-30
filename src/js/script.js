$(document).ready(function(){
    $('[data-modal=agreement]').on('click', function() {
		$('.overlay, #agreement').fadeIn();
    });
    $('[data-modal=login]').on('click', function() {
		$('.overlay, #login').fadeIn();
	});
	$('.modal__close').on('click', function() {
		$('.overlay, #agreement, #login').fadeOut();
	});
});