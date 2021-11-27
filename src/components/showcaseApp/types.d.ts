import type { ShowcaseTileListProps } from '../showcaseTileList';
import type { ShowcaseExampleScreenSectionType } from '../../types';

export interface ShowcaseAppProps extends Omit<ShowcaseTileListProps, 'data'> {
  initialScreen?: string;
  data: Array<ShowcaseExampleScreenSectionType>;
}
