import { StyleSheet, Dimensions } from 'react-native';
import { ThemeType } from '../../types';

const SCREEN_WIDTH = Dimensions.get('window').width;
const PARENT_CONTAINER_WIDTH = SCREEN_WIDTH - 24 * 2;
const ITEM_WIDTH = PARENT_CONTAINER_WIDTH / 2 - 6;

export const createStyles = (theme: ThemeType, isLarge: boolean) =>
  StyleSheet.create({
    root: {
      backgroundColor: theme === 'dark' ? '#222' : '#CCC',
      justifyContent: 'flex-end',
      borderRadius: 12,
      minHeight: 76,
      width: isLarge ? PARENT_CONTAINER_WIDTH : ITEM_WIDTH,
      marginVertical: 6,
    },
    container: {
      padding: 12,
    },
    name: {
      color: theme === 'dark' ? 'white' : 'black',
      fontSize: 20,
      fontWeight: '400',
      lineHeight: 26,
    },
  });
