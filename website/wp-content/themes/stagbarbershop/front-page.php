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
							<h1 class="page-title mb-2">Stag Barbershop</h1>
							<p class="lead mb-4">Haircuts &bull; Shaves &bull; Shoe Shines</p>
							<a class="btn btn-outline-light btn-lg px-5" href="https://www.vagaro.com/stagbarbershop/book-now" target="_blank" rel="noopener">Book Now</a>
						</div>
					</header>

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