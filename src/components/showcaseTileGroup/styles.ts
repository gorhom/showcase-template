import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { useShowcaseTheme } from '../../hooks';

export const useStyles = () => {
  const { colors } = useShowcaseTheme();
  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          overflow: 'hidden',
        },
        contentContainer: {
          position: 'absolute',
          left: 0,
          right: 0,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        },
        header: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        },
        title: {
          flex: 1,
          fontWeight: '800',
          textTransform: 'uppercase',
          paddingTop: 12,
          paddingBottom: 6,
          color: colors.secondaryText,
        },
      }),
    [colors.secondaryText]
  );
};

export const useAccordionIndicatorStyles = () => {
  const { colors } = useShowcaseTheme();
  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          width: 12,
          height: 12,
        },
        line: {
          position: 'absolute',
          top: 3,
          left: 3.5,
          backgroundColor: colors.secondaryText,
          width: 3,
          height: 12,
          borderRadius: 3,
        },
      }),
    [colors.secondaryText]
  );
};
