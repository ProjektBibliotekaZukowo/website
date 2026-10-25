<?php
/**
 * Title: Karta aktualności
 * Slug: biblioteka-zukowo/news-card
 * Inserter: no
 * Description: One news item in a query loop: image, title, excerpt, "Czytaj dalej".
 */
?>
<!-- wp:group {"className":"bz-card","style":{"spacing":{"blockGap":"0"}},"layout":{"type":"flex","orientation":"vertical","justifyContent":"stretch"}} -->
<div class="wp-block-group bz-card">
	<!-- wp:post-featured-image {"isLink":false,"aspectRatio":"16/9","height":"","sizeSlug":"medium_large"} /-->

	<!-- wp:group {"style":{"spacing":{"padding":{"top":"var:preset|spacing|50","bottom":"var:preset|spacing|50","left":"var:preset|spacing|50","right":"var:preset|spacing|50"},"blockGap":"var:preset|spacing|30"}},"layout":{"type":"flex","orientation":"vertical"}} -->
	<div class="wp-block-group" style="padding-top:var(--wp--preset--spacing--50);padding-right:var(--wp--preset--spacing--50);padding-bottom:var(--wp--preset--spacing--50);padding-left:var(--wp--preset--spacing--50)">
		<!-- wp:post-date {"format":"j F Y"} /-->

		<!-- wp:post-title {"level":3,"isLink":true,"fontSize":"large","style":{"typography":{"fontWeight":"800"}}} /-->

		<!-- wp:post-excerpt {"moreText":"Czytaj dalej","showMoreOnNewLine":true,"excerptLength":22} /-->
	</div>
	<!-- /wp:group -->
</div>
<!-- /wp:group -->
