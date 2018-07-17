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
									<?php for ($i = 1; $i <= 10; $i++) : ?>
										<?php if ( !empty( get_field( 'service_' . $i ) ) && !empty( get_field( 'price_' . $i ) ) ) : ?>
											<li class="d-flex justify-content-between">
												<span><?php echo get_field( 'service_' . $i ); ?></span>
												<span>$<?php echo get_field( 'price_' . $i ); ?></span>
											</li>
										<?php endif; ?>
									<?php endfor; ?>
								</ul>

								<p class="small text-center mb-0">By appointment only.</p>

								<p class="text-center">
									<a class="btn btn-primary" href="https://www.vagaro.com/stagbarbershop/book-now" target="_blank" rel="noopener">Book Now</a>
								</p>
							</div>
						</div>
					</div>

			<?php
				endwhile; // End of the loop.
			?>

		</main>
	</div>

<?php get_footer(); ?>