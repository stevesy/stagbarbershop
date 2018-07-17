<?php
/**
 * Functions which enhance the theme by hooking into WordPress
 *
 * @package stagbarbershop
 */

/**
 * Adds custom classes to the array of body classes.
 *
 * @param array $classes Classes for the body element.
 * @return array
 */
function stagbarbershop_body_classes( $classes ) {
	// Adds a class of hfeed to non-singular pages.
	if ( ! is_singular() ) {
		$classes[] = 'hfeed';
	}

	// Adds a class of no-sidebar when there is no sidebar present.
	if ( ! is_active_sidebar( 'sidebar-1' ) ) {
		$classes[] = 'no-sidebar';
	}

	// Adds a unique page class based on the slug
	if ( is_page() ) {
		global $post;
		$classes[] = 'page-' . $post->post_name;
	}

	return $classes;
}
add_filter( 'body_class', 'stagbarbershop_body_classes' );

/**
 * Add a pingback url auto-discovery header for single posts, pages, or attachments.
 */
function stagbarbershop_pingback_header() {
	if ( is_singular() && pings_open() ) {
		echo '<link rel="pingback" href="', esc_url( get_bloginfo( 'pingback_url' ) ), '">';
	}
}
add_action( 'wp_head', 'stagbarbershop_pingback_header' );

/**
 * Remove wp-emoji scripts & styles
 */
remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
remove_action( 'wp_print_styles', 'print_emoji_styles' );

/**
 * Clean up output of stylesheet <link> tags
 */
function clean_style_tags( $input ) {
	preg_match_all( "!<link rel='stylesheet'\s?(id='[^']+')?\s+href='(.*)' type='text/css' media='(.*)' />!", $input, $matches );
	if ( empty( $matches[2] ) ) {
		return $input;
	}
	// Only display media if it is meaningful
	$media = $matches[3][0] !== '' && $matches[3][0] !== 'all' ? ' media="' . $matches[3][0] . '"' : '';
	return '<link rel="stylesheet" href="' . $matches[2][0] . '"' . $media . ' />' . "\n";
}
add_filter( 'style_loader_tag', 'clean_style_tags'  );

/**
 * Clean up output of <script> tags
 */
function clean_script_tags($input) {
	$input = str_replace("type='text/javascript' ", '', $input);
	return str_replace("'", '"', $input);
}
add_filter( 'script_loader_tag', 'clean_script_tags' );

/**
 * Remove site search
 */
function wpb_filter_query( $query, $error = true ) {
	if ( is_search() ) {
		$query->is_search = false;
		// $query->query_vars[s] = false;
		// $query->query[s] = false;
		if ( $error == true )
			$query->is_404 = true;
	}
}
add_action( 'parse_query', 'wpb_filter_query' );
add_filter( 'get_search_form', function ( $a ) { return null; } );
function remove_search_widget() {
	unregister_widget('WP_Widget_Search');
}
add_action( 'widgets_init', 'remove_search_widget' );