import React, { FC } from 'react';
import { View } from 'react-native';
import { ShowcaseTile } from '../showcaseTile';
import { ShowcaseLabel } from '../showcaseLabel';
import { useStyles } from './styles';
import type { ShowcaseTileGroupProps } from './types';

export const ShowcaseTileGroup: FC<ShowcaseTileGroupProps> = ({
  title,
  data,
  onPress,
}) => {
  // variables
  const styles = useStyles();

  // renders
  return (
    <>
      {title !== '' && (
        <ShowcaseLabel style={styles.title}>{title}</ShowcaseLabel>
      )}
      <View style={styles.container}>
        {data.map((item, index) => (
          <ShowcaseTile
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
