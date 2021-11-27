import type { ReactNode } from 'react';
import type { ViewStyle } from 'react-native';

export interface ShowcaseButtonProps {
  children?: ReactNode;
  containerStyle?: ViewStyle;
  contentContainerStyle?: ViewStyle;
  onPress: () => void;
}
