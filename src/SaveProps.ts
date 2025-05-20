import { targetBlockType } from '.';

import type { BlockInstance, BlockSaveProps } from '@wordpress/blocks';
import type { AdditionalProps } from './types';

export const withExtraSaveProps = (
	props: BlockSaveProps< AdditionalProps >,
	blockType: BlockInstance,
	attributes: AdditionalProps
) => {
	if ( blockType.name !== targetBlockType ) {
		return props;
	}
	const { iconColor, iconName } = attributes;
	return {
		...props,
		'data-icon-color': iconColor,
		'data-icon-name': iconName,
	};
};
