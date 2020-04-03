import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import { ThemeType } from '../../types';
import { createStyles } from './styles';

interface ShowcaseFooterProps {
  username: string;
  url: string;
  theme: ThemeType;
}

const ShowcaseFooter = (props: ShowcaseFooterProps) => {
  // props
  const { username, url = '', theme } = props;

  // variables
  const styles = createStyles(theme);

  // callbacks
  const handleOnPress = () => {
    Linking.canOpenURL(url)
      .then((canOpen) => {
        if (canOpen) {
          Linking.openURL(url);
        }
      })
      .catch(() => {});
  };
  // renders
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleOnPress}>
        <Text style={styles.name}>{`created by ${username}`}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ShowcaseFooter;
