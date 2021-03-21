import { useTheme as useRNTheme } from '@react-navigation/native';
import type { lightTheme } from './light';

export const useTheme: () => typeof lightTheme = useRNTheme as any;
