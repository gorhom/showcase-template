import type { ExampleSectionType } from '../../types';

export interface TileGroupProps extends ExampleSectionType {
  onPress: (slug: string) => void;
}
