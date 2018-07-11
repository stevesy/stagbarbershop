<?php
	include("includes/globals.php");
	$canonical_url = "mobile";
?>

<!DOCTYPE html>
<html dir="ltr" lang="en-US">
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
		<title>Stag Barbershop &bull; Old School Barbershop for the Modern Man &bull; Milwaukee WI</title>
		<link rel="shortcut icon" href="/favicon.ico" />
		<link rel="stylesheet" href="/public/css/mobile.css" />
		<?php include("includes/analytics.php"); ?>
	</head>
	<body>
		<?php include 'includes/notification.php'; ?>
		<div id="container">
			<header>
				<img src="/public/img/logo.png" alt="Stag Barbershop" />
			</header>

			<div id="content">
				<h2>Services</h2>
				<p>
					Men&rsquo;s Haircut&nbsp; $35<br />
					Shave&nbsp; $30<br />
					Men&rsquo;s Haircut &amp; Shave&nbsp; $60
				</p>
				<p style="font-size:13px;max-width:300px;margin:-0.75em auto 0">&#42;By appointment only.<p>

				<div class="hr"><hr /></div>

				<h2>Hours</h2>
				<p>
					Tuesday &ndash; Friday &nbsp;&nbsp; 10am&ndash;7pm<br />
					Saturday &nbsp;&nbsp; 9am&ndash;3pm<br />
					Sunday &amp; Monday &nbsp;&nbsp; Closed
				</p>

				<div class="hr"><hr /></div>

				<h2>Location</h2>
				<p>
					3064 South Delaware Avenue<br />
					Milwaukee WI 53207<br />
					<a href="http://g.co/maps/qbknr">Get Directions</a>
				</p>

				<div class="hr"><hr /></div>

				<h2>Contact</h2>
				<p><a href="tel:4144897824">414.489.STAG</a></p>
				<h3>Appointments</h3>
				<p><a href="https://www.vagaro.com/stagbarbershop/book-now" target="_blank">Book Online</a></p>

				<h3>General Inquiries</h3>
				<p><a href="mailto:info@stagbarbershop.com">info@stagbarbershop.com</a></p>
				<p style="font-size:13px;margin:-16px 0 0">&#42;We do not accept appointments via email.</p>
			</div>

			<footer>&copy; <?= date('Y'); ?> <?= $client; ?> &bull; <a href="<?= $root ?>?desktop=1">View Full Site</a></footer>
		</div>
	</body>
</html>