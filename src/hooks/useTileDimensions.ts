import { useContext } from 'react';
import { TileDimensionsContext } from '../contexts';

export const useTileDimensions = () => {
  const context = useContext(TileDimensionsContext);

  if (context === null) {
    throw "'useTileDimensions' cannot be used out of the <ShowcaseApp />!";
  }

  return context;
};
