import React, { FC, useMemo } from 'react';
import { Text } from 'react-native';
import { useStyles } from './styles';
import { LabelProps } from './types';

export const Label: FC<LabelProps> = ({ children, style }) => {
  //#region styles
  const styles = useStyles();
  const textStyle = useMemo(() => [styles.text, style], [styles.text, style]);
  //#endregion
  return <Text style={textStyle}>{children}</Text>;
};
