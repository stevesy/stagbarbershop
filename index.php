<?php 
	include 'includes/globals.php';

	$page_title = "Home";
	$body_class = "home";
	$page_description = "Specializing in precision haircuts and straight razor shaves customized to suit any man&rsquo;s character. Be a Man, go Stag.";

	include 'includes/header.php';
?>

<div id="content">
	<h1 id="page-title">Be a Man, Go Stag</h1>
	<div class="section">
		<p>Stag Barbershop specializes in precision haircuts and straight razor shaves customized to suit any man&rsquo;s character. Founder Jess Stern captures the balance between old school sophistication and innovative charm, creating a classic yet contemporary home for the modern gentleman.</p>
	</div>
	<div class="hr"><hr /></div>
	<div class="section">
		<div class="vcard">
			<span class="org">Stag Barbershop</span><br />
			<span class="adr">
				<span class="street-address">3064 South Delaware Avenue</span><br />
				<span class="locality">Milwaukee</span> <span class="region">WI</span> <span class="postal-code">53207</span>
			</span><br />
			<span class="tel"><span class="value">414.489.<span>STAG</span></span></span>
		</div>
	</div>
	<div class="flexslider">
		<ul class="slides reduced">
			<li><img src="<?= $image ?>slideshow/home-4.jpg<?= $version; ?>" alt="" /></li>
			<li><img src="<?= $image ?>slideshow/home-1.jpg<?= $version; ?>" alt="" /></li>
			<li><img src="<?= $image ?>slideshow/home-3.jpg<?= $version; ?>" alt="" /></li>
		</ul>
	</div>
</div>

<?php include 'includes/footer.php'; ?>