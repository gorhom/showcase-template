import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export interface ShowcaseExampleType {
  name: string;
  title?: string;
  slug: string;
}

export interface ShowcaseExampleSectionType {
  title: string;
  data: ShowcaseExampleType[];
  collapsible?: boolean;
  collapsed?: boolean;
}

export interface ShowcaseExampleScreenType extends ShowcaseExampleType {
  getScreen: () => React.ComponentType<any>;
  screenOptions?: StackNavigationOptions;
}

export interface ShowcaseExampleScreenSectionType
  extends ShowcaseExampleSectionType {
  data: ShowcaseExampleScreenType[];
}

export type ShowcaseExampleScreenProps = {
  navigation: NativeStackNavigationProp<{}, '', ''>;
  route: {
    key: string;
    name: string;
    params: ShowcaseExampleType;
  };
};
