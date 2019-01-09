<?php get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main">
			
			<?php while ( have_posts() ) : the_post(); ?>

					<div id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
						<?php get_template_part( 'template-parts/page-header' ); ?>

						<div class="page-content pt-5 pb-lg-5 bg-white d-lg-flex align-items-center justify-content-center">
							<div class="container-fluid pt-2 pb-lg-2">
								<div class="row">
									<div class="col-lg-6">
										<?php the_content(); ?>
										
										<div class="products-list-wrapper">
											<ul class="row products-list list-unstyled text-center">
												<?php if ( have_rows( 'products' ) ) : ?>
													<?php while ( have_rows( 'products' ) ) : the_row(); ?>
														<?php $image = get_sub_field( 'product_image' ); ?>
														<li class="col-6 col-sm-4 mb-4">
															<div class="logo mb-3">
																<img class="img-fluid" src="<?php echo $image['url']; ?>" alt="" />
															</div>
															<?php echo get_sub_field( 'product_name' ); ?>
														</li>
													<?php endwhile; ?>
												<?php endif; ?>
											</ul>
										</div>
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