<?php
	$version = '?v=20170120';
	$httpHost = $_SERVER['HTTP_HOST'];
	
	$isProduction = false;
	if (strpos($httpHost, 'stagbarbershop.com')) {
		$isProduction = true;
	}

	$root = '/';
	$css = '/public/css/';
	$image = '/public/img/';	
	$script = '/public/js/';
	$client = 'Stag Barbershop';
	$description = 'Old School Barbershop for the Modern Man';
?>