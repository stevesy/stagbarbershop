<?php get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main">
			
			<?php while ( have_posts() ) : the_post(); ?>

					<div id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
						<?php get_template_part( 'template-parts/page-header' ); ?>

						<div class="page-content py-5 bg-white">
							<div class="container-fluid py-2 py-md-3 my-md-3">
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

								<?php the_content(); ?>
							</div>
						</div>
					</div>

			<?php endwhile; ?>

		</main>
	</div>

<?php get_footer(); ?>