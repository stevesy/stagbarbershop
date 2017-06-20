const $ = global.jQuery = global.$ = require('jquery');
require('flexslider');

$(function() {
	$('.flexslider').flexslider({
		slideshowSpeed: 3000,
		controlNav: false,
		directionNav: false
	});

	const $tel = $('.tel');
	if ($tel.length > 0) {
		const $telReplaceElement = $tel.find('.value span');
		const telReplaceText = $telReplaceElement.text();
		$tel.hover(function() {
			$telReplaceElement.text(7824);
		}, function() {
			$telReplaceElement.text(telReplaceText);
		});
	}
});