<?php
	$version = "?v=20160209";
	
	$isProduction = false;
	if (($_SERVER["HTTP_HOST"] == "www.stagbarbershop.com") || ($_SERVER["HTTP_HOST"] == "stagbarbershop.com")) $isProduction = true;

	$root = "/";
	$css = $root."css/";
	$image = $root."images/";	
	$script = $root."scripts/";
	$client = "Stag Barbershop";
	$description = "Old School Barbershop for the Modern Man";
?>