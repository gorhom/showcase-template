import { createContext } from 'react';

export interface TileDimensionsType {
  regular: number;
  large: number;
}

export const TileDimensionsContext = createContext<TileDimensionsType | null>(
  null
);
