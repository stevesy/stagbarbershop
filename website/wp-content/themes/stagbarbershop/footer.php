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
								<img src="/wp-content/uploads/2019/12/map-3.png" alt="map" />
							</div>
						</div>
						<div class="col-md-6 d-flex align-items-center justify-content-center">
							<div class="footer-location w-100 mx-auto text-center text-lg-left">
								<div class="d-lg-flex flex-wrap flex-xl-nowrap justify-content-between justify-content-xl-around pt-4 pr-lg-4">
									<div class="pl-lg-4 pb-4">
										<h2 class="text-uppercase mb-1">Location</h2>
										<p class="mb-lg-0">
											<?php $location = get_field( 'location', 'option' ); ?>
											<?php echo $location['street_address']; ?><br />
											<?php echo $location['city']; ?>
											<?php echo $location['state']; ?>
											<?php echo $location['zip_code']; ?><br />
											<a href="tel:<?php echo $location['phone_number']; ?>">
												<?php echo $location['phone_number_display']; ?>
											</a><br>
											<a class="text-underline" href="https://www.google.com/maps?saddr=My+Location&amp;daddr=Stag+Barbershop+<?php echo $location['street_address']; ?>" target="_blank" rel="noopener">
												Get Directions
											</a>
										</p>
									</div>

									<div class="pl-lg-4 pb-4">
										<h2 class="text-uppercase mb-1">Hours</h2>
										<?php if ( have_rows( 'hours', 'option' ) ) : ?>
											<ul class="list-unstyled mb-lg-0">
												<?php while ( have_rows( 'hours', 'option' ) ) : the_row(); ?>
													<li>
														<?php echo get_sub_field( 'hours_days' ); ?>:
														<?php if ( get_sub_field( 'hours_closed' ) == 1) : ?>
															Closed
														<?php else: ?>
															<span class="d-inline-block">
																<?php echo str_replace ( ':00', '', get_sub_field( 'hours_open' ) ); ?>&ndash;<?php echo str_replace ( ':00', '', get_sub_field( 'hours_close' ) ); ?>
															</span>
														<?php endif; ?>
													</li>
												<?php endwhile; ?>
											</ul>
										<?php endif; ?>
									</div>

									<div class="pl-lg-4 pb-4">
										<h2 class="text-uppercase mb-1 text-nowrap">Follow Us</h2>
										<ul class="social list-unstyled d-flex justify-content-center justify-content-lg-start mb-0">
											<li>
												<a href="https://www.instagram.com/stagbarbershop" target="_blank" rel="noopener">
													<svg width="26" height="26" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 0 0 1.384 2.126A5.868 5.868 0 0 0 4.14 23.37c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 0 0 2.126-1.384 5.86 5.86 0 0 0 1.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 0 0-1.384-2.126A5.847 5.847 0 0 0 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 0 1-.899 1.382 3.744 3.744 0 0 1-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 0 1-1.379-.899 3.644 3.644 0 0 1-.9-1.38c-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 1 0 0-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 0 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" fill="currentColor" /></svg>
													<span class="sr-only">Instagram</span>
												</a>
											</li>
											<li class="ml-3">
												<a href="https://www.facebook.com/stagbarbershop" target="_blank" rel="noopener">
													<svg width="26" height="26" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0" fill="currentColor" /></svg>
													<span class="sr-only">Facebook</span>
												</a>
											</li>
										</ul>
									</div>
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
