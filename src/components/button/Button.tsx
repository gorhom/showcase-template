import React, { FC, useMemo } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useStyles } from './styles';
import type { ButtonProps } from './types';

export const Button: FC<ButtonProps> = ({
  containerStyle: _providedContainerStyle,
  contentContainerStyle: _providedContentContainerStyle,
  children,
  onPress,
}) => {
  //#region styles
  const styles = useStyles();
  const containerStyle = useMemo(
    () => [styles.container, _providedContainerStyle],
    [styles.container, _providedContainerStyle]
  );
  const contentContainerStyle = useMemo(
    () => [styles.contentContainer, _providedContentContainerStyle],
    [styles.contentContainer, _providedContentContainerStyle]
  );
  //#endregion
  return (
    <TouchableOpacity style={containerStyle} onPress={onPress}>
      <View style={contentContainerStyle}>{children}</View>
    </TouchableOpacity>
  );
};
