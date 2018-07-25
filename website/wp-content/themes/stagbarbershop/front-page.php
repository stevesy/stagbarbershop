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
					<header class="page-header">
						<?php stagbarbershop_post_thumbnail(); ?>
						<div class="position-relative text-center">
							<?php the_title( '<h1 class="page-title mb-3">', '</h1>' ); ?>
							<a class="btn btn-primary" href="https://www.vagaro.com/stagbarbershop/book-now" target="_blank" rel="noopener">Book Now</a>
						</div>
					</header>

					<div class="page-content text-center">
						<div class="container-fluid">
							<?php the_content(); ?>
							<p><a class="btn btn-primary" href="/services">Barber Services</a></p>
						</div>
					</div>
				</div>

			<?php endwhile; ?>

		</main>
	</div>

<?php get_footer(); ?>