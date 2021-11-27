import type { ReactNode } from 'react';
import type { TextStyle } from 'react-native';

export interface ShowcaseLabelProps {
  children: string | ReactNode;
  style?: TextStyle;
}
