import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from '../../theme';

export const useStyles = () => {
  const { colors } = useTheme();
  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          paddingTop: 24,
        },
        footer: {
          fontSize: 14,
        },
        username: {
          color: colors.primary,
        },
      }),
    [colors.primary]
  );
};
