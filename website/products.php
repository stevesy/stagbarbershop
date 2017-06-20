<?php
	include 'includes/globals.php';

	$page_title = "Products";
	$body_class = "products";
	$canonicalUrl = "/products";

	include 'includes/header.php';
?>

<div id="content">
	<h1 id="page-title"><?= $page_title; ?></h1>
	<div class="section">
		<ul class="reduced product-list">
			<li>Bison Made</li>
			<li>Crown Shaving Company</li>
			<li>Firehouse Moustache Wax</li>
			<li>Grant&rsquo;s Golden Brand Pomade</li>
			<li>Hudson Made New York</li>
			<li>Lock Stock &amp; Barrel Grooming</li>
			<li>Stag Barbershop Beard Oil</li>
			<li>Stolen Riches</li>
		</ul>
	</div>
	<div class="hr"><hr /></div>
	<div class="section">
		<p>
			Stag Barbershop<br />
			3064 South Delaware Avenue<br />
			Milwaukee, WI 53207<br />
			<span class="tel">
				<span class="value">414.489.<span>STAG</span></span>
			</span>
		</p>
		<a class="btn" href="https://www.vagaro.com/stagbarbershop#online-scheduling" target="_blank">Book Appointment</a>
	</div>
	<div class="flexslider">
		<ul class="reduced slides">
			<li><img src="/public/img/slideshow/products-3.jpg" alt="" /></li>
			<li><img src="/public/img/slideshow/products-4.jpg" alt="" /></li>
		</ul>
	</div>
</div>

<?php include 'includes/footer.php'; ?>
