import { StyleSheet } from 'react-native';
import { ThemeType } from '../../types';

export const createStyles = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      paddingTop: 24,
    },
    name: {
      color: theme === 'dark' ? 'white' : 'black',
      fontSize: 14,
    },
  });
