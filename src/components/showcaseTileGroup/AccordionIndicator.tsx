import React, { memo } from 'react';
import { View } from 'react-native';
import Animated, {
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { useAccordionIndicatorStyles } from './styles';

interface ShowcaseAccordionIndicatorProps {
  visibility: SharedValue<number>;
}

function toRad(value: number) {
  'worklet';
  return (value * Math.PI) / 180;
}

function ShowcaseAccordionIndicatorComponent({
  visibility,
}: ShowcaseAccordionIndicatorProps) {
  //#region styles
  const styles = useAccordionIndicatorStyles();
  const verticalLine = useAnimatedStyle(() => {
    const rotation = interpolate(
      visibility.value,
      [0, 1],
      [toRad(0), toRad(90)]
    );
    return {
      ...styles.line,
      transform: [{ rotate: `${rotation}rad` }],
    };
  }, [styles.line, visibility]);
  const horizontalLine = useAnimatedStyle(() => {
    const rotation = interpolate(
      visibility.value,
      [0, 1],
      [toRad(90), toRad(270)]
    );
    return {
      ...styles.line,
      opacity: interpolate(visibility.value, [0, 1], [1, 0]),
      transform: [{ rotate: `${rotation}rad` }],
    };
  }, [styles.line, visibility]);
  //#endregion

  return (
    <View style={styles.container}>
      <Animated.View style={verticalLine} />
      <Animated.View style={horizontalLine} />
    </View>
  );
}

export const ShowcaseAccordionIndicator = memo(
  ShowcaseAccordionIndicatorComponent
);
