import type React from 'react';
import type { TileListProps } from '../tileList';
import type { ExampleType, ExampleSectionType } from '../../types';
import type { StackNavigationOptions } from '@react-navigation/stack';

export interface ExampleScreenType extends ExampleType {
  getScreen: () => React.ComponentType<any>;
  screenOptions?: StackNavigationOptions;
}

export interface ExampleScreenSectionType extends ExampleSectionType {
  title: string;
  data: ExampleScreenType[];
}

export interface AppProps extends Omit<TileListProps, 'data'> {
  data: Array<ExampleScreenSectionType>;
}
