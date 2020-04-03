import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ExampleType, ThemeType } from '../../types';
import { createStyles } from './styles';

interface ShowcaseTileProps extends ExampleType {
  index: number;
  handleOnPress: (slug: string) => void;
  isLastItem: boolean;
  theme: ThemeType;
}

const ShowcaseTile = (props: ShowcaseTileProps) => {
  // props
  const { index, name, slug, theme, isLastItem, handleOnPress } = props;

  // variables
  const styles = createStyles(theme);

  // styles
  const rootStyle = [
    styles.root,
    {
      ...(isLastItem
        ? {}
        : index % 2 === 0
        ? { marginRight: 6 }
        : { marginLeft: 6 }),
    },
  ];

  // renders
  return (
    <TouchableOpacity onPress={() => handleOnPress(slug)} style={rootStyle}>
      <View style={styles.container}>
        <Text style={styles.name}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ShowcaseTile;
