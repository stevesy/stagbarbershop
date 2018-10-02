<?php get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main">
			
			<?php while ( have_posts() ) : the_post(); ?>

					<div id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
						<header class="page-header">
							<?php stagbarbershop_post_thumbnail(); ?>
							<?php the_title( '<h1 class="page-title">', '</h1>' ); ?>
						</header>

						<div class="page-content d-md-flex align-items-center justify-content-center">
							<div class="container-fluid">
								<div class="row">
									<div class="col-md-6">
										<p class="intro-text mb-4 text-center">
											<?php echo get_field( 'intro_text' ); ?>
										</p>
										<ul class="products-list list-unstyled mb-0 text-center">
											<?php if ( have_rows( 'products' ) ) : ?>
												<?php while ( have_rows( 'products' ) ) : the_row(); ?>
													<li>
														<?php echo get_sub_field( 'product_name' ); ?>
													</li>
												<?php endwhile; ?>
											<?php endif; ?>
										</ul>
									</div>
								</div>
							</div>
							<div class="slider-wrapper">
								<div id="slider" class="slider" data-lazyload="true">
									<?php if ( have_rows( 'product_photos' ) ) : ?>
										<?php while ( have_rows( 'product_photos' ) ) : the_row(); ?>
											<?php $image = get_sub_field( 'image' ); ?>
											<div>
												<img class="tns-lazy-img" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
											</div>
										<?php endwhile; ?>
									<?php endif; ?>
								</div>
							</div>
						</div>
					</div>

			<?php endwhile; ?>

		</main>
	</div>

<?php get_footer(); ?>