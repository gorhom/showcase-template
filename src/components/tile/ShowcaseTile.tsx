import React, { useMemo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ExampleType, ThemeType } from '../../types';
import { createStyles } from './styles';

interface ShowcaseTileProps extends ExampleType {
  index: number;
  theme: ThemeType;
  isLarge: boolean;
  handleOnPress: (slug: string) => void;
}

const ShowcaseTile = (props: ShowcaseTileProps) => {
  // props
  const { name, slug, theme, isLarge, handleOnPress } = props;

  // variables
  const styles = useMemo(() => createStyles(theme, isLarge), [theme, isLarge]);

  // renders
  return (
    <TouchableOpacity onPress={() => handleOnPress(slug)} style={styles.root}>
      <View style={styles.container}>
        <Text style={styles.name}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ShowcaseTile;
