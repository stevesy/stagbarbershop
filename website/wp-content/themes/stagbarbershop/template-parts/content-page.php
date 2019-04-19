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
	<?php get_template_part( 'template-parts/entry-header' ); ?>

	<div class="entry-content py-5 bg-white">
		<div class="container-fluid py-2 py-md-3 my-md-3">
			<?php the_content(); ?>
		</div>
	</div>
</div>