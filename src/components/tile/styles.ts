import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { useTileDimensions } from '../../hooks';

export const useStyles = (isLarge: boolean) => {
  const { regular, large } = useTileDimensions();

  return useMemo(
    () =>
      StyleSheet.create({
        touchable: {
          minHeight: 76,
          width: isLarge ? large : regular,
        },
        label: {
          fontSize: 20,
          fontWeight: '400',
          lineHeight: 26,
        },
      }),
    [isLarge, large, regular]
  );
};
