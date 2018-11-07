<?php
/**
 * Template part for displaying page content in page.php
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package stagbarbershop
 */

?>

<div id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<header class="page-header">
		<?php stagbarbershop_post_thumbnail(); ?>
		
		<?php the_title( '<h1 class="page-title">', '</h1>' ); ?>
	</header>

	<div class="page-content py-5 bg-white">
		<div class="container-fluid py-2 py-md-3 my-md-3">
			<?php the_content(); ?>
		</div>
	</div>
</div>