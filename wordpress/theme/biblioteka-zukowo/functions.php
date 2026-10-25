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
 * The branches map (Leaflet, bundled in assets/vendor) loads only on pages that
 * show it. Block themes render the page before wp_head, so enqueuing here works.
 */
add_filter(
	'render_block_core/html',
	function ( $content ) {
		if ( str_contains( $content, 'data-branches-map' ) ) {
			$version = wp_get_theme()->get( 'Version' );
			wp_enqueue_style( 'leaflet', get_theme_file_uri( 'assets/vendor/leaflet/leaflet.css' ), array(), '1.9.4' );
			wp_enqueue_script( 'leaflet', get_theme_file_uri( 'assets/vendor/leaflet/leaflet.js' ), array(), '1.9.4', array( 'strategy' => 'defer' ) );
			wp_enqueue_script(
				'biblioteka-zukowo-branches-map',
				get_theme_file_uri( 'assets/js/branches-map.js' ),
				array( 'leaflet', 'biblioteka-zukowo-opening-hours' ),
				$version,
				array( 'strategy' => 'defer' )
			);
		}
		return $content;
	}
);

/**
 * Grid / list switch on the news list. The visitor's choice is applied in <head>,
 * before the first paint, so cached pages don't flash the grid first; the
 * buttons themselves (assets/js/news-view.js) load only where the switch is.
 */
add_action(
	'wp_head',
	function () {
		wp_print_inline_script_tag(
			"try{if(localStorage.getItem('bz-news-view')==='list')document.documentElement.setAttribute('data-bz-news-view','list')}catch(e){}"
		);
	},
	1
);

add_filter(
	'render_block_core/html',
	function ( $content ) {
		if ( str_contains( $content, 'data-bz-view-switch' ) ) {
			wp_enqueue_script(
				'biblioteka-zukowo-news-view',
				get_theme_file_uri( 'assets/js/news-view.js' ),
				array(),
				wp_get_theme()->get( 'Version' ),
				array( 'strategy' => 'defer' )
			);
		}
		return $content;
	}
);

/**
 * "?s=otwarcie+" searches for "otwarcie", not "otwarcie " (the title and the
 * field would show the stray space).
 */
add_filter(
	'request',
	function ( $query_vars ) {
		if ( isset( $query_vars['s'] ) && is_string( $query_vars['s'] ) ) {
			$query_vars['s'] = trim( $query_vars['s'] );
		}
		return $query_vars;
	}
);

/**
 * [bz_liczba_wynikow] on the search page: "2 wyniki dla „otwarcie”".
 * Nothing when there are no results; the template has its own message then.
 */
add_shortcode(
	'bz_liczba_wynikow',
	function () {
		global $wp_query;
		$count = (int) $wp_query->found_posts;
		if ( ! is_search() || 0 === $count ) {
			return '';
		}

		$tens = $count % 100;
		$ones = $count % 10;
		if ( 1 === $count ) {
			$noun = 'wynik';
		} elseif ( $ones >= 2 && $ones <= 4 && ( $tens < 12 || $tens > 14 ) ) {
			$noun = 'wyniki';
		} else {
			$noun = 'wyników';
		}

		return sprintf(
			'<p class="bz-results-count">%s %s dla „<strong>%s</strong>”</p>',
			number_format_i18n( $count ),
			$noun,
			get_search_query()
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
