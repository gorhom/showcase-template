import { StyleSheet } from 'react-native';
import { ThemeType } from './types';

export const createStyles = (theme: ThemeType) =>
  StyleSheet.create({
    root: {
      backgroundColor: theme === 'dark' ? 'black' : 'white',
      flex: 1,
    },
    container: {
      flex: 1,
    },
    contentContainer: {
      padding: 24,
      flex: 1,
    },
    separator: {
      width: 12,
      height: 12,
    },
  });
