import React, { FC } from 'react';
import { View, TouchableOpacity, Linking } from 'react-native';
import { ShowcaseLabel } from '../showcaseLabel';
import { useStyles } from './styles';
import type { ShowcaseFooterProps } from './types';

export const ShowcaseFooter: FC<ShowcaseFooterProps> = ({
  username,
  url = '',
}) => {
  // variables
  const styles = useStyles();

  //#region callbacks
  const handleOnPress = () => {
    Linking.canOpenURL(url)
      .then(canOpen => {
        if (canOpen) {
          Linking.openURL(url);
        }
      })
      .catch(() => {});
  };
  //#endregion

  // renders
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleOnPress}>
        <ShowcaseLabel style={styles.footer}>
          created by{' '}
          <ShowcaseLabel style={styles.username}>{username}</ShowcaseLabel>
        </ShowcaseLabel>
      </TouchableOpacity>
    </View>
  );
};
