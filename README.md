<div align="center">
<h1>Showcase Template</h1>

[![npm](https://badgen.net/npm/v/@gorhom/showcase-template)](https://www.npmjs.com/package/@gorhom/showcase-template) [![npm](https://badgen.net/npm/license/@gorhom/showcase-template)](https://www.npmjs.com/package/@gorhom/showcase-template) [![npm](https://badgen.net/npm/types/@gorhom/showcase-template)](https://www.npmjs.com/package/@gorhom/showcase-template)

<img src="./preview.png">

A React Native template that helps developers to showcase their amazing libraries examples.

</div>

---

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
```

## Built With ❤️

- [@react-native-community/bob](https://github.com/react-native-community/bob)

## Author

- [Mo Gorhom](https://twitter.com/gorhom)

## License

MIT

---

<p align="center">
<a href="https://twitter.com/gorhom"><img src="./logo.png"></a>
</p>
