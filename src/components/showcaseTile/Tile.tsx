import React, { FC, useCallback } from 'react';
import { ShowcaseButton } from '../showcaseButton';
import { ShowcaseLabel } from '../showcaseLabel';
import { useStyles } from './styles';
import type { ShowcaseTileProps } from './types';

export const ShowcaseTile: FC<ShowcaseTileProps> = ({
  name,
  slug,
  isLarge,
  onPress,
}) => {
  //#region styles
  const styles = useStyles(isLarge);
  //#endregion

  //#region callbacks
  const handleOnPress = useCallback(() => onPress(slug), [slug, onPress]);
  //#endregion

  // renders
  return (
    <ShowcaseButton onPress={handleOnPress} containerStyle={styles.touchable}>
      <ShowcaseLabel style={styles.label}>{name}</ShowcaseLabel>
    </ShowcaseButton>
  );
};
