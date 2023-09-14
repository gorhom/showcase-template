import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  ShowcaseExampleScreenProps,
  ShowcaseLabel,
} from '@gorhom/showcase-template';

export const DemoScreen = (props: ShowcaseExampleScreenProps) => {
  return (
    <View style={styles.container}>
      <ShowcaseLabel style={styles.text}>
        {props.route.params.name}
      </ShowcaseLabel>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});
