<?php get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main">
			
			<?php
				while ( have_posts() ) :
					the_post();
			?>

					<div id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
						<header class="page-header">
							<?php stagbarbershop_post_thumbnail(); ?>
							<?php the_title( '<h1 class="page-title">', '</h1>' ); ?>
						</header>

						<div class="page-content">
							<div class="container-fluid">
								<ul class="list-unstyled mb-4 mb-md-5">
									<?php if ( have_rows( 'services' ) ) : ?>
										<?php while ( have_rows( 'services' ) ) : the_row(); ?>
											<li class="d-flex justify-content-between">
												<span><?php echo get_sub_field( 'name' ); ?></span>
												<span>$<?php echo get_sub_field( 'price' ); ?></span>
											</li>
										<?php endwhile; ?>
									<?php endif; ?>
								</ul>

								<p class="text-center">
									<a class="btn btn-primary" href="https://www.vagaro.com/stagbarbershop/book-now" target="_blank" rel="noopener">Book Now</a>
								</p>
								<p class="small text-center">By appointment only. We do not accept appointments or cancellations via email.</p>
							</div>
						</div>
					</div>

			<?php
				endwhile; // End of the loop.
			?>

		</main>
	</div>

<?php get_footer(); ?>