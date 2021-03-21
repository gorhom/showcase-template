import React from 'react';
import { Alert, View } from 'react-native';
import { ShowcaseApp } from '@gorhom/showcase-template';

const Screen = () => {
  return <View></View>;
};

const data = [
  {
    title: 'Group 1',
    data: [
      {
        name: 'Default',
        slug: 'default',
        getScreen: () => Screen,
      },
      {
        name: 'Example A',
        slug: 'example-a',
        getScreen: () => Screen,
      },
      {
        name: 'Example B',
        slug: 'example-b',
        getScreen: () => Screen,
      },
    ],
  },
  {
    title: 'Group 2',
    data: [
      {
        name: 'Example C',
        slug: 'example-c',
        getScreen: () => Screen,
      },
      {
        name: 'Example D',
        slug: 'example-d',
        getScreen: () => Screen,
      },
    ],
  },
  {
    title: 'Group 3',
    data: [
      {
        name: 'Example E',
        slug: 'example-e',
        getScreen: () => Screen,
      },
      {
        name: 'Example F',
        slug: 'example-f',
        getScreen: () => Screen,
      },
      {
        name: 'Example G',
        slug: 'example-g',
        getScreen: () => Screen,
      },
      {
        name: 'Example H Example H',
        slug: 'example-h',
        getScreen: () => Screen,
      },
      {
        name: 'Example I',
        slug: 'example-i',
        getScreen: () => Screen,
      },
    ],
  },
];

const App = () => {
  // callbacks
  const handleOnPress = (slug: string) => Alert.alert('Example Selected', slug);
  return (
    <ShowcaseApp
      theme="dark"
      version="0.0.0"
      name="Awesome Library"
      description="It can do anything 🤯"
      author={{
        username: '@gorhom',
        url: 'https://twitter.com/gorhom',
      }}
      data={data}
      handleOnPress={handleOnPress}
    />
  );
};

export default App;
