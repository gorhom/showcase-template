import React, { FC } from 'react';
import { View, TouchableOpacity, Linking } from 'react-native';
import { Label } from '../label';
import { useStyles } from './styles';
import type { FooterProps } from './types';

export const Footer: FC<FooterProps> = ({ username, url = '' }) => {
  // variables
  const styles = useStyles();

  //#region callbacks
  const handleOnPress = () => {
    Linking.canOpenURL(url)
      .then((canOpen) => {
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
        <Label style={styles.footer}>
          created by <Label style={styles.username}>{username}</Label>
        </Label>
      </TouchableOpacity>
    </View>
  );
};
