import React, { type FC, useMemo } from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useStyles } from './styles';
import type { ShowcaseButtonProps } from './types';

export const ShowcaseButton: FC<ShowcaseButtonProps> = ({
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
