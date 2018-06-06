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

		<footer id="colophon" class="site-footer pb-3">
			<div class="bg-dark text-light py-4 mb-3">
				<div class="container-fluid">
					<div class="row">
						<div class="col-md-6">
							<div class="row">
								<div class="col-md-6">
									<h2 class="h5 text-uppercase mb-0">Stag Barbershop</h2>
									3064 South Delaware Avenue<br />
									Milwaukee, WI 53207<br />
									<a href="tel:4144897824">414.489.STAG</a>
								</div>
								<div class="col-md-6">
									<h3 class="h5 text-uppercase mb-0">Hours</h3>
									Tue & Thu: 10am-8pm<br />
									Wed & Fri: 10am-7pm<br />
									Sat: 9am-3pm<br />
									Sun & Mon: Closed
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="container-fluid text-center text-md-right">
				&copy; <?php echo date('Y'); ?> <?php bloginfo( 'name' ); ?>
			</div>
		</footer>
	</div>

	<?php wp_footer(); ?>

	</body>
</html>