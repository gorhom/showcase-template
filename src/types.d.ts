export interface ShowcaseExampleType {
  name: string;
  slug: string;
}

export interface ShowcaseExampleSectionType {
  title: string;
  data: ShowcaseExampleType[];
}

export interface ShowcaseExampleScreenType extends ShowcaseExampleType {
  getScreen: () => React.ComponentType<any>;
  screenOptions?: StackNavigationOptions;
}

export interface ShowcaseExampleScreenSectionType
  extends ShowcaseExampleSectionType {
  data: ShowcaseExampleScreenType[];
}
