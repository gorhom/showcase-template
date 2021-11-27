import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { useShowcaseTheme } from '../../hooks';

export const useStyles = () => {
  const { colors } = useShowcaseTheme();
  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          backgroundColor: colors.secondaryCard,
          justifyContent: 'flex-end',
          borderRadius: 12,
          marginVertical: 6,
        },
        contentContainer: {
          padding: 12,
        },
      }),
    [colors.secondaryCard]
  );
};
