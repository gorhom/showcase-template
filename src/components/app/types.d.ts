import type React from 'react';
import type { TileListProps } from '../tileList';
import type { ExampleType, ExampleSectionType } from '../../types';

export interface ExampleScreenType extends ExampleType {
  getScreen: () => React.ComponentType<any>;
}

interface ExampleScreenSectionType extends ExampleSectionType {
  title: string;
  data: ExampleScreenType[];
}

export interface AppProps extends Omit<TileListProps, 'data'> {
  data: Array<ExampleScreenSectionType>;
}
