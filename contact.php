<?php
	include 'includes/globals.php';

	$page_title = 'Contact Us';
	$body_class = 'contact';
	$canonicalUrl = '/contact';

	include 'includes/header.php';
?>

<div id="content">
	<h1 id="page-title"><?= $page_title ?></h1>
	<div class="row row1">
		<div class="col col1">
			<h2>Appointments</h2>
			<p><a href="https://www.vagaro.com/stagbarbershop#online-scheduling" target="_blank">Book Online</a></p>
		</div>
		<div class="col col2">
			<h2>Gift Certificates</h2>
			<p><a href="https://www.vagaro.com/stagbarbershop#gift-certificates" target="_blank">Purchase Online</a></p>
		</div>
		<div class="col col3">
			<h2>General Inquiries</h2>
			<p><a href="mailto:info@stagbarbershop.com">info@stagbarbershop.com</a></p>
		</div>
		<div class="col col4">
			<h2>Employment</h2>
			<p><a href="mailto:jobs@stagbarbershop.com">jobs@stagbarbershop.com</a></p>
		</div>
	</div>
	<div class="row row2">
		<div class="col col1">
			<div class="section smaller">&#42;We do not accept appointments or cancellations via email.</div>
			<div class="hr screen"><hr /></div>
			<div class="section">
				<div class="vcard">
					<address class="author">
						<span class="org">Stag Barbershop</span>
					</address>
					<span class="adr">
						<span class="street-address">3064 South Delaware Avenue</span><br />
						<span class="locality">Milwaukee</span> <span class="region">WI</span> <span class="postal-code">53207</span>
						<span class="tel">
							<span class="value">414.489.<span>STAG</span></span>
						</span>
					</span>
				</div>
			</div>
		</div>
		<div class="col col2"><img src="/public/img/stag-window.jpg" alt="Stag Barbershop Storefront Window" /></div>
	</div>
</div>

<?php include 'includes/footer.php'; ?>