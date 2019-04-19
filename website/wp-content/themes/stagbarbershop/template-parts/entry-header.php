<header class="entry-header">
	<?php if ( have_rows( 'featured_images' ) ) : ?>
		<div class="post-thumbnail">
			<div id="slider" class="slider" data-mode="gallery" data-lazyload="true">
				<?php while ( have_rows( 'featured_images' ) ) : the_row(); ?>
					<?php
						$imagePosition = get_sub_field('image_position');
						$image = get_sub_field('image');
					?>
					<div>
						<img class="tns-lazy-img"<?php echo !empty( $imagePosition ) ? ' style="object-position:' . $imagePosition . '"' : ''; ?> src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-src="<?php echo $image['url']; ?>" alt="" />
					</div>
				<?php endwhile; ?>
			</div>
		</div>
	<?php else : ?>
		<?php stagbarbershop_post_thumbnail(); ?>
	<?php endif; ?>

	<?php if ( empty( get_field('title') ) ) : ?>
		<?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
	<?php else : ?>
		<div class="position-relative text-center">
			<h1 class="entry-title"><?php echo get_field('title'); ?></h1>
			<?php if ( !empty( get_field('subtitle') ) ) : ?>
				<p class="lead mt-2"><?php echo get_field('subtitle'); ?></p>
			<?php endif; ?>
			<?php if ( !empty( get_field('button_text') ) && !empty( get_field('button_link') ) ) : ?>
				<div class="mt-4">
					<a
						class="btn btn-outline-white btn-lg px-5"
						href="<?php echo get_field('button_link'); ?>"
						<?php echo get_field('new_window') ? 'target="_blank" rel="noopener"' : ''; ?>
					>
						<?php echo get_field('button_text'); ?>
					</a>
				<?php endif; ?>
			</div>
		</div>
	<?php endif; ?>
</header>
