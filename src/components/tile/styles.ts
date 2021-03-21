import { useMemo } from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const PARENT_CONTAINER_WIDTH = SCREEN_WIDTH - 24 * 2;
const ITEM_WIDTH = PARENT_CONTAINER_WIDTH / 2 - 6;

export const useStyles = (isLarge: boolean) =>
  useMemo(
    () =>
      StyleSheet.create({
        touchable: {
          minHeight: 76,
          width: isLarge ? PARENT_CONTAINER_WIDTH : ITEM_WIDTH,
        },
        label: {
          fontSize: 20,
          fontWeight: '400',
          lineHeight: 26,
        },
      }),
    [isLarge]
  );
