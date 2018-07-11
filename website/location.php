<?php
	include 'includes/globals.php';
	
	$page_title = "Hours &amp; Location";
	$body_class = "location";
	$canonicalUrl = "/location";

	include 'includes/header.php';
?>

<div id="content">
	<h1 id="page-title"><?= $page_title; ?></h1>
	<div class="section">
		<ul class="reduced hours">
			<li><span class="tabbed">Tuesday &ndash; Friday</span> 10am&ndash;7pm</li>
			<li><span class="tabbed">Saturday</span> 9am&ndash;3pm</li>
			<li><span class="tabbed">Sunday &amp; Monday</span> Closed</li>
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
			</span><br />
			<a href="http://g.co/maps/qbknr" target="_blank">Get Directions</a>
		</p>
		<a class="btn" href="https://www.vagaro.com/stagbarbershop/book-now" target="_blank">Book Appointment</a>
	</div>
	<a href="http://g.co/maps/qbknr" target="_blank"><img src="/public/img/map.png" id="map" /></a>
</div>

<?php include 'includes/footer.php'; ?>
