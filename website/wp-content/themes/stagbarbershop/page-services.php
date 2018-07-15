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
								<ul class="list-unstyled">
									<li class="d-flex justify-content-between">
										<span><?php echo get_field( 'service_name_1' ); ?></span>
										<span>$<?php echo get_field( 'service_price_1' ); ?></span>
									</li>
									<li class="d-flex justify-content-between">
										<span><?php echo get_field( 'service_name_2' ); ?></span>
										<span>$<?php echo get_field( 'service_price_2' ); ?></span>
									</li>
									<li class="d-flex justify-content-between">
										<span>Men&rsquo;s Haircut &amp; Shave</span>
										<span>$60</span>
									</li>
									<li class="d-flex justify-content-between">
										<span>Hot Lather Head Shave</span>
										<span>$30</span>
									</li>
									<li class="d-flex justify-content-between">
										<span>Buzz Cut</span>
										<span>$20</span>
									</li>
									<li class="d-flex justify-content-between">
										<span>Beard Trim</span>
										<span>$15</span>
									</li>
									<li class="d-flex justify-content-between">
										<span>Mustache Trim</span>
										<span>$5</span>
									</li>
									<li class="d-flex justify-content-between">
										<span>Shoe Shine</span>
										<span>$17</span>
									</li>
								</ul>

								<p class="small text-center">By appointment only.</p>

								<p class="text-center">
									<a class="btn btn-primary" href="https://www.vagaro.com/stagbarbershop/book-now" target="_blank" rel="noopener">Book Appointment</a>
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