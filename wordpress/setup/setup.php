<?php
/**
 * One-off site setup, safe to re-run: `wp eval-file /setup/setup.php`.
 *
 * Applies the settings and starter content the theme expects. Existing
 * synced patterns are never overwritten, so edits made by staff survive.
 */

defined( 'ABSPATH' ) || exit;

require_once ABSPATH . 'wp-admin/includes/media.php';
require_once ABSPATH . 'wp-admin/includes/file.php';
require_once ABSPATH . 'wp-admin/includes/image.php';

$branches = array(
	array(
		'id'      => 'zukowo',
		'name'    => 'Biblioteka główna – Żukowo',
		'street'  => 'ul. 3 Maja 9B',
		'city'    => '83-330 Żukowo',
		'phones'  => array( '+48 58 681 77 63' ),
		'emails'  => array( 'info@bibliotekazukowo.pl', 'bibpubzukowo@wp.pl' ),
		'catalog' => 'https://xn--szukamksiki-4kb16m.pl/SkNewWeb/bstart/523002332',
		'lat'     => 54.3404707,
		'lon'     => 18.3636395,
		'is_main' => true,
	),
	array(
		'id'      => 'banino',
		'name'    => 'Filia w Baninie',
		'street'  => 'ul. Lotnicza 29 (budynek OSP)',
		'city'    => '80-297 Banino',
		'phones'  => array( '+48 58 694 15 68' ),
		'emails'  => array( 'banino@bibliotekazukowo.pl' ),
		'catalog' => 'https://xn--szukamksiki-4kb16m.pl/SkNewWeb/bstart/523002342',
		'lat'     => 54.3921375,
		'lon'     => 18.4061695,
	),
	array(
		'id'      => 'chwaszczyno',
		'name'    => 'Filia w Chwaszczynie',
		'street'  => 'ul. Żeromskiego 9 (Strefa Kultury)',
		'city'    => '80-209 Chwaszczyno',
		'phones'  => array( '+48 502 837 774' ),
		'emails'  => array( 'chwaszczyno@bibliotekazukowo.pl' ),
		'catalog' => 'https://xn--szukamksiki-4kb16m.pl/SkNewWeb/bstart/523002343',
		'lat'     => 54.4412547,
		'lon'     => 18.4210256,
	),
	array(
		'id'      => 'lezno',
		'name'    => 'Filia w Leźnie',
		'street'  => 'ul. św. Floriana 12 (budynek OSP)',
		'city'    => '80-298 Leźno',
		'phones'  => array( '+48 58 355 07 30' ),
		'emails'  => array( 'lezno@bibliotekazukowo.pl' ),
		'catalog' => 'https://xn--szukamksiki-4kb16m.pl/SkNewWeb/bstart/523002344',
		'lat'     => 54.3473070,
		'lon'     => 18.4377054,
	),
	array(
		'id'      => 'niestepowo',
		'name'    => 'Filia w Niestępowie',
		'street'  => 'ul. Raduńska 14a (nad sklepem spożywczym)',
		'city'    => '83-331 Przyjaźń',
		'phones'  => array( '+48 58 355 07 45' ),
		'emails'  => array( 'niestepowo@bibliotekazukowo.pl' ),
		'catalog' => 'https://xn--szukamksiki-4kb16m.pl/SkNewWeb/bstart/523002345',
		'lat'     => 54.3254207,
		'lon'     => 18.4140584,
	),
);

// Partner logos already in the media library (imported from the old logo slider).
$partners = array(
	'/Gmina-'                    => 'Gmina Żukowo',
	'/Okis-'                     => 'Ośrodek Kultury i Sportu w Żukowie',
	'/Logo-Fundacja-Metropolia-' => 'Fundacja Metropolia Dzieci',
	'na-start-LOGO'              => 'Projekt „Z książką na start”',
	'/Moja-Gmina-'               => 'Moja Gmina Żukowo',
	'/Strefa-Kultury-logo'       => 'Strefa Kultury w Chwaszczynie',
);

// Documents linked in the footer, found in the media library by file name.
$documents = array(
	'Klauzula-informacyjna'                     => 'Klauzula informacyjna (PDF)',
	'Standardy-Ochrony-Maloletnich-dla-Biblioteki' => 'Standardy ochrony małoletnich (PDF)',
	'Wersja-skrocona-standardow-ochrony'        => 'Standardy ochrony małoletnich – wersja skrócona (PDF)',
);

function bz_log( $message ) {
	WP_CLI::log( $message );
}

function bz_find_attachment( $fragment ) {
	global $wpdb;
	return (int) $wpdb->get_var(
		$wpdb->prepare(
			"SELECT post_id FROM {$wpdb->postmeta} WHERE meta_key = '_wp_attached_file' AND meta_value LIKE %s ORDER BY post_id LIMIT 1",
			'%' . $wpdb->esc_like( $fragment ) . '%'
		)
	);
}

function bz_ensure_page( $slug, $title, $content = '' ) {
	$page = get_page_by_path( $slug );
	if ( $page ) {
		return $page->ID;
	}
	bz_log( "Creating page /$slug/" );
	return wp_insert_post(
		array(
			'post_type'    => 'page',
			'post_status'  => 'publish',
			'post_name'    => $slug,
			'post_title'   => $title,
			'post_content' => $content,
		)
	);
}

function bz_ensure_pattern( $slug, $title, $content ) {
	$existing = get_page_by_path( $slug, OBJECT, 'wp_block' );
	if ( $existing ) {
		return $existing->ID;
	}
	bz_log( "Creating synced pattern '$title'" );
	return wp_insert_post(
		array(
			'post_type'    => 'wp_block',
			'post_status'  => 'publish',
			'post_name'    => $slug,
			'post_title'   => $title,
			'post_content' => $content,
		)
	);
}

function bz_contact_links( $branch ) {
	$links = array();
	foreach ( $branch['phones'] as $phone ) {
		$links[] = sprintf( '<a href="tel:%s">%s</a>', preg_replace( '/[^+\d]/', '', $phone ), esc_html( $phone ) );
	}
	foreach ( $branch['emails'] as $email ) {
		$links[] = sprintf( '<a href="mailto:%1$s">%1$s</a>', esc_html( $email ) );
	}
	return implode( '<br>', $links );
}

/**
 * One map with a pin per branch. The list is the fallback without JavaScript;
 * assets/js/branches-map.js turns it into the map and fills each pin's popup
 * from the branch section the link points to.
 */
function bz_branches_map( $branches ) {
	$items = '';
	foreach ( $branches as $branch ) {
		$items .= sprintf(
			'<li data-lat="%F" data-lon="%F"%s><a href="#%s">%s</a></li>',
			$branch['lat'],
			$branch['lon'],
			empty( $branch['is_main'] ) ? '' : ' data-main',
			esc_attr( $branch['id'] ),
			esc_html( $branch['name'] )
		);
	}
	return "<!-- wp:html -->\n<div class=\"bz-map\" data-branches-map><ul class=\"bz-map__list\">$items</ul></div>\n<!-- /wp:html -->\n";
}

function bz_branch_heading( $branch ) {
	return "<!-- wp:heading {\"level\":3} -->\n<h3 class=\"wp-block-heading\">" . esc_html( $branch['name'] ) . "</h3>\n<!-- /wp:heading -->\n";
}

// The branch's own catalog on szukamksiążki.pl.
function bz_branch_catalog( $branch ) {
	return "<!-- wp:paragraph {\"className\":\"bz-more\"} -->\n<p class=\"bz-more\"><a href=\"" . esc_url( $branch['catalog'] ) . "\">Katalog online</a></p>\n<!-- /wp:paragraph -->\n";
}

function bz_branch_details( $branch, $hours_ref ) {
	return "<!-- wp:paragraph -->\n<p>" . esc_html( $branch['street'] ) . '<br>' . esc_html( $branch['city'] ) . "</p>\n<!-- /wp:paragraph -->\n"
		. "<!-- wp:paragraph -->\n<p>" . bz_contact_links( $branch ) . "</p>\n<!-- /wp:paragraph -->\n"
		. bz_branch_catalog( $branch )
		. "<!-- wp:details {\"className\":\"bz-hours-toggle\"} -->\n<details class=\"wp-block-details bz-hours-toggle\"><summary>Godziny otwarcia</summary>"
		. "<!-- wp:block {\"ref\":$hours_ref} /-->"
		. "</details>\n<!-- /wp:details -->\n";
}

/**
 * Sites set up before the shared map have a small map in every branch section.
 * Replaces the first one with the map of all branches, drops the rest with their
 * "Zobacz większą mapę" links, and gives each branch section the id its pin links
 * to. Works on the parsed blocks, so other edits made by staff are kept.
 */
function bz_migrate_branches_map( $pattern_id, $branches ) {
	$pattern = get_post( $pattern_id );
	if ( ! $pattern || ! str_contains( $pattern->post_content, 'openstreetmap.org/export/embed' ) ) {
		return;
	}

	$ids = array_column( $branches, 'id', 'name' );
	$map = parse_blocks( bz_branches_map( $branches ) )[0];

	$walk = function ( $blocks ) use ( &$walk, &$map, $ids ) {
		$out = array();
		foreach ( $blocks as $block ) {
			$name = $block['blockName'];
			if ( 'core/html' === $name && str_contains( $block['innerHTML'], 'class="bz-map"' ) ) {
				$out[] = $map;
				$map   = null;
				continue;
			}
			if ( 'core/paragraph' === $name && str_contains( $block['innerHTML'], 'Zobacz większą mapę' ) ) {
				$out[] = null;
				continue;
			}

			$block['innerBlocks'] = $walk( $block['innerBlocks'] );
			$kept                 = array();
			$i                    = 0;
			foreach ( $block['innerContent'] as $chunk ) {
				if ( is_string( $chunk ) ) {
					$kept[] = $chunk;
				} elseif ( null !== $block['innerBlocks'][ $i++ ] ) {
					$kept[] = null;
				} elseif ( $kept && '' === trim( end( $kept ) ) ) {
					array_pop( $kept );
				}
			}
			$block['innerContent'] = $kept;
			$block['innerBlocks']  = array_values( array_filter( $block['innerBlocks'] ) );

			// A branch section is a column or card whose first heading is a branch name.
			$heading = $block['innerBlocks'][0] ?? null;
			$label   = $heading && 'core/heading' === $heading['blockName'] ? trim( wp_strip_all_tags( $heading['innerHTML'] ) ) : '';
			if ( isset( $ids[ $label ] ) && in_array( $name, array( 'core/column', 'core/group' ), true ) && ! str_contains( $block['innerContent'][0], ' id="' ) ) {
				$block['innerContent'][0] = preg_replace( '/<div /', '<div id="' . esc_attr( $ids[ $label ] ) . '" ', $block['innerContent'][0], 1 );
			}
			$out[] = $block;
		}
		return $out;
	};

	// Removed blocks come back as null so their place in innerContent can be dropped.
	$blocks = array_values( array_filter( $walk( parse_blocks( $pattern->post_content ) ) ) );
	bz_log( 'Replacing the branch maps with one map of all branches (old version kept as a revision)' );
	wp_save_post_revision( $pattern_id );
	wp_update_post(
		array(
			'ID'           => $pattern_id,
			'post_title'   => 'Filie (adresy i mapa)',
			'post_content' => serialize_blocks( $blocks ),
		)
	);
}

/**
 * Sites set up before the catalog links have none in the branch sections. Adds
 * each branch's "Katalog online" link above its opening hours toggle (or at the
 * end of the section). Works on the parsed blocks, so other edits are kept.
 */
function bz_add_catalog_links( $pattern_id, $branches ) {
	$pattern = get_post( $pattern_id );
	if ( ! $pattern || str_contains( $pattern->post_content, '/SkNewWeb/' ) ) {
		return;
	}

	$by_id = array_column( $branches, null, 'id' );
	$added = 0;

	$walk = function ( $blocks ) use ( &$walk, &$added, $by_id ) {
		foreach ( $blocks as &$block ) {
			$tag = new WP_HTML_Tag_Processor( $block['innerHTML'] );
			$id  = $tag->next_tag() ? $tag->get_attribute( 'id' ) : null;
			if ( ! is_string( $id ) || ! isset( $by_id[ $id ] ) || ! in_array( $block['blockName'], array( 'core/column', 'core/group' ), true ) ) {
				$block['innerBlocks'] = $walk( $block['innerBlocks'] );
				continue;
			}

			$at = count( $block['innerBlocks'] );
			foreach ( $block['innerBlocks'] as $i => $inner ) {
				if ( 'core/details' === $inner['blockName'] && str_contains( $inner['attrs']['className'] ?? '', 'bz-hours-toggle' ) ) {
					$at = $i;
					break;
				}
			}
			array_splice( $block['innerBlocks'], $at, 0, array( parse_blocks( bz_branch_catalog( $by_id[ $id ] ) )[0] ) );

			// Put its placeholder in innerContent before the $at-th child's, or after the last child.
			$seen = 0;
			$pos  = null;
			foreach ( $block['innerContent'] as $k => $chunk ) {
				if ( null === $chunk ) {
					if ( $seen++ === $at ) {
						$pos = $k;
						break;
					}
					$pos = $k + 1;
				}
			}
			$pos = $pos ?? 1;
			array_splice( $block['innerContent'], $pos, 0, $seen > $at ? array( null, "\n" ) : array( "\n", null ) );
			++$added;
		}
		return $blocks;
	};

	$blocks = $walk( parse_blocks( $pattern->post_content ) );
	if ( ! $added ) {
		return;
	}
	bz_log( "Adding catalog links to $added branch sections (old version kept as a revision)" );
	wp_save_post_revision( $pattern_id );
	wp_update_post(
		array(
			'ID'           => $pattern_id,
			'post_content' => wp_slash( serialize_blocks( $blocks ) ),
		)
	);
}

// --- Settings -----------------------------------------------------------------

update_option( 'blogname', 'Biblioteka Samorządowa w Żukowie' );
update_option( 'blogdescription', '' );
update_option( 'timezone_string', 'Europe/Warsaw' );
update_option( 'date_format', 'j F Y' );
update_option( 'time_format', 'H:i' );
update_option( 'start_of_week', 1 );
update_option( 'posts_per_page', 9 );
update_option( 'default_comment_status', 'closed' );
update_option( 'default_ping_status', 'closed' );
global $wp_rewrite;
$wp_rewrite->set_permalink_structure( '/%postname%/' );

// The old theme ignored pinned ("sticky") posts, so some were left pinned for
// years. The new theme shows pinned posts first, so unpin anything stale.
foreach ( get_option( 'sticky_posts', array() ) as $sticky_id ) {
	$sticky = get_post( $sticky_id );
	if ( ! $sticky || strtotime( $sticky->post_date_gmt ) < strtotime( '-1 year' ) ) {
		unstick_post( $sticky_id );
		bz_log( 'Unpinned old post: ' . ( $sticky ? $sticky->post_title : "#$sticky_id" ) );
	}
}

$front = bz_ensure_page( 'strona-glowna', 'Strona główna' );
$news  = bz_ensure_page( 'aktualnosci', 'Aktualności' );
update_option( 'show_on_front', 'page' );
update_option( 'page_on_front', $front );
update_option( 'page_for_posts', $news );

// --- Logo ---------------------------------------------------------------------

if ( ! get_theme_mod( 'custom_logo' ) ) {
	$tmp = wp_tempnam( 'logo.png' );
	copy( get_theme_file_path( 'assets/images/logo.png' ), $tmp );
	$logo = media_handle_sideload(
		array(
			'name'     => 'logo-biblioteka-zukowo.png',
			'tmp_name' => $tmp,
		),
		0,
		'Biblioteka Samorządowa w Żukowie'
	);
	if ( is_wp_error( $logo ) ) {
		WP_CLI::warning( 'Logo upload failed: ' . $logo->get_error_message() );
	} else {
		update_post_meta( $logo, '_wp_attachment_image_alt', 'Biblioteka Samorządowa w Żukowie – strona główna' );
		set_theme_mod( 'custom_logo', $logo );
		bz_log( 'Logo set' );
	}
}

// --- Synced patterns (editable by staff under "Stałe treści") ------------------

if ( ! get_page_by_path( 'powitanie', OBJECT, 'wp_block' ) ) {
	$tmp   = wp_tempnam( 'powitanie.jpg' );
	copy( __DIR__ . '/assets/powitanie.jpg', $tmp );
	$photo = media_handle_sideload(
		array(
			'name'     => 'biblioteka-zukowo-regaly.jpg',
			'tmp_name' => $tmp,
		),
		0,
		'Regały z książkami'
	);
	$photo_alt = 'Regały z książkami w Bibliotece Samorządowej w Żukowie';
	if ( is_wp_error( $photo ) ) {
		WP_CLI::warning( 'Welcome photo upload failed: ' . $photo->get_error_message() );
		$photo_block = '';
	} else {
		update_post_meta( $photo, '_wp_attachment_image_alt', $photo_alt );
		$photo_block = "<!-- wp:image {\"id\":$photo,\"aspectRatio\":\"9/7\",\"scale\":\"cover\",\"sizeSlug\":\"large\",\"linkDestination\":\"none\"} -->\n"
			. '<figure class="wp-block-image size-large"><img src="' . esc_url( wp_get_attachment_image_url( $photo, 'large' ) ) . '" alt="' . esc_attr( $photo_alt ) . "\" class=\"wp-image-$photo\" style=\"aspect-ratio:9/7;object-fit:cover\"/></figure>\n<!-- /wp:image -->";
	}

	// Wording adapted from the director's welcome on the "Nasza biblioteka" page.
	bz_ensure_pattern(
		'powitanie',
		'Strona główna: powitanie',
		'<!-- wp:columns {"verticalAlignment":"center","style":{"spacing":{"blockGap":{"left":"var:preset|spacing|60"}}}} -->
<div class="wp-block-columns are-vertically-aligned-center"><!-- wp:column {"verticalAlignment":"center"} -->
<div class="wp-block-column is-vertically-aligned-center"><!-- wp:paragraph {"className":"bz-kicker"} -->
<p class="bz-kicker">Gmina Żukowo · od 1948 roku</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":1} -->
<h1 class="wp-block-heading">Biblioteka Samorządowa w Żukowie</h1>
<!-- /wp:heading -->

<!-- wp:paragraph {"fontSize":"large"} -->
<p class="has-large-font-size">Czeka na Państwa około 43 000 książek w pięciu placówkach w gminie Żukowo. Zapraszamy też na lekcje biblioteczne, spotkania autorskie, warsztaty i konkursy – dla dzieci, młodzieży i dorosłych.</p>
<!-- /wp:paragraph -->

<!-- wp:buttons -->
<div class="wp-block-buttons"><!-- wp:button -->
<div class="wp-block-button"><a class="wp-block-button__link wp-element-button" href="#filie">Godziny i adresy</a></div>
<!-- /wp:button -->

<!-- wp:button {"className":"is-style-outline"} -->
<div class="wp-block-button is-style-outline"><a class="wp-block-button__link wp-element-button" href="/nasza-biblioteka/">O bibliotece</a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons --></div>
<!-- /wp:column -->

<!-- wp:column {"verticalAlignment":"center"} -->
<div class="wp-block-column is-vertically-aligned-center">' . $photo_block . '</div>
<!-- /wp:column --></div>
<!-- /wp:columns -->'
	);
}

bz_ensure_pattern(
	'liczby',
	'Strona główna: biblioteka w liczbach',
	'<!-- wp:group {"className":"bz-stats","style":{"spacing":{"blockGap":"var:preset|spacing|50"}},"layout":{"type":"grid","columnCount":4,"minimumColumnWidth":null}} -->
<div class="wp-block-group bz-stats"><!-- wp:paragraph -->
<p><strong>5</strong> placówek bibliotecznych</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><em>około</em> 43 000</strong> woluminów</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><em>blisko</em> 2 800</strong> stałych czytelników</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong><em>około</em> 22 000</strong> odwiedzin rocznie</p>
<!-- /wp:paragraph --></div>
<!-- /wp:group -->

<!-- wp:paragraph {"align":"center","className":"bz-more"} -->
<p class="has-text-align-center bz-more"><a href="/nasza-biblioteka/">Poznaj historię i misję biblioteki</a></p>
<!-- /wp:paragraph -->'
);

$hours_ref = bz_ensure_pattern(
	'godziny-otwarcia',
	'Godziny otwarcia',
	'<!-- wp:table {"className":"bz-hours"} -->
<figure class="wp-block-table bz-hours"><table class="has-fixed-layout"><tbody><tr><td>Poniedziałek</td><td>10.00 – 18.00</td></tr><tr><td>Wtorek</td><td>9.00 – 17.00</td></tr><tr><td>Środa</td><td>dzień prac wewnętrznych</td></tr><tr><td>Czwartek</td><td>8.00 – 16.00</td></tr><tr><td>Piątek</td><td>8.00 – 16.00</td></tr></tbody></table></figure>
<!-- /wp:table -->'
);

$main   = $branches[0];
$filie  = "<!-- wp:columns {\"verticalAlignment\":\"center\",\"style\":{\"spacing\":{\"blockGap\":{\"left\":\"var:preset|spacing|60\"}}}} -->\n<div class=\"wp-block-columns are-vertically-aligned-center\">";
$filie .= "<!-- wp:column {\"verticalAlignment\":\"center\"} -->\n<div id=\"{$main['id']}\" class=\"wp-block-column is-vertically-aligned-center\">" . bz_branch_heading( $main ) . bz_branch_details( $main, $hours_ref ) . "</div>\n<!-- /wp:column -->\n";
$filie .= "<!-- wp:column {\"verticalAlignment\":\"center\"} -->\n<div class=\"wp-block-column is-vertically-aligned-center\">" . bz_branches_map( $branches ) . "</div>\n<!-- /wp:column -->\n";
$filie .= "</div>\n<!-- /wp:columns -->\n";
$filie .= "<!-- wp:group {\"style\":{\"spacing\":{\"blockGap\":\"var:preset|spacing|50\",\"margin\":{\"top\":\"var:preset|spacing|60\"}}},\"layout\":{\"type\":\"grid\",\"columnCount\":2,\"minimumColumnWidth\":\"20rem\"}} -->\n<div class=\"wp-block-group\" style=\"margin-top:var(--wp--preset--spacing--60)\">";
foreach ( array_slice( $branches, 1 ) as $branch ) {
	$filie .= "<!-- wp:group {\"className\":\"bz-branch\",\"style\":{\"spacing\":{\"padding\":{\"top\":\"var:preset|spacing|40\",\"bottom\":\"var:preset|spacing|50\",\"left\":\"var:preset|spacing|40\",\"right\":\"var:preset|spacing|40\"}}},\"layout\":{\"type\":\"flex\",\"orientation\":\"vertical\",\"justifyContent\":\"center\"}} -->\n"
		. "<div id=\"{$branch['id']}\" class=\"wp-block-group bz-branch\" style=\"padding-top:var(--wp--preset--spacing--40);padding-right:var(--wp--preset--spacing--40);padding-bottom:var(--wp--preset--spacing--50);padding-left:var(--wp--preset--spacing--40)\">"
		. bz_branch_heading( $branch ) . bz_branch_details( $branch, $hours_ref )
		. "</div>\n<!-- /wp:group -->\n";
}
$filie .= "</div>\n<!-- /wp:group -->";
$filie_ref = bz_ensure_pattern( 'filie', 'Filie (adresy i mapa)', $filie );
bz_migrate_branches_map( $filie_ref, $branches );
bz_add_catalog_links( $filie_ref, $branches );

$gallery = '';
foreach ( $partners as $fragment => $name ) {
	$id = bz_find_attachment( $fragment );
	if ( ! $id ) {
		WP_CLI::warning( "Partner logo not found: $name" );
		continue;
	}
	update_post_meta( $id, '_wp_attachment_image_alt', $name );
	$src      = wp_get_attachment_image_url( $id, 'medium' );
	$gallery .= "<!-- wp:image {\"id\":$id,\"sizeSlug\":\"medium\",\"linkDestination\":\"none\"} -->\n<figure class=\"wp-block-image size-medium\"><img src=\"" . esc_url( $src ) . '" alt="' . esc_attr( $name ) . "\" class=\"wp-image-$id\"/></figure>\n<!-- /wp:image -->\n";
}
bz_ensure_pattern(
	'partnerzy',
	'Partnerzy',
	"<!-- wp:gallery {\"columns\":6,\"imageCrop\":false,\"linkTo\":\"none\",\"sizeSlug\":\"medium\",\"className\":\"bz-partners\"} -->\n<figure class=\"wp-block-gallery has-nested-images columns-6 bz-partners\">$gallery</figure>\n<!-- /wp:gallery -->"
);

bz_ensure_pattern(
	'stopka-kontakt',
	'Stopka: dane kontaktowe',
	'<!-- wp:paragraph {"fontSize":"small","style":{"typography":{"fontWeight":"600"}}} -->
<p class="has-small-font-size" style="font-weight:600">Biblioteka Samorządowa w Żukowie<br>' . esc_html( $main['street'] ) . '<br>' . esc_html( $main['city'] ) . '<br>' . bz_contact_links( $main ) . '</p>
<!-- /wp:paragraph -->'
);

$items = array(
	array( home_url( '/deklaracja-dostepnosci-strony-internetowej/' ), 'Deklaracja dostępności' ),
	array( home_url( '/raport-o-stanie-zapewnienia-dostepnosci-podmiotu-publicznego/' ), 'Raport o stanie zapewnienia dostępności' ),
);
foreach ( $documents as $fragment => $label ) {
	$id = bz_find_attachment( $fragment );
	if ( $id ) {
		$items[] = array( wp_get_attachment_url( $id ), $label );
	} else {
		WP_CLI::warning( "Document not found: $label" );
	}
}
// TODO(migration): this PDF sits in the old server's web root, outside the media
// library. Upload it to the media library and update this link.
$items[] = array( 'https://www.bibliotekazukowo.pl/Regulamin%20Korzystania%20z%20us%C5%82ug%20Biblioteki.pdf', 'Regulamin korzystania z usług Biblioteki (PDF)' );
$items[] = array( 'https://bibpubzukowo.naszbip.pl/', 'Biuletyn Informacji Publicznej' );

$list = '';
foreach ( $items as list( $url, $label ) ) {
	$list .= '<!-- wp:list-item --><li><a href="' . esc_url( $url ) . '">' . esc_html( $label ) . "</a></li><!-- /wp:list-item -->\n";
}
bz_ensure_pattern( 'stopka-linki', 'Stopka: dokumenty i linki', "<!-- wp:list -->\n<ul class=\"wp-block-list\">$list</ul>\n<!-- /wp:list -->" );

// The contact page shows the same branch details as the home page. Page content
// lives in the database, so it can reference the pattern by ID directly.
$contact = get_page_by_path( 'kontakt' );
if ( $contact && ! has_block( 'core/block', $contact ) ) {
	bz_log( 'Replacing /kontakt/ content with the branches pattern (old content kept as a revision)' );
	wp_save_post_revision( $contact->ID );
	wp_update_post(
		array(
			'ID'           => $contact->ID,
			'post_content' => "<!-- wp:block {\"ref\":$filie_ref} /-->",
		)
	);
}

// Links to every branch's catalog, linked from the main menu. Created once;
// after that it's an ordinary page staff can edit.
$catalogs = '';
foreach ( $branches as $branch ) {
	$catalogs .= '<!-- wp:list-item --><li><a href="' . esc_url( $branch['catalog'] ) . '">' . esc_html( $branch['name'] ) . "</a></li><!-- /wp:list-item -->\n";
}
bz_ensure_page(
	'katalog-online',
	'Katalog online',
	'<!-- wp:paragraph -->
<p>Każda nasza placówka ma własny katalog w serwisie SzukamKsiążki.pl. Wybierz placówkę, aby sprawdzić, czy książka jest w jej zbiorach.</p>
<!-- /wp:paragraph -->

<!-- wp:list {"fontSize":"large"} -->
<ul class="wp-block-list has-large-font-size">' . $catalogs . '</ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>Adresy i godziny otwarcia placówek są na stronie <a href="/kontakt/">Kontakt</a>.</p>
<!-- /wp:paragraph -->'
);

flush_rewrite_rules();
WP_CLI::success( 'Setup done.' );
