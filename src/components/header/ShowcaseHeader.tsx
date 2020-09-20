import React from 'react';
import { View, Text, Insets } from 'react-native';
import { createStyles } from './styles';
import { ThemeType } from '../../types';

interface ShowcaseHeaderProps {
  version: string;
  name: string;
  description: string;
  theme: ThemeType;
  safeInsets?: Insets;
}

const ShowcaseHeader = (props: ShowcaseHeaderProps) => {
  // props
  const { version = '0.0.0', name, description, theme, safeInsets } = props;

  // variables
  const styles = createStyles(theme, safeInsets);

  // renders
  return (
    <View style={styles.container}>
      <Text style={styles.version}>{`v${version}`}</Text>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

export default ShowcaseHeader;
