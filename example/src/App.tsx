import React from 'react';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import ExampleScreen from './ExampleScreen';

const App = () => (
  <SafeAreaProvider initialMetrics={initialWindowMetrics}>
    <ExampleScreen />
  </SafeAreaProvider>
);

export default App;
