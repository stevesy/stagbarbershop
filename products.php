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
		<div class="vcard">
			<address class="author">
				<span class="fn org">Stag Barbershop</span>
			</address>
			<span class="adr">
				<span class="street-address">3064 South Delaware Avenue</span><br />
				<span class="locality">Milwaukee</span> <span class="region">WI</span> <span class="postal-code">53207</span><br />
			</span>
			<span class="tel">
				<span class="value">414.489.<span>STAG</span></span>
			</span>
		</div>
	</div>
	<div class="flexslider">
		<ul class="reduced slides">
			<li><img src="<?= $image ?>slideshow/products-3.jpg<?= $version; ?>" alt="" /></li>
			<li><img src="<?= $image ?>slideshow/products-4.jpg<?= $version; ?>" alt="" /></li>
		</ul>
	</div>
</div>

<?php include 'includes/footer.php'; ?>
