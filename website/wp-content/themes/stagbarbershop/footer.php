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
					<div class="row">
						<div class="col-md-4 col-lg-6 pt-4">
							<div class="address-hours mx-auto">
								<div class="row">
									<div class="col-lg-6 mb-4">
										<h2 class="h5 text-uppercase mb-0">Stag Barbershop</h2>
										3064 South Delaware Avenue<br />
										Milwaukee, WI 53207<br />
										<a href="tel:4144897824">414.489.STAG</a>
									</div>
									<div class="col-lg-6 mb-4">
										<h3 class="h5 text-uppercase mb-0">Hours</h3>
										Tue &ndash; Fri: 10am&dash;7pm<br />
										Sat: 9am&ndash;3pm<br />
										Sun & Mon: Closed
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-8 col-lg-6">
							<div class="map">
								<img src="//placehold.it/900x400" alt="map" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="footer-bottom bg-white pb-3">
				<div class="container-fluid">
					<div class="row">
						<div class="col-md-6 text-center text-md-left mt-3">
							&copy; <?php echo date('Y'); ?> <?php bloginfo( 'name' ); ?>
						</div>
						<div class="col-md-6 mt-3">
							<ul class="social list-unstyled d-flex justify-content-center justify-content-md-end mb-0">
								<li class="mx-2">
									<a href="https://www.facebook.com/stagbarbershop" target="_blank" rel="noopener">
										<span class="fab fa-facebook fa-2x"></span>
										<span class="sr-only">Stag Barbershop on Facebook</span>
									</a>
								</li>
								<li class="mx-2 mr-md-0">
									<a href="https://www.instagram.com/stagbarbershop" target="_blank" rel="noopener">
										<span class="fab fa-instagram fa-2x"></span>
										<span class="sr-only">Stag Barbershop on Instagram</span>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>
	</div>

	<?php wp_footer(); ?>

	</body>
</html>