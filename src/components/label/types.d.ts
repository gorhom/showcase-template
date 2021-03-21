import type { ReactNode } from 'react';
import type { TextStyle } from 'react-native';

export interface LabelProps {
  children: string | ReactNode;
  style: TextStyle;
}
