<?php
	include 'includes/globals.php';

	$page_title = "Barber Services";
	$body_class = "services";
	$canonicalUrl = "/services";
	
	include 'includes/header.php';
?>

<div id="content">
	<h1 id="page-title"><?= $page_title; ?></h1>
	<div class="section">
		<ul class="service-list reduced">
			<li>Men&rsquo;s Haircut <span>$35</span></li>
			<li>Shave <span>$30</span></li>
			<li>Men&rsquo;s Haircut &amp; Shave <span>$60</span></li>
		</ul>
		<p class="small">&#42;By appointment only.<p>
	</div>
	<div class="hr"><hr /></div>
	<div class="section">
		<h2>Add&#45;on services</h2>
		<p>Beard <span class="sep">|</span> Mustache Trim <span class="block">Brow <span class="sep">|</span> Ear <span class="sep">|</span> Neck Waxing</span> Grey Blending <span class="sep">|</span> Shoe Shines <span class="smaller">(Tues&#45;Fri)</span></p>
		<p class="small">&#42;Please ask for prices.</p>
		<a class="btn" href="https://www.vagaro.com/stagbarbershop#online-scheduling" target="_blank">Book Appointment</a>
	</div>
	<div class="flexslider">
		<ul class="reduced slides"> 
			<li><img src="<?= $image ?>slideshow/services-1.jpg<?= $version; ?>" alt=""/></li>
			<li><img src="<?= $image ?>slideshow/services-5.jpg<?= $version; ?>" alt="" /></li>
			<li><img src="<?= $image ?>slideshow/services-4.jpg<?= $version; ?>" alt="" /></li>
			<li><img src="<?= $image ?>slideshow/services-6.jpg<?= $version; ?>" alt="" /></li>
		</ul>
	</div>
</div>

<?php include 'includes/footer.php'; ?>
