<?php get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main">
			<div id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
				<?php get_template_part( 'template-parts/entry-header' ); ?>

				<div class="entry-content bg-dark">
					<div class="container-fluid py-5 text-white">
						<?php the_content(); ?>
					</div>

					<div class="overflow-hidden bg-white py-xl-5">
						<div class="container-fluid px-0" style="max-width:1200px;">
							<div class="alignwide">
								<div class="row no-gutters align-items-center justify-content-center">
									<div class="col-lg-6">
										<div class="col">
											<ul class="row products-list list-unstyled justify-content-center text-center mt-5">
												<?php if ( have_rows( 'products' ) ) : ?>
													<?php while ( have_rows( 'products' ) ) : ?>
														<?php
															the_row();
															$image = get_sub_field( 'product_image' );
														?>
														<li class="col-6 col-sm-4 mb-5">
															<div class="product-logo mx-auto mb-3">
																<img class="img-fluid" src="<?php echo $image['url']; ?>" alt="" />
															</div>
															<div class="product-name mx-auto">
																<?php echo get_sub_field( 'product_name' ); ?>
															</div>
														</li>
													<?php endwhile; ?>
												<?php endif; ?>
											</ul>
										</div>
									</div>

									<div class="col-lg-6">
										<div class="slider-wrapper mx-auto">
											<div id="slider" class="slider" data-lazyload="true">
												<?php if ( have_rows( 'product_photos' ) ) : ?>
													<?php while ( have_rows( 'product_photos' ) ) : ?>
														<?php
															the_row();
															$image = get_sub_field( 'image' );
														?>
														<div>
															<img class="tns-lazy-img" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
														</div>
													<?php endwhile; ?>
												<?php endif; ?>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	</div>

<?php get_footer(); ?>
