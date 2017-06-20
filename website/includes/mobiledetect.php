<script>
	var isMobile = navigator.userAgent.toLowerCase().match(/(iphone|ipod|android|blackberry|opera mini|iemobile|kindle|silk|mobile)/);
	<?php if ($forceDesktop != 1 && !isset($_COOKIE['forceDesktop'])) { ?>
		if (isMobile && (window.matchMedia('(max-width: 767px)').matches))
			location.href = '/mobile';
	<?php } ?>
</script>