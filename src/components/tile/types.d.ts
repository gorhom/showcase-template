import { ExampleType } from '../../types';

export interface TileProps extends ExampleType {
  index: number;
  isLarge: boolean;
  onPress: (slug: string) => void;
}
