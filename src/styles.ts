import { StyleSheet, Insets } from 'react-native';
import { ThemeType } from './types';

export const createStyles = (theme: ThemeType, safeInsets?: Insets) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme === 'dark' ? 'black' : 'white',
    },
    contentContainer: {
      paddingHorizontal: 24,
      paddingBottom: Math.max(safeInsets?.bottom ?? 0, 24),
    },
    separator: {
      width: 12,
      height: 12,
    },
  });
