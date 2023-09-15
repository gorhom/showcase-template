import React, { FC, useCallback, useMemo } from 'react';
import { LayoutChangeEvent, Pressable } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { ShowcaseTile } from '../showcaseTile';
import { ShowcaseLabel } from '../showcaseLabel';
import { useStyles } from './styles';
import type { ShowcaseTileGroupProps } from './types';
import { ShowcaseAccordionIndicator } from './AccordionIndicator';

export const ShowcaseTileGroup: FC<ShowcaseTileGroupProps> = ({
  title,
  data,
  collapsed: _collapsed = false,
  collapsible: _collapsible = true,
  onPress,
}) => {
  //#region state
  const initialHeight = useSharedValue<number>(-1);
  const visibility = useSharedValue<boolean>(!_collapsed);
  const visibilityIndex = useSharedValue<number>(!_collapsed ? 1 : 0);
  //#endregion

  //#region callbacks
  const handleHeaderPress = useCallback(() => {
    let nextVisibility = !visibility.value;
    visibility.value = nextVisibility;
    visibilityIndex.value = withSpring(nextVisibility ? 1 : 0, {
      mass: 1,
      damping: 50,
      stiffness: 200,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 2,
    });
  }, [visibility, visibilityIndex]);
  const handleContainerLayout = useCallback(
    ({
      nativeEvent: {
        layout: { height },
      },
    }: LayoutChangeEvent) => {
      if (initialHeight.value !== -1) {
        return;
      }
      initialHeight.value = height;
    },
    [initialHeight]
  );
  //#endregion

  //#region variables
  const collapsible = useMemo(
    () => _collapsed || _collapsible,
    [_collapsed, _collapsible]
  );
  //#endregion

  //#region styles
  const styles = useStyles();
  const containerStyle = useAnimatedStyle(() => {
    let height;
    if (initialHeight.value !== -1) {
      height = interpolate(
        visibilityIndex.value,
        [0, 1],
        [0, initialHeight.value]
      );
    }
    return {
      ...styles.container,
      height: height,
    };
  }, [visibilityIndex, initialHeight]);
  //#endregion

  // renders
  const renderTitle =
    title !== '' ? (
      <ShowcaseLabel style={styles.title}>{title}</ShowcaseLabel>
    ) : null;
  return (
    <>
      {collapsible ? (
        <Pressable style={styles.header} onPress={handleHeaderPress}>
          {renderTitle}
          {collapsible ? (
            <ShowcaseAccordionIndicator visibility={visibilityIndex} />
          ) : null}
        </Pressable>
      ) : (
        renderTitle
      )}

      <Animated.View style={containerStyle} onLayout={handleContainerLayout}>
        {data.map((item, index) => (
          <ShowcaseTile
            key={`item-${item.slug}`}
            index={index}
            isLarge={index === data.length - 1 && index % 2 === 0}
            onPress={onPress}
            {...item}
          />
        ))}
      </Animated.View>
    </>
  );
};
