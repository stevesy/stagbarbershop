$(function () {

	if($.flexslider && $('.flexslider').length > 0) {
		$('.flexslider').flexslider({
			slideshowSpeed: 3000,
			controlNav: false,
			directionNav: false
		});
	}

	$tel = $('.tel');
	if ($tel.length > 0) {
		$telReplaceElement = $tel.find('.value span');
		$telReplaceText = $telReplaceElement.text();
		$tel.hover(
			function () {
				$telReplaceElement.text(7824);
			},
			function () {
				$telReplaceElement.text($telReplaceText);
			}
		);
	}

	/*if($('#form-email-list').length > 0) {
		$('#form-email-list').validate({
			rules: {
				name: { required: true },
				email: { required: true, email: true }
			},
			messages: {
				name: "Name is required",
				email: "Valid email is required"
			}
		});
	}*/

});