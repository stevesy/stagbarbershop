<?php get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main">
			
			<?php while ( have_posts() ) : the_post(); ?>

					<div id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
						<header class="page-header">
							<?php stagbarbershop_post_thumbnail(); ?>
							<?php the_title( '<h1 class="page-title">', '</h1>' ); ?>
						</header>

						<div class="page-content">
							<div class="container-fluid">
								<ul class="list-crew list-unstyled mb-0 text-center row justify-content-center">
									<?php if ( have_rows( 'employees' ) ) : ?>
										<?php while ( have_rows( 'employees' ) ) : the_row(); ?>
											<li class="item-crew col-6 col-md-4">
												<?php if (!empty(get_sub_field( 'instagram' ))) : ?>
													<a class="d-block" href="https://www.instagram.com/<?php echo get_sub_field( 'instagram' ); ?>" target="_blank" rel="noopener">
												<?php endif; ?>
													<div class="crewmember-photos mb-3">
														<img class="img-fluid" src="//placehold.it/200x200" alt="" />
													</div>
													<h2 class="crewmember-name text-uppercase h3 mb-0">
														<?php echo get_sub_field( 'name' ); ?>
													</h2>
													<span class="crewmember-title">
														<?php echo get_sub_field( 'title' ); ?>
													</span>
												<?php if (!empty(get_sub_field( 'instagram' ))) : ?>
													</a>
												<?php endif; ?>
											</li>
										<?php endwhile; ?>
									<?php endif; ?>
								</ul>
							</div>
						</div>
					</div>

			<?php endwhile; ?>

		</main>
	</div>

<?php get_footer(); ?>