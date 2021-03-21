import React, { FC } from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Label } from '../label';
import { useStyles } from './styles';
import type { HeaderProps } from './types';

export const Header: FC<HeaderProps> = ({
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
      <Label style={styles.version}>{`v${version}`}</Label>
      <Label style={styles.name}>{name}</Label>
      <Label style={styles.description}>{description}</Label>
    </View>
  );
};
