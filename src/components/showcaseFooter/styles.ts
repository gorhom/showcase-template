import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { useShowcaseTheme } from '../../hooks';

export const useStyles = () => {
  const { colors } = useShowcaseTheme();
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
