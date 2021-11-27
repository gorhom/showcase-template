import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { useShowcaseTheme } from '../../hooks';

export const useStyles = () => {
  const { colors } = useShowcaseTheme();
  return useMemo(
    () =>
      StyleSheet.create({
        text: {
          color: colors.text,
        },
      }),
    [colors.text]
  );
};
