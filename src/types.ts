import { type ComponentProps } from 'react';
import { IconControl } from './IconControl';
import { ColorControl } from './ColorControl';

export type AdditionalProps = {
	iconColor?: ComponentProps< typeof ColorControl >[ 'value' ];
	iconName?: ComponentProps< typeof IconControl >[ 'value' ];
};
