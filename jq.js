$(window).scroll(function() {
	var windowWidth =$(this).width();
	var windowHeight=$(this).height();
	var windowscrollTop=$(this).scrollTop();

	if (windowscrollTop > 20) {
		$('.banner h2').css('display','none');
		$('.banner .info').css('display','block');
	}
	else{
		$('.banner h2').css('display','block');
		$('.banner .info').css('display','none');
	}
}