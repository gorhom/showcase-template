import React, { FC } from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ShowcaseLabel } from '../showcaseLabel';
import { useStyles } from './styles';
import type { ShowcaseHeaderProps } from './types';

export const ShowcaseHeader: FC<ShowcaseHeaderProps> = ({
  version = '0.0.0',
  name,
  description,
}) => {
  const { top: safeTopInset } = useSafeAreaInsets();

  // variables
  const styles = useStyles(safeTopInset);

  // renders
  return (
    <View style={styles.container}>
      <ShowcaseLabel style={styles.version}>{`v${version}`}</ShowcaseLabel>
      <ShowcaseLabel style={styles.name}>{name}</ShowcaseLabel>
      <ShowcaseLabel style={styles.description}>{description}</ShowcaseLabel>
    </View>
  );
};
