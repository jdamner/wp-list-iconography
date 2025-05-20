import { Flex, ComboboxControl } from '@wordpress/components';

import {
	MaterialSymbol,
	type MaterialSymbolProps,
} from 'react-material-symbols';

import { iconNames } from './consts';

interface ControlProps {
	value?: MaterialSymbolProps[ 'icon' ];
	onChange: ( value?: MaterialSymbolProps[ 'icon' ] ) => void;
	label: string;
}

export const IconControl = ( { value, onChange, label }: ControlProps ) => {
	const options = iconNames.map( ( iconName ) => ( {
		label: convertSnakeToTitleCase( iconName ),
		value: iconName,
	} ) );
	return (
		<ComboboxControl
			label={ label }
			value={ value }
			expandOnFocus
			onChange={ ( newValue ) => {
				onChange(
					newValue as MaterialSymbolProps[ 'icon' ] | undefined
				);
			} }
			options={ options }
			__experimentalRenderItem={ ( { item } ) => (
				<Flex direction="row" gap="2">
					<MaterialSymbol
						icon={ item.value as MaterialSymbolProps[ 'icon' ] }
						size={ 24 }
						style={ {
							margin: '0 4px',
							display: 'inline-block',
						} }
					/>
					{ item.label }
				</Flex>
			) }
			__nextHasNoMarginBottom
			__next40pxDefaultSize
		/>
	);
};

const convertSnakeToTitleCase = ( s: string ): string =>
	s
		.replace( /^[-_]*(.)/, ( _, c: string ) => c.toUpperCase() )
		.replace( /[-_]+(.)/g, ( _, c: string ) => ' ' + c.toUpperCase() );
