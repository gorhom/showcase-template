import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

export const useStyles = (safeBottomInset: number = 0) => {
  const { colors } = useTheme();
  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: colors.background,
        },
        contentContainer: {
          paddingHorizontal: 24,
          paddingBottom: Math.max(safeBottomInset, 24),
        },
        separator: {
          width: 12,
          height: 12,
        },
      }),
    [colors.background, safeBottomInset]
  );
};
