<?php
/**
 * The front page template file
 *
 * If the user has selected a static page for their homepage, this is what will appear.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package stagbarbershop
 */

get_header();
?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main">

			<?php while ( have_posts() ) : the_post(); ?>

				<div id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
					<?php get_template_part( 'template-parts/page-header' ); ?>

					<div class="page-content py-5 bg-white">
						<div class="container-fluid py-2 py-md-3 my-md-3">
							<?php the_content(); ?>
						</div>
					</div>
				</div>

			<?php endwhile; ?>

		</main>
	</div>

<?php get_footer(); ?>