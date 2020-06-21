import * as $ from 'jquery'

$(document).ready(function () {
	$('.header-top__burger').click(function (e) {
		$('.header-top__burger,.header-top-nav').toggleClass('active')
		$('body').toggleClass('lock')
	})
})

$('.header-top-nav-item').click(function(event) {
    $('.header-top__burger,.header-top-nav').removeClass('active')
    $('body').removeClass('lock')
})