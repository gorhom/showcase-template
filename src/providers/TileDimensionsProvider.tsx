import React, { ReactNode, useMemo } from 'react';
import { useWindowDimensions } from 'react-native';
import { TileDimensionsContext } from '../contexts';

interface TileDimensionsProviderProps {
  children: ReactNode;
}

export const TileDimensionsProvider = ({
  children,
}: TileDimensionsProviderProps) => {
  //#region hooks
  const { width } = useWindowDimensions();
  //#endregion

  //#region variables
  const parentContainerWidth = useMemo(() => width - 24 * 2, [width]);
  const itemWidth = useMemo(() => parentContainerWidth / 2 - 6, [
    parentContainerWidth,
  ]);
  const contextValue = useMemo(
    () => ({
      regular: itemWidth,
      large: parentContainerWidth,
    }),
    [itemWidth, parentContainerWidth]
  );
  //#endregion

  return (
    <TileDimensionsContext.Provider value={contextValue}>
      {children}
    </TileDimensionsContext.Provider>
  );
};
