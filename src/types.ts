export interface ExampleSectionType {
  title: string;
  data: ExampleType[];
}

export interface ExampleType {
  name: string;
  slug: string;
}

export type ThemeType = 'dark' | 'light';
