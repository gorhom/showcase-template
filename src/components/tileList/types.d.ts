import type { ExampleType, ExampleSectionType } from '../../types';

export interface TileListProps {
  name: string;
  description: string;
  version: string;
  data: Array<ExampleSectionType | ExampleType>;
  author: {
    username: string;
    url: string;
  };
}
