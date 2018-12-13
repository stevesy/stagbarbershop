<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package stagbarbershop
 */

?>

		</div>

		<footer id="colophon" class="site-footer">
			<div class="footer-top bg-dark text-light">
				<div class="container-fluid">
					<div class="row flex-md-row-reverse">
						<div class="col-md-6">
							<div class="map">
								<img src="<?php echo get_template_directory_uri(); ?>/public/img/map.png" alt="map" />
							</div>
						</div>
						<div class="col-md-6 d-flex align-items-center justify-content-center">
							<div class="footer-location w-100 mx-auto text-center text-lg-left">
								<div class="d-lg-flex flex-wrap flex-xl-nowrap justify-content-between justify-content-xl-around pt-4 pr-lg-4">
									<?php
										if ( is_active_sidebar( 'footer-sidebar-1' ) ) {
											dynamic_sidebar( 'footer-sidebar-1' );
										}
									?>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<?php echo do_shortcode('[instagram-feed]'); ?>
			<div class="footer-bottom bg-white py-3 pb-3">
				<div class="container-fluid">
					<div class="text-center">
						&copy; <?php echo date('Y'); ?> <?php bloginfo( 'name' ); ?>
					</div>
				</div>
			</div>
		</footer>
	</div>

	<?php wp_footer(); ?>

	</body>
</html>