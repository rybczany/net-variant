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

	$('.leave').on('mouseenter', function(){
		$('.hide-search').addClass('active');
		if('.hide-search.active'){
			$(this).on('mouseleave', function(){
				$('.hide-search').removeClass('active')
			})
		};
	$('.leave').keypress(function(event){
		var keycode = (event.keyCode ? event.keyCode : event.which);
		if(keycode == '13'){
			$('.hide-search').removeClass('active');
		}

		});
		console.log(this);
	})

	

});