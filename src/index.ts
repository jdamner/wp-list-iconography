import { addFilter } from '@wordpress/hooks';
import { withListBlockEnhancements } from './Edit';
import { withExtraSaveProps } from './SaveProps';

// Styles
import 'react-material-symbols/outlined'; // eslint-disable-line import/no-unresolved
import './frontend.css';

export const targetBlockType = 'core/list-item';

addFilter(
	'editor.BlockEdit',
	'jdamner/list-block-icon-extensions',
	withListBlockEnhancements
);

addFilter(
	'blocks.getSaveContent.extraProps',
	'jdamner/list-block-icon-extensions',
	withExtraSaveProps
);

addFilter(
	'blocks.registerBlockType',
	'jdamner/list-block-icon-extensions',
	( settings, name ) => {
		if ( name !== targetBlockType ) {
			return settings;
		}

		return {
			...settings,
			attributes: {
				...settings.attributes,
				iconColor: {
					type: 'string',
					default: undefined,
				},
				iconName: {
					type: 'string',
					default: undefined,
				},
			},
		};
	}
);
