import React from 'react';
import { Alert } from 'react-native';
import Showcase from '@gorhom/showcase-template';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const data = [
  {
    title: 'Group 1',
    data: [
      {
        name: 'Default',
        slug: 'default',
      },
      {
        name: 'Example A',
        slug: 'example-a',
      },
      {
        name: 'Example B',
        slug: 'example-b',
      },
    ],
  },
  {
    title: 'Group 2',
    data: [
      {
        name: 'Example C',
        slug: 'example-c',
      },
      {
        name: 'Example D',
        slug: 'example-d',
      },
    ],
  },
  {
    title: 'Group 3',
    data: [
      {
        name: 'Example E',
        slug: 'example-e',
      },
      {
        name: 'Example F',
        slug: 'example-f',
      },
      {
        name: 'Example G',
        slug: 'example-g',
      },
      {
        name: 'Example H Example H',
        slug: 'example-h',
      },
      {
        name: 'Example I',
        slug: 'example-i',
      },
    ],
  },
];

const ExampleScreen = () => {
  //
  const safeInsets = useSafeAreaInsets();

  // callbacks
  const handleOnPress = (slug: string) => Alert.alert('Example Selected', slug);

  //render
  return (
    <Showcase
      theme="dark"
      version="0.0.0"
      name="Awesome Library"
      description="It can do anything 🤯"
      author={{
        username: '@gorhom',
        url: 'https://twitter.com/gorhom',
      }}
      data={data}
      safeInsets={safeInsets}
      handleOnPress={handleOnPress}
    />
  );
};

export default ExampleScreen;
