<?php
/**
 * stagbarbershop functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package stagbarbershop
 */

if ( ! function_exists( 'stagbarbershop_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function stagbarbershop_setup() {
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on stagbarbershop, use a find and replace
		 * to change 'stagbarbershop' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( 'stagbarbershop', get_template_directory() . '/languages' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );

		// This theme uses wp_nav_menu() in one location.
		register_nav_menus( array(
			'menu-1' => esc_html__( 'Primary', 'stagbarbershop' ),
		) );

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support( 'html5', array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
		) );

		// Set up the WordPress core custom background feature.
		add_theme_support( 'custom-background', apply_filters( 'stagbarbershop_custom_background_args', array(
			'default-color' => 'ffffff',
			'default-image' => '',
		) ) );

		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );

		/**
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		add_theme_support( 'custom-logo', array(
			'height'      => 250,
			'width'       => 250,
			'flex-width'  => true,
			'flex-height' => true,
		) );

		// Add theme support for custom color palette for Gutenberg blocks.
		add_theme_support(
			'editor-color-palette', array(
				array(
					'name'	=> esc_html__( 'Primary', '@@textdomain' ),
					'slug'	=> 'primary',
					'color'	=> '#276481',
				),
				array(
					'name'	=> esc_html__( 'Secondary', '@@textdomain' ),
					'slug'	=> 'secondary',
					'color'	=> '#a3403b',
				),
				array(
					'name'	=> esc_html__( 'Light', '@@textdomain' ),
					'slug'	=> 'light',
					'color'	=> '#fff',
				),
				array(
					'name'	=> esc_html__( 'Dark', '@@textdomain' ),
					'slug'	=> 'dark',
					'color'	=> '#212529',
				)
			)
		);

		// Add theme support for wide alignment class for Gutenberg blocks.
		add_theme_support( 'align-wide' );

		// Add theme support for responsive embeds for Gutenberg blocks.
		add_theme_support( 'responsive-embeds' );

		// Add theme support for core styles for Gutenberg blocks.
		// add_theme_support( 'wp-block-styles' );

		// Add theme support for custom editor styles
		add_theme_support( 'editor-styles' );
		add_editor_style( 'style-editor.css' );
	}
endif;
add_action( 'after_setup_theme', 'stagbarbershop_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function stagbarbershop_content_width() {
	// This variable is intended to be overruled from themes.
	// Open WPCS issue: {@link https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards/issues/1043}.
	// phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound
	$GLOBALS['content_width'] = apply_filters( 'stagbarbershop_content_width', 640 );
}
add_action( 'after_setup_theme', 'stagbarbershop_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function stagbarbershop_widgets_init() {
	register_sidebar( array(
		'name'          => esc_html__( 'Sidebar', 'stagbarbershop' ),
		'id'            => 'sidebar-1',
		'description'   => esc_html__( 'Add widgets here.', 'stagbarbershop' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );
}
add_action( 'widgets_init', 'stagbarbershop_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function stagbarbershop_scripts() {
	wp_enqueue_style( 'google-fonts', '//fonts.googleapis.com/css?family=Slabo+27px|Oswald:700' );
	wp_enqueue_style( 'tiny-slider-css', '//unpkg.com/tiny-slider@2.8.8/dist/tiny-slider.css' );
	wp_enqueue_style( 'site-style', get_stylesheet_uri() );

	wp_enqueue_script( 'polyfills', '//cdn.polyfill.io/v2/polyfill.min.js', '', '', true  );
	wp_enqueue_script( 'tiny-slider-js', '//unpkg.com/tiny-slider@2.8.8/dist/min/tiny-slider.js', '', '', true );
	wp_enqueue_script( 'site-js', get_template_directory_uri() . '/public/js/site.js', '', '', true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}

	wp_deregister_script( 'wp-embed' );
}
add_action( 'wp_enqueue_scripts', 'stagbarbershop_scripts' );

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}

/**
 * Remove wp-emoji scripts & styles
 */
remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
remove_action( 'wp_print_styles', 'print_emoji_styles' );

/**
 * Remove site search
 */
function wpb_filter_query( $query, $error = true ) {
	if ( is_search() ) {
		$query->is_search = false;
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

/**
 * Remove menu items from admin
 */
function remove_menu_pages() {
	if ( ! current_user_can('administrator') ) {
		remove_menu_page( 'edit.php' );
		remove_menu_page( 'edit-comments.php' );
	}
}
add_action( 'admin_menu', 'remove_menu_pages' );

if ( function_exists('acf_add_options_page') ) {
	acf_add_options_page(array(
		'page_title' 	=> 'Location & Hours',
		'menu_title'	=> 'Location & Hours',
		'menu_slug' 	=> 'theme-location-hours',
		'capability'	=> 'edit_posts',
		'redirect'		=> false,
		'icon_url'		=> 'dashicons-location'
	));
}
