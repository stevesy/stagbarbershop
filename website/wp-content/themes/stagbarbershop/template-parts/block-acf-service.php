<?php

/**
 * ACF Service Block Template.
 *
 * @param   array $block The block settings and attributes.
 * @param   string $content The block inner HTML (empty).
 * @param   bool $is_preview True during AJAX preview.
 * @param   (int|string) $post_id The post ID this block is saved to.
 */

$id = 'acf-service-' . $block['id'];
if (!empty($block['anchor'])) {
	$id = $block['anchor'];
}

$className = 'acf-block-service d-flex justify-content-between mb-1';
if (!empty($block['className']) ) {
	$className .= ' ' . $block['className'];
}
if (!empty($block['align'])) {
	$className .= ' align' . $block['align'];
}

$description = get_field( 'description' ) ?: 'Description here...';
$price = get_field( 'price' ) ?: '0.00';
?>

<div id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?>">
	<span class="acf-block-service__description flex-grow-1 pr-2">
		<?php echo $description; ?>
	</span>
	<span class="acf-block-service__price">
		$<?php echo $price; ?>
	</span>
</div>
