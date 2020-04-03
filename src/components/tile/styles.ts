import { StyleSheet } from 'react-native';
import { ThemeType } from '../../types';

export const createStyles = (theme: ThemeType) =>
  StyleSheet.create({
    root: {
      backgroundColor: theme === 'dark' ? '#222' : '#CCC',
      flex: 1,
      justifyContent: 'flex-end',
      borderRadius: 12,
      minHeight: 96,
    },
    container: {
      padding: 12,
    },
    name: {
      color: theme === 'dark' ? 'white' : 'black',
      fontSize: 24,
    },
  });
