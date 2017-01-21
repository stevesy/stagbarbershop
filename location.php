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
		<?php if (date('Ymd') <= 20151227) { ?>
			<h2>Holday Hours</h2>
			<ul class="reduced hours">
				<li><span class="tabbed">Monday, Dec. 21</span> 12pm-8pm</li>
				<li><span class="tabbed">Tuesday, Dec. 22</span> 10am-8pm</li>
				<li><span class="tabbed">Wednesday, Dec. 23</span> 10am-7pm</li>
				<li><span class="tabbed">Thursday, Dec. 24</span> 9am-2pm</li>
			</ul>
			Stag Barbershop will be CLOSED<br /> Friday, Dec. 25 &ndash; Monday, Dec. 28.<br /> Happy Holidays!
		<?php } else { ?>
			<ul class="reduced hours">
				<li><span class="tabbed">Tuesday &amp; Thursday</span> 10am-8pm</li>
				<li><span class="tabbed">Wednesday &amp; Friday</span> 10am-7pm</li>
				<li><span class="tabbed">Saturday</span> 9am-3pm</li>
				<li><span class="tabbed">Sunday &amp; Monday</span> Closed</li>
			</ul>
		<?php } ?>
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
		<a class="btn" href="https://www.vagaro.com/stagbarbershop#online-scheduling" target="_blank">Book Appointment</a>
	</div>
	<a href="http://g.co/maps/qbknr" target="_blank"><img src="<?= $image ?>map.png" id="map" width="370" height="400" /></a>
</div>

<?php include 'includes/footer.php'; ?>
