import type { ShowcaseExampleSectionType } from '../../types';

export interface ShowcaseTileGroupProps extends ShowcaseExampleSectionType {
  onPress: (slug: string) => void;
}
