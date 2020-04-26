import { StyleSheet } from 'react-native';
import { ThemeType } from '../../types';

export const createStyles = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    title: {
      fontWeight: '600',
      textTransform: 'uppercase',
      marginTop: 12,
      marginBottom: 6,
      color: theme === 'dark' ? '#CCC' : '#222',
    },
  });
