( function( wp ) {
	/**
	 * Registers a new block provided a unique name and an object defining its behavior.
	 * @see https://github.com/WordPress/gutenberg/tree/master/blocks#api
	 */
	var registerBlockType = wp.blocks.registerBlockType;
	/**
	 * Returns a new element of given type. Element is an abstraction layer atop React.
	 * @see https://github.com/WordPress/gutenberg/tree/master/element#element
	 */
	var el = wp.element.createElement;
	/**
	 * Retrieves the translation of text.
	 * @see https://github.com/WordPress/gutenberg/tree/master/i18n#api
	 */
	var __ = wp.i18n.__;

	/**
	 * Every block starts by registering a new block type definition.
	 * @see https://wordpress.org/gutenberg/handbook/block-api/
	 */
	registerBlockType( 'twentyseventeen/series', {
		/**
		 * This is the display title for your block, which can be translated with `i18n` functions.
		 * The block inserter will show this name.
		 */
		title: __( 'HTML5 Series' ),

		/**
		 * The list of keywords to easily find the block in the editor.
		 */
		keywords: [ 'html' ],

		/**
		 * Blocks are grouped into categories to help users browse and discover them.
		 * The categories provided by core are `common`, `embed`, `formatting`, `layout` and `widgets`.
		 */
		category: 'widgets',

		/**
		 * Optional block extended support features.
		 */
		supports: {
			html: false,
		},

		/**
		 * The edit function describes the structure of your block in the context of the editor.
		 * This represents what the editor will render when the block is used.
		 * @see https://wordpress.org/gutenberg/handbook/block-edit-save/#edit
		 *
		 * @param {Object} [props] Properties passed from the editor.
		 * @return {Element}       Element to render.
		 */
		edit: function( props ) {

			return el(
				'div',
				{ className: props.className },
				el( 'a', {
					href: 'https://www.hongkiat.com/blog/tag/series-html5-css3-tuts/',
				}, [
					'This article is part of our',
					el( 'strong', {}, ' "HTML5/CSS3 Tutorials series"' ),
					' - dedicated to help make you a better designer and/or developer.',
					el( 'strong', {}, ' Click here' ),
					' to see more articles from the same series'
				] )
			);
		},

		/**
		 * The save function defines the way in which the different attributes should be combined
		 * into the final markup, which is then serialized by Gutenberg into `post_content`.
		 * @see https://wordpress.org/gutenberg/handbook/block-edit-save/#save
		 *
		 * @return {Element}       Element to render.
		 */
		save: function( props ) {

			return el(
				'div',
				{ className: props.className },
				el( 'a', {
					href: 'https://www.hongkiat.com/blog/tag/series-html5-css3-tuts/',
				}, [
					'This article is part of our',
					el( 'strong', {}, ' "HTML5/CSS3 Tutorials series"' ),
					' - dedicated to help make you a better designer and/or developer.',
					el( 'strong', {}, ' Click here' ),
					' to see more articles from the same series'
				] )
			);
		}
	} );
} )(
	window.wp
);
