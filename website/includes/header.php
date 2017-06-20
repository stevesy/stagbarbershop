<?php
	$forceDesktop = $_GET{'desktop'};
	if ($forceDesktop === "1")
		setcookie("forceDesktop", 1, time() + 60 * 15);
?>

<!DOCTYPE html>
<html dir="ltr" lang="en-US" class="no-js">
	<head>
		<meta charset="utf-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width,initial-scale=1" />
		<?php if (isset($norobots) && $norobots == true) { ?>
			<meta name="robots" content="noindex,nofollow" />
		<?php } ?>
		<link rel="shortcut icon" href="/favicon.ico" />
		<title><?php if ($body_class == "home") {
			echo $client . " | " . $description . " &bull; Milwaukee WI";
		} else {
			echo $page_title . " | " . $client;
		} ?></title>
		<?php if (isset($canonicalUrl)) { ?>
			<link rel="canonical" href="http://<?php echo $httpHost.$canonicalUrl ?>" />
		<?php } ?>
		<?php if (!empty($page_description)) { ?>
			<meta name="description" content="<?php echo $page_description ?>" />
		<?php } ?>
		<link rel="stylesheet" href="/public/css/site.css<?php echo $version ?>" />
		<script src="/public/js/modernizr.js"></script>
		<?php include("mobiledetect.php"); ?>
		<?php include("analytics.php"); ?>
	</head>
	<body class="<?php echo $body_class ?>">
		<?php include 'notification.php'; ?>
		<div id="container">
			<header id="header">
				<img src="/public/img/logo.jpg" class="print" alt="Stag Barbershop" />
				<h6 id="site-title"><a href="/" title="Home"><?php echo $client ?></a></h6>
				<nav id="nav">
					<h6 class="assistive-text">Primary Navigation</h6>
					<a class="assistive-text" href="#content">Skip to content</a>
					<ul>
						<li id="menu-item-home"><a href="/">Home</a></li>
						<li id="menu-item-services"><a href="/services">Barber Services</a></li>
						<li id="menu-item-products"><a href="/products">Products</a></li>
						<li id="menu-item-press"><a href="/press">Press</a></li>
						<li id="menu-item-location"><a href="/location">Hours &amp; Location</a></li>
						<li id="menu-item-contact"><a href="/contact">Contact</a></li>
					</ul>
				</nav>
			</header>

			<main id="main">
