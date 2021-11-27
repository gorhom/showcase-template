import { useTheme as useRNTheme } from '@react-navigation/native';
import type { lightTheme } from '../theme';

export const useShowcaseTheme: () => typeof lightTheme = useRNTheme as any;
