import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import 'slick-carousel';
import 'magnific-popup';


$(() => {
	svg4everybody();


	// slider

	const $slider = $('.slider__list');

	$slider.slick({
		slidesToShow: 1,
		adaptiveHeight: true,

		nextArrow: '<a href="#next" class="slider__next">Вперед</a>',
		prevArrow: '<a href="#prev" class="slider__prev">Назад</a>'
	});


	// magnific popup

	$('.works__link').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		},
		mainClass: 'works-popup',
		closeBtnInside: true,
		// fixedContentPos: false,
		removalDelay: 500,
		callbacks: {
			beforeOpen: function() {
				// just a hack that adds mfp-anim class to markup
				this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'works-popup mfp-figure mfp-with-anim');
				this.st.mainClass = this.st.el.attr('data-effect');
			}
		}
	});






});








