import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

export const useStyles = () => {
  const { colors } = useTheme();
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
