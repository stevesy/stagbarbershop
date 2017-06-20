<?php
	include("includes/globals.php");
	
	$page_title = "Page Not Found";
	$body_class = "error404";
	$norobots = true;

	include("includes/header.php");
?>

<div id="content">
	<h1 id="page-title"><?= $page_title; ?></h1>
	<div class="section">
		<p>Sorry, the requested URL does not exist.</p>
	</div>
</div>
		
<?php include("includes/footer.php"); ?>
