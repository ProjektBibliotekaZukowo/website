<?php
/**
 * Content cleanup after importing the old site, safe to re-run:
 * `wp eval-file /setup/clean-content.php`.
 *
 * - Emoji copied from Facebook posts arrive as <img> tags hotlinked from
 *   Facebook's CDN, which leaks visitors' IP addresses to Facebook and breaks
 *   when Facebook changes the URLs. Replace them with the emoji characters.
 * - Forms have no place in post content; one post contains chat-app interface
 *   markup pasted along with its text.
 *
 * Edits post_content directly so modification dates and revisions stay as they were.
 */

defined( 'ABSPATH' ) || exit;

global $wpdb;

$fb_emoji = '#<img\b[^>]*\bsrc="https://static\.xx\.fbcdn\.net/[^"]*/([0-9a-f_]+)\.png[^"]*"[^>]*>#i';

$posts   = $wpdb->get_results( "SELECT ID, post_content FROM {$wpdb->posts} WHERE post_content LIKE '%fbcdn.net%' OR post_content LIKE '%<form%'" );
$emoji   = 0;
$forms   = 0;
$changed = 0;

foreach ( $posts as $post ) {
	$content = preg_replace_callback(
		$fb_emoji,
		function ( $m ) use ( &$emoji ) {
			$emoji++;
			if ( preg_match( '/\balt="([^"]+)"/', $m[0], $alt ) ) {
				return $alt[1];
			}
			// No alt text: the file name holds the code points, e.g. 1f1fa_1f1e6.png.
			return implode( '', array_map( fn( $cp ) => '&#x' . $cp . ';', explode( '_', $m[1] ) ) );
		},
		$post->post_content
	);
	$content = preg_replace( '#<form\b.*?</form>#is', '', $content, -1, $removed );
	$forms  += $removed;

	if ( $content !== $post->post_content ) {
		$wpdb->update( $wpdb->posts, array( 'post_content' => $content ), array( 'ID' => $post->ID ) );
		clean_post_cache( $post->ID );
		$changed++;
	}
}

WP_CLI::success( "Replaced $emoji Facebook emoji images, removed $forms forms, updated $changed posts." );
