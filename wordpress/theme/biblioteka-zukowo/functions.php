<?php
/**
 * Biblioteka Żukowo theme.
 *
 * Content that staff need to change (opening hours, branches, partners,
 * footer links) lives in synced patterns, which Editors can edit without
 * access to the Site Editor. Templates pull them in by slug through the
 * [bz_wzorzec] shortcode, so the theme files never depend on database IDs.
 */

defined( 'ABSPATH' ) || exit;

add_action(
	'after_setup_theme',
	function () {
		add_theme_support( 'editor-styles' );
		add_editor_style( 'style.css' );
	}
);

add_action(
	'wp_enqueue_scripts',
	function () {
		$version = wp_get_theme()->get( 'Version' );
		wp_enqueue_style( 'biblioteka-zukowo', get_stylesheet_uri(), array(), $version );
		wp_enqueue_script(
			'biblioteka-zukowo-opening-hours',
			get_theme_file_uri( 'assets/js/opening-hours.js' ),
			array(),
			$version,
			array( 'strategy' => 'defer' )
		);
	}
);

/**
 * [bz_wzorzec slug="godziny-otwarcia"] renders the synced pattern with that slug.
 */
add_shortcode(
	'bz_wzorzec',
	function ( $atts ) {
		static $rendering = array();

		$slug = sanitize_title( $atts['slug'] ?? '' );
		if ( '' === $slug || isset( $rendering[ $slug ] ) ) {
			return '';
		}

		$pattern = get_page_by_path( $slug, OBJECT, 'wp_block' );
		if ( ! $pattern || 'publish' !== $pattern->post_status ) {
			return '';
		}

		$rendering[ $slug ] = true;
		$html               = do_blocks( $pattern->post_content );
		unset( $rendering[ $slug ] );

		return $html;
	}
);

/**
 * Editors can edit synced patterns, but WordPress hides the list from them,
 * so give it a plainly named menu entry.
 */
add_action(
	'admin_menu',
	function () {
		add_menu_page(
			'Stałe treści',
			'Stałe treści',
			'edit_posts',
			'edit.php?post_type=wp_block',
			'',
			'dashicons-clock',
			21
		);
	}
);
