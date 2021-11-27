import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { useShowcaseTheme } from '../../hooks';

export const useStyles = (safeTopInset: number = 0) => {
  const { colors } = useShowcaseTheme();
  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          backgroundColor: colors.background,
          paddingBottom: 24,
          paddingTop: Math.max(safeTopInset, 24),
        },
        version: {
          alignSelf: 'flex-start',
          backgroundColor: colors.secondaryCard,
          borderRadius: 12,
          paddingHorizontal: 6,
          paddingVertical: 3,
          fontSize: 12,
          overflow: 'hidden',
        },
        name: {
          fontSize: 34,
          fontWeight: '600',
          marginBottom: 12,
        },
        description: {
          color: colors.secondaryText,
          fontSize: 16,
        },
      }),
    [
      colors.background,
      colors.secondaryCard,
      colors.secondaryText,
      safeTopInset,
    ]
  );
};
