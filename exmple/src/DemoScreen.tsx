import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ShowcaseLabel } from '@gorhom/showcase-template';
import { useRoute } from '@react-navigation/core';

export const DemoScreen = () => {
  const { name } = useRoute();
  return (
    <View style={styles.container}>
      <ShowcaseLabel style={styles.text}>{name}</ShowcaseLabel>
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
