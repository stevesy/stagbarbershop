<?php get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main">
			<?php while ( have_posts() ) : the_post(); ?>
					<div id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
						<header class="page-header">
							<?php if ( have_rows( 'featured_images' ) ) : ?>
								<div class="post-thumbnail">
									<div id="slider" class="slider" data-mode="gallery" data-lazyload="true">
										<?php while ( have_rows( 'featured_images' ) ) : the_row(); ?>
											<?php $image = get_sub_field('image'); ?>
											<div>
												<img class="tns-lazy-img" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-src="<?php echo $image['url']; ?>" alt="" />
											</div>
										<?php endwhile; ?>
									</div>
								</div>
							<?php else : ?>
								<?php stagbarbershop_post_thumbnail(); ?>
							<?php endif; ?>

							<?php the_title( '<h1 class="page-title">', '</h1>' ); ?>
						</header>

						<div class="page-content py-5 bg-white">
							<div class="container-fluid py-2 py-md-3 my-md-3">
								<ul class="list-crew list-unstyled text-center row justify-content-center">
									<?php if ( have_rows( 'employees' ) ) : ?>
										<?php while ( have_rows( 'employees' ) ) : the_row(); ?>
											<li class="item-crew col-6 col-md-4">
												<?php
													$name = get_sub_field( 'name' );
													$title = get_sub_field( 'title' );
													$instagram = get_sub_field( 'instagram' );
												?>
												<?php if ( !empty( $instagram ) ) : ?><a class="crewmember d-block mx-auto" href="https://www.instagram.com/<?php echo $instagram; ?>" target="_blank" rel="noopener"><?php else: ?><div class="crewmember mx-auto"><?php endif; ?>
													<div class="crewmember-photos mb-3">
														<?php if ( have_rows( 'photos' ) ) : ?>
															<?php while ( have_rows( 'photos' ) ) : the_row(); ?>
																<?php $photo = get_sub_field('photo'); ?>
																<?php if ( get_row_index() === 1 ) : ?>
																	<div class="d-block">
																		<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-src="<?php echo $photo['url']; ?>" alt="" />
																	</div>
																<?php else : ?>
																	<div>
																		<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-src="<?php echo $photo['url']; ?>" alt="" />
																	</div>
																<?php endif; ?>
															<?php endwhile; ?>
														<?php endif; ?>
													</div>
													<h2 class="crewmember-name text-uppercase text-secondary h3 mb-0">
														<?php echo $name; ?>
													</h2>
													<span class="crewmember-title text-dark">
														<?php echo $title; ?>
													</span>
												<?php if ( !empty( $instagram ) ) : ?></a><?php else: ?></div><?php endif; ?>
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