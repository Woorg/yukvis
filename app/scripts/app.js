import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import 'slick-carousel';

$(() => {
	svg4everybody();


	const $slider = $('.slider__list');

	$slider.slick({
		slidesToShow: 1,
		adaptiveHeight: true,

		nextArrow: '<a href="#next" class="slider__next">Вперед</a>',
		prevArrow: '<a href="#prev" class="slider__prev">Назад</a>'
	});


});
