<?php
	include 'includes/globals.php';

	$page_title = "In the Press";
	$body_class = "press";
	$canonicalUrl = "/press";
	
	include 'includes/header.php';
?>

<div id="content">
	<h1 id="page-title"><?= $page_title; ?></h1>
	<ul class="press-list">
		<li><a href="http://www.details.com/story/best-barbershops-in-the-usa" target="_blank">Details Magazine</a></li>
		<li><a href="http://www.hypemke.com/stag-barbershop" target="_blank">Hype MKE</a></li>
		<li><a href="http://www.onmilwaukee.com/living/articles/stagbarbershop.html" target="_blank">OnMilwaukee.com</a></li>
		<li><a href="http://www.salontoday.com/photos/salon-spa-tours/Cooler-by-the-Lake-149901695.html" target="_blank">Salon Today</a></li>
		<li><a href="http://www.greatermkemen.com/2012/02/heview-stag-barbershop.html" target="_blank">Greater MKE Men</a></li>
		<li><a href="http://www.urbanmilwaukee.com/2011/11/mark-herro-aka-mantic59-comes-to-stag-and-brings-his-razor" target="_blank">Urban Milwaukee</a></li>
	</ul>
	<a class="btn" href="https://www.vagaro.com/stagbarbershop#online-scheduling" target="_blank">Book Appointment</a>
	<div class="flexslider">
		<ul class="reduced slides">
			<li><img src="<?= $image ?>slideshow/press-1.jpg<?= $version; ?>" alt="" /></li>
			<li><img src="<?= $image ?>slideshow/press-2.jpg<?= $version; ?>" alt="" /></li>
			<li><img src="<?= $image ?>slideshow/press-3.jpg<?= $version; ?>" alt="" /></li>
			<li><img src="<?= $image ?>slideshow/home-6.gif<?= $version; ?>" alt="" /></li>
		</ul>
	</div>
</div>

<?php include 'includes/footer.php'; ?>
