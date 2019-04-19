<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package stagbarbershop
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
	<head>
		<meta charset="<?php bloginfo( 'charset' ); ?>">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="profile" href="http://gmpg.org/xfn/11">
		<?php wp_head(); ?>
	</head>

	<body <?php body_class(); ?>>
		<div id="page" class="site">
			<a class="skip-link screen-reader-text" href="#content">
				<?php esc_html_e( 'Skip to content', 'stagbarbershop' ); ?>
			</a>

			<header id="masthead" class="site-header navbar">
				<div class="bg bg-dark d-none d-md-block"></div>
				<div class="site-branding">
					<a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">
						<img src="<?php echo get_template_directory_uri(); ?>/public/img/logo-stag.svg" alt="<?php bloginfo( 'name' ); ?>" />
					</a>
				</div>

				<button id="menu-toggle" class="menu-toggle collapsed d-md-none" aria-controls="primary-menu" aria-expanded="false" aria-label="Toggle navigation">
					<span class="hamburger">
						<span></span>
						<span></span>
						<span></span>
					</span>
				</button>

				<nav id="site-nav" class="navbar-collapse collapsed">
					<?php
						wp_nav_menu(
							array(
								'theme_location' => 'menu-1',
								'menu_id'        => 'primary-menu',
								'menu_class'     => 'navbar-nav flex-md-row text-center',
								'container'      => ''
							)
						);
					?>

					<div class="navbar-address text-center d-md-none">
						<?php echo get_field( 'location_street_address', 'option' ); ?><br />
						<?php echo get_field( 'location_city', 'option' ); ?>
						<?php echo get_field( 'location_state', 'option' ); ?>
						<?php echo get_field( 'location_zip_code', 'option' ); ?><br />
						<a href="tel:<?php echo get_field( 'location_phone_number', 'option' ); ?>">
							<?php echo get_field( 'location_phone_number_display', 'option' ); ?>
						</a><br>
						<a class="text-underline" href="https://www.google.com/maps?saddr=My+Location&amp;daddr=<?php echo get_field( 'street_address', 'option' ); ?>+<?php echo get_field( 'location_city', 'option' ); ?>+<?php echo get_field( 'location_state', 'option' ); ?>+<?php echo get_field( 'location_zip_code', 'option' ); ?>" target="_blank" rel="noopener">
							Get Directions
						</a>
					</div>
				</nav>
			</header>

			<div id="content" class="site-content">
