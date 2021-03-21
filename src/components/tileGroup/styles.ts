import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from '../../theme';

export const useStyles = () => {
  const { colors } = useTheme();

  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        },
        title: {
          fontWeight: '800',
          textTransform: 'uppercase',
          marginTop: 12,
          marginBottom: 6,
          color: colors.secondaryText,
        },
      }),
    [colors.secondaryText]
  );
};
