import React, { FC } from 'react';
import { View } from 'react-native';
import { Tile } from '../tile';
import { Label } from '../label';
import { useStyles } from './styles';
import type { TileGroupProps } from './types';

export const TileGroup: FC<TileGroupProps> = ({ title, data, onPress }) => {
  // variables
  const styles = useStyles();

  // renders
  return (
    <>
      {title !== '' && <Label style={styles.title}>{title}</Label>}
      <View style={styles.container}>
        {data.map((item, index) => (
          <Tile
            key={`item-${item.slug}`}
            index={index}
            isLarge={index === data.length - 1 && index % 2 === 0}
            onPress={onPress}
            {...item}
          />
        ))}
      </View>
    </>
  );
};
