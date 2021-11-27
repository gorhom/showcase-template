import { ShowcaseExampleType } from '../../types';

export interface ShowcaseTileProps extends ShowcaseExampleType {
  index: number;
  isLarge: boolean;
  onPress: (slug: string) => void;
}
