<div align="center">
<h1>Showcase Template</h1>

[![npm](https://badgen.net/npm/v/@gorhom/showcase-template)](https://www.npmjs.com/package/@gorhom/showcase-template) [![npm](https://badgen.net/npm/license/@gorhom/showcase-template)](https://www.npmjs.com/package/@gorhom/showcase-template) [![npm](https://badgen.net/npm/types/@gorhom/showcase-template)](https://www.npmjs.com/package/@gorhom/showcase-template) [![runs with expo](https://img.shields.io/badge/Runs%20with%20Expo-4630EB.svg?style=flat-square&logo=EXPO&labelColor=f3f3f3&logoColor=000)](https://expo.io/)

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

const DemoScreen = () => (
  <View>
    <ShowcaseLabel>Demo Screen</ShowcaseLabel>
  </View>
);

const data = [
  {
    title: 'Group 1',
    data: [
      {
        name: 'Default',
        slug: 'default',
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
];

export default function App() {
  return (
    <Showcase
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
}
```

## Built With ❤️

- [@react-native-community/bob](https://github.com/react-native-community/bob)

## Author

- [Mo Gorhom](https://twitter.com/gorhom)

## License

[MIT](./LICENSE)

---

<p align="center">
<a href="https://gorhom.dev" target="_blank"><img height="18" alt="Mo Gorhom" src="./logo.png"></a>
</p>
