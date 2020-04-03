import React from 'react';
import { Alert } from 'react-native';
import Showcase from '@gorhom/showcase-template';

const data = [
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
];
export default function App() {
  const handleOnPress = (slug: string) => Alert.alert('Example Selected', slug);
  return (
    <Showcase
      theme="light"
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
