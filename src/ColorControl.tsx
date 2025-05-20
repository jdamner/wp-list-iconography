import { type ComponentProps, useRef } from 'react';

import {
	ColorPalette,
	Button,
	Flex,
	FlexItem,
	ColorIndicator,
	Dropdown,
	__experimentalDropdownContentWrapper as DropdownContentWrapper, // eslint-disable-line @wordpress/no-unsafe-wp-apis
	Spinner,
} from '@wordpress/components';
import { useSettings } from '@wordpress/block-editor';

import clsx from 'clsx';

interface ControlProps {
	value: ComponentProps< typeof ColorPalette >[ 'value' ];
	onChange: ComponentProps< typeof ColorPalette >[ 'onChange' ];
	label: string;
}

export const ColorControl = ( { value, onChange, label }: ControlProps ) => {
	const colorGradientDropdownButtonRef = useRef< typeof Button >( undefined );
	const [ colorPalette ] = useSettings( 'color.palette' );
	if ( ! colorPalette ) {
		return <Spinner />;
	}

	return (
		<>
			<Dropdown
				popoverProps={ {
					placement: 'left-start',
					offset: 36,
					shift: true,
				} }
				className="block-editor-tools-panel-color-gradient-settings__dropdown"
				renderToggle={ ( { onToggle, isOpen } ) => (
					<Button
						__next40pxDefaultSize
						onClick={ onToggle }
						className={ clsx(
							'block-editor-panel-color-gradient-settings__dropdown',
							{ 'is-open': isOpen }
						) }
						aria-expanded={ isOpen }
						ref={ colorGradientDropdownButtonRef }
					>
						<Flex direction="row" justify="flex-start">
							<Flex direction="column">
								<Flex expanded={ false }>
									<ColorIndicator colorValue={ value } />
								</Flex>
							</Flex>
							<FlexItem className="block-editor-panel-color-gradient-settings__color-name">
								{ label }
							</FlexItem>
						</Flex>
					</Button>
				) }
				renderContent={ () => (
					<DropdownContentWrapper paddingSize="medium">
						<div className="block-editor-panel-color-gradient-settings__dropdown-content">
							<ColorPalette
								enableAlpha
								__experimentalIsRenderedInSidebar
								value={ value }
								colors={ colorPalette }
								onChange={ onChange }
							/>
						</div>
					</DropdownContentWrapper>
				) }
			/>
		</>
	);
};
