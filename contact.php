<?php
	include 'includes/globals.php';

	$page_title = 'Contact Us';
	$body_class = 'contact';
	$canonicalUrl = '/contact';
	$footerScript = '<script src="'.$script.'jquery.validate.min.js"></script>';

	include 'includes/header.php';
?>

<div id="content">
	<h1 id="page-title"><?= $page_title ?></h1>
	<div class="row row1">
		<div class="col col1">
			<h2>Appointments</h2>
			<p><a href="http://www.vagaro.com/stagbarbershop" target="_blank">Book online</a></p>
		</div>
		<div class="col col2">
			<h2>Gift Certificates</h2>
			<p><a href="http://www.vagaro.com/stagbarbershop" target="_blank">Visit our Vagaro Page</a></p>
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
			<?php /* ?><div class="section screen">
				<h2>Join our Mailing List</h2>
				<?
					if (isset($_POST['email'])) {
						$email = $_POST['email'];
						$name = $_POST['name'];
						$error = "";
						$email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';

						if (!preg_match($email_exp,$email)) {
							$error .= "<span class=\"small error\">Please enter a valid email address.</span>";
						}
						 
						function clean_string($string) {
							$bad = array("content-type","bcc:","to:","cc:","href");
							return str_replace($bad,"",$string);
						}

						if ($isProduction) {
							$to = "info@stagbarbershop.com";
						} else {
							$to = "skaufman@ymail.com";
						}
						
						$from = "info@stagbarbershop.com";
						$subject = "Mailing List";
						$message .= "Name: ".clean_string($name)."\nEmail: ".clean_string($email)."\n";
				
						$headers = 'From: '.$from."\r\n".
							'X-Mailer: PHP/' . phpversion();
						
						if (strlen($error) > 0) {
							echo $error;
						} else {
							@mail($to, $subject, $message, $headers);
							echo "<p class=\"smaller\">Thank you, your information has been successfully submitted.</p>";
						}
					} else {
				?>
					<form id="form-email-list" method="post">
						<fieldset class="super">
							<legend class="assistive-text">Mailing List Sign-Up</legend>
							<div class="field">
								<label for="name">Name</label>
								<input class="textfield" type="text" name="name" id="name" />
							</div>
							<div class="field">
								<label for="email">Email</label>
								<input class="textfield" type="text" name="email" id="email" />
							</div>
							<div>
								<input type="submit" class="btn" id="submit-email" value="Sign Up" />
							</div>
						</fieldset>
					</form>
				<?php } ?>
			</div><?php */ ?>
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
		<div class="col col2"><img src="<?= $image ?>stag-window.jpg" alt="Stag Barbershop Storefront Window" /></div>
	</div>
</div>

<?php include 'includes/footer.php'; ?>