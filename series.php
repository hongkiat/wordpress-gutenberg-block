<?php
/**
 * Functions to register client-side assets (scripts and stylesheets) for the
 * Gutenberg block.
 *
 * @package twentyseventeen
 */

/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 *
 * @see https://wordpress.org/gutenberg/handbook/blocks/writing-your-first-block-type/#enqueuing-block-scripts
 */
function series_block_init() {
	$dir = get_template_directory() . '/blocks';

	$index_js = 'series/index.js';
	wp_register_script(
		'series-block-editor',
		get_template_directory_uri() . "/blocks/$index_js",
		array(
			'wp-blocks',
			'wp-i18n',
			'wp-element',
		),
		filemtime( "$dir/$index_js" )
	);

	$editor_css = 'series/editor.css';
	wp_register_style(
		'series-block-editor',
		get_template_directory_uri() . "/blocks/$editor_css",
		array(
			'wp-blocks',
		),
		filemtime( "$dir/$editor_css" )
	);

	$style_css = 'series/style.css';
	wp_register_style(
		'series-block',
		get_template_directory_uri() . "/blocks/$style_css",
		array(
			'wp-blocks',
		),
		filemtime( "$dir/$style_css" )
	);

	register_block_type( 'twentyseventeen/series', array(
		'editor_script' => 'series-block-editor',
		'editor_style'  => 'series-block-editor',
		'style'         => 'series-block',
	) );
}
add_action( 'init', 'series_block_init' );
