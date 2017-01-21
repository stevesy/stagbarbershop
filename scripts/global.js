$(function() {
	$('.flexslider').flexslider({
		slideshowSpeed: 3000,
		controlNav: false,
		directionNav: false
	});

	var $tel = $('.tel');
	if ($tel.length > 0) {
		var $telReplaceElement = $tel.find('.value span');
		var telReplaceText = $telReplaceElement.text();
		$tel.hover(function() {
			$telReplaceElement.text(7824);
		}, function() {
			$telReplaceElement.text(telReplaceText);
		});
	}
});