import React from 'react';
import { Text, View } from 'react-native';
import ShowcaseTile from '../tile';
import { ThemeType, ExampleSectionType } from '../../types';
import { createStyles } from './styles';

interface ShowcaseGroupProps extends ExampleSectionType {
  theme: ThemeType;
  handleOnPress: (slug: string) => void;
}

const ShowcaseGroup = (props: ShowcaseGroupProps) => {
  // props
  const { title, data, theme, handleOnPress } = props;

  // variables
  const styles = createStyles(theme);

  // renders
  return (
    <>
      {title !== '' && <Text style={styles.title}>{title}</Text>}
      <View style={styles.container}>
        {data.map((item, index) => (
          <ShowcaseTile
            key={`item-${item.slug}`}
            index={index}
            theme={theme}
            isLarge={index === data.length - 1 && index % 2 === 0}
            handleOnPress={handleOnPress}
            {...item}
          />
        ))}
      </View>
    </>
  );
};

export default ShowcaseGroup;
