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
		<div class="container-fluid">
			<?php the_title( '<h1 class="page-title">', '</h1>' ); ?>
		</div>
		<?php stagbarbershop_post_thumbnail(); ?>
	</header>

	<div class="page-content">
		<div class="container-fluid">
			<?php
			the_content();

			wp_link_pages( array(
				'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'stagbarbershop' ),
				'after'  => '</div>',
			) );
			?>
		</div>
	</div>
</div>