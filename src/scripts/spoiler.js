import * as $ from 'jquery'

$(document).ready(function () {
	$('.spoiler').click(function (e) {

		if ($(window).width() <= 540) { 
			
			if($('.footer-inner').hasClass('one')) {
				$('.footer-container__title').not($(this)).removeClass('active')
				$('.footer-container__wrapper').not($(this).next()).slideUp(300)
			}
			$(this).toggleClass('active').next().slideToggle(300)
		}
	})
})


// $(document).ready(function () {
// 	$('.block_title').click(function (e) {
// 		if($('.block').hasClass('one')) {
// 			$('.block_title').not($(this)).removeClass('active')
// 			$('.block_text').not($(this).next()).slideUp(300)
// 		}
// 		$(this).toggleClass('active').next().slideToggle(300)
// 	})
// })
