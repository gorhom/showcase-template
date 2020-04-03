# Showcase Template [![npm](https://badgen.net/npm/v/@gorhom/showcase-template)](https://www.npmjs.com/package/@gorhom/showcase-template)

A template that helps developers to showcase their's amazing libraries examples.

<p align="center">
<img src="./preview.png">
</p>

## Installation

```sh
yarn add @gorhom/showcase-template
# or
npm install @gorhom/showcase-template
```

## Usage

```jsx
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
```

## Built With ❤️

- [@react-native-community/bob](https://github.com/react-native-community/bob)

## Author

- [Mo Gorhom](https://twitter.com/gorhom)

## License

MIT
