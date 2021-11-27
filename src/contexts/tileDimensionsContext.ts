import { createContext } from 'react';

interface TileDimensionsType {
  regular: number;
  large: number;
}

export const TileDimensionsContext = createContext<TileDimensionsType | null>(
  null
);
