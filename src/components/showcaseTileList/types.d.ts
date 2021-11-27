import type {
  ShowcaseExampleType,
  ShowcaseExampleSectionType,
} from '../../types';

export interface ShowcaseTileListProps {
  name: string;
  description: string;
  version: string;
  data: Array<ShowcaseExampleSectionType | ShowcaseExampleType>;
  author: {
    username: string;
    url: string;
  };
}
