import { createHigherOrderComponent } from '@wordpress/compose';
import { InspectorControls } from '@wordpress/block-editor';
import {
	__experimentalToolsPanel as ToolsPanel, // eslint-disable-line @wordpress/no-unsafe-wp-apis
	__experimentalToolsPanelItem as ToolsPanelItem, // eslint-disable-line @wordpress/no-unsafe-wp-apis
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import { ColorControl } from './ColorControl';
import { IconControl } from './IconControl';
import { targetBlockType } from '.';

import type { PropsWithChildren } from 'react';
import type { BlockInstance, BlockEditProps } from '@wordpress/blocks';

import type { AdditionalProps } from './types';

export const withListBlockEnhancements = createHigherOrderComponent(
	( BlockEdit ) => {
		return (
			props: PropsWithChildren< BlockInstance< AdditionalProps > > &
				BlockEditProps< AdditionalProps >
		) => {
			if ( props.name !== targetBlockType ) {
				return <BlockEdit { ...props } />;
			}

			return (
				<>
					<InspectorControls group="styles">
						<ToolsPanel
							label={ 'Icon' }
							resetAll={ () =>
								props.setAttributes( { iconColor: undefined } )
							}
							className="components-grid components-tools-panel color-block-support-panel"
							panelId={ props.clientId }
						>
							<ToolsPanelItem
								panelId={ props.clientId }
								label={ 'Color' }
								hasValue={ () => !! props.attributes.iconColor }
								isShownByDefault={ true }
								className="components-tools-panel-item block-editor-tools-panel-color-gradient-settings__item first last"
							>
								<ColorControl
									value={ props.attributes.iconColor }
									onChange={ ( value ) => {
										props.setAttributes( {
											iconColor: value,
										} );
									} }
									label={ __( 'Color' ) }
								/>
							</ToolsPanelItem>
							<ToolsPanelItem
								label={ 'Icon' }
								hasValue={ () => !! props.attributes.iconName }
								isShownByDefault={ true }
								panelId={ props.clientId }
							>
								<IconControl
									value={ props.attributes.iconName }
									onChange={ ( value ) => {
										props.setAttributes( {
											iconName: value,
										} );
									} }
									label={ __( 'Icon' ) }
								/>
							</ToolsPanelItem>
						</ToolsPanel>
					</InspectorControls>

					<BlockEdit
						key="edit"
						{ ...props }
						data-icon-color={ props.attributes.iconColor }
						data-icon-name={ props.attributes.iconName }
					/>
				</>
			);
		};
	},
	'withListBlockEnhancements'
);
