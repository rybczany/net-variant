$(document).ready(function() {
	
	$('.dropdown').on('mouseenter', function(){
		$('.hide').addClass('active');
		if('.hide.active'){
			$(this).on('mouseleave', function(){
				$('.hide').removeClass('active')
			})
		};
		if('.hide.active'){
			$(this).on('click', function(){
				$('.hide').removeClass('active')
			})
		}
		console.log(this);
	});



});