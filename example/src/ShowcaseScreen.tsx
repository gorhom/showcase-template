import React from 'react';
import {
  ShowcaseApp,
  ShowcaseExampleScreenSectionType,
  ShowcaseExampleScreenType,
} from '@gorhom/showcase-template';
import { DemoScreen } from './DemoScreen';

const data: Array<ShowcaseExampleScreenSectionType | ShowcaseExampleScreenType> = [
  {
    name: 'Featured',
    slug: 'featured',
    title: 'Featured',
    getScreen: () => DemoScreen,
  },
  {
    title: 'Group 1',
    collapsible: false,
    data: [
      {
        name: 'Default',
        slug: 'default',
        title: 'Group 1 : Default',
        getScreen: () => DemoScreen,
      },
      {
        name: 'Example A',
        slug: 'example-a',
        getScreen: () => DemoScreen,
      },
      {
        name: 'Example B',
        slug: 'example-b',
        getScreen: () => DemoScreen,
      },
    ],
  },
  {
    title: 'Group 2',
    data: [
      {
        name: 'Example C',
        slug: 'example-c',
        getScreen: () => DemoScreen,
      },
      {
        name: 'Example D',
        slug: 'example-d',
        getScreen: () => DemoScreen,
      },
    ],
  },
  {
    title: 'Group 3',
    collapsed: true,
    data: [
      {
        name: 'Example E',
        slug: 'example-e',
        getScreen: () => DemoScreen,
      },
      {
        name: 'Example F',
        slug: 'example-f',
        getScreen: () => DemoScreen,
      },
      {
        name: 'Example G',
        slug: 'example-g',
        getScreen: () => DemoScreen,
      },
      {
        name: 'Example H Example H',
        slug: 'example-h',
        getScreen: () => DemoScreen,
      },
      {
        name: 'Example I',
        slug: 'example-i',
        getScreen: () => DemoScreen,
      },
    ],
  },
];

export const ShowcaseScreen = () => {
  return (
    <ShowcaseApp
      version="0.0.0"
      name="Awesome Library"
      description="It can do anything 🤯"
      author={{
        username: '@gorhom',
        url: 'https://twitter.com/gorhom',
      }}
      data={data}
    />
  );
};
