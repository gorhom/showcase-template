import { StyleSheet, Insets } from 'react-native';
import { ThemeType } from '../../types';

export const createStyles = (theme: ThemeType, safeInsets?: Insets) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme === 'dark' ? 'black' : 'white',
      paddingBottom: 24,
      paddingTop: Math.max(safeInsets?.top ?? 0, 24),
    },
    version: {
      alignSelf: 'flex-start',
      backgroundColor: theme === 'dark' ? '#111' : '#EEEEEE',
      borderRadius: 12,
      paddingHorizontal: 6,
      paddingVertical: 3,
      color: theme === 'dark' ? 'white' : 'black',
      fontSize: 12,
      overflow: 'hidden',
    },
    name: {
      color: theme === 'dark' ? 'white' : 'black',
      fontSize: 34,
      fontWeight: '600',
      marginBottom: 12,
    },
    description: {
      color: theme === 'dark' ? '#d3d3d3' : '#2C2C2C',
      fontSize: 16,
    },
  });
