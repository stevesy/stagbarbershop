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
								<img src="<?php echo get_template_directory_uri(); ?>/img/map.png" alt="map" />
							</div>
						</div>
						<div class="col-md-6 d-flex align-items-center justify-content-center">
							<div class="footer-location w-100 mx-auto text-center text-md-left">
								<div class="d-lg-flex flex-wrap flex-xl-nowrap justify-content-between justify-content-xl-around pt-4 pr-lg-4">
									<?php
										if ( is_active_sidebar( 'footer-sidebar-1' ) ) {
											dynamic_sidebar( 'footer-sidebar-1' );
										}
									?>
									<?php /* <div class="pl-lg-4 pb-4">
										<h2 class="text-uppercase mb-1">Location</h2>
										3064 South Delaware Avenue<br />
										Milwaukee, WI 53207<br />
										<a href="tel:4144897824">
											414.489.STAG
										</a><br />
										<a class="text-underline" href="https://www.google.com/maps?saddr=My+Location&daddr=3064 S+Delaware+Ave+Milwaukee+WI+53207" target="_blank" rel="noopener">
											Get Directions
										</a>
									</div>
									<div class="pl-lg-4 pb-4">
										<h2 class="text-uppercase mb-1">Hours</h2>
										Tue &ndash; Fri: 10am&dash;7pm<br />
										Sat: 9am&ndash;3pm<br />
										Sun &amp; Mon: Closed
									</div>
									<div class="pl-lg-4 pb-4">
										<h2 class="text-uppercase mb-2 text-nowrap">Follow Us</h2>
										<ul class="social list-unstyled d-flex justify-content-center justify-content-md-start mb-0">
											<li>
												<a href="https://www.instagram.com/stagbarbershop" target="_blank" rel="noopener">
													<span class="fab fa-instagram" aria-hidden="true"></span>
													<span class="sr-only">Stag Barbershop on Instagram</span>
												</a>
											</li>
											<li class="ml-3">
												<a href="https://www.facebook.com/stagbarbershop" target="_blank" rel="noopener">
													<span class="fab fa-facebook" aria-hidden="true"></span>
													<span class="sr-only">Stag Barbershop on Facebook</span>
												</a>
											</li>
										</ul>
									</div> */ ?>
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