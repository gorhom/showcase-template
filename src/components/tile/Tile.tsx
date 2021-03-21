import React, { FC, useCallback } from 'react';
import { Button } from '../button';
import { Label } from '../label';
import { useStyles } from './styles';
import type { TileProps } from './types';

export const Tile: FC<TileProps> = ({ name, slug, isLarge, onPress }) => {
  //#region styles
  const styles = useStyles(isLarge);
  //#endregion

  //#region callbacks
  const handleOnPress = useCallback(() => onPress(slug), [slug, onPress]);
  //#endregion

  // renders
  return (
    <Button onPress={handleOnPress} containerStyle={styles.touchable}>
      <Label style={styles.label}>{name}</Label>
    </Button>
  );
};
