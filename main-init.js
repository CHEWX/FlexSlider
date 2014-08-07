// Can also be used with $(document).ready()

$(window).load(function() {

	// EXAMPLE
	// .flexslider
	//		.inner-slider
	//			.flexslider__item
	//			.flexslider__item
	//			.flexslider__item

	// Add the slider container below eg, .hero
	$('.flexslider').flexslider({
		// if you not using plain ul li then the add the below class for custom selector
		selector: '.inner-slider > .flexslider__item',
		// choose slide or fade
		animation: "slide",
		slideshowSpeed: "8000",
		// tab through slides
		controlNav: false,
		// directional nav prev and next
		directionNav: false
	});

});


