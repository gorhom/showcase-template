import React from 'react';
import { Alert } from 'react-native';
import Showcase from '@gorhom/showcase-template';

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
];

export default function App() {
  const handleOnPress = (slug: string) => Alert.alert('Example Selected', slug);
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
      handleOnPress={handleOnPress}
    />
  );
}
