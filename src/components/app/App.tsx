import React, { FC, useMemo, useRef } from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TileList } from '../tileList';
import { darkTheme, lightTheme } from '../../theme';
import type { AppProps, ExampleScreenType } from './types';

const Stack = createStackNavigator();

export const App: FC<AppProps> = ({
  initialScreen = 'showcase',
  data,
  ...rest
}) => {
  const navigationRef = useRef<NavigationContainerRef>(null);

  //#region hooks
  const colorScheme = useColorScheme();
  //#endregion

  //#region variables
  const statusBarStyle = useMemo(
    () => (colorScheme === 'dark' ? 'light-content' : 'dark-content'),
    [colorScheme]
  );
  const theme = useMemo(
    () => (colorScheme === 'dark' ? darkTheme : lightTheme),
    [colorScheme]
  );
  const screens = useMemo(
    () =>
      data.reduce<ExampleScreenType[]>((result, item) => {
        result.push(...item.data);
        return result;
      }, []),
    [data]
  );
  //#endregion
  return (
    <>
      <StatusBar barStyle={statusBarStyle} />
      <NavigationContainer ref={navigationRef} theme={theme}>
        <Stack.Navigator initialRouteName={initialScreen}>
          <Stack.Screen
            name="showcase"
            options={{ title: 'Main', headerShown: false }}
          >
            {() => <TileList data={data} {...rest} />}
          </Stack.Screen>

          {screens.map(item => (
            <Stack.Screen
              key={item.slug}
              name={item.slug}
              options={{
                title: item.name,
                headerShown: true,
                ...item.screenOptions,
              }}
              getComponent={item.getScreen}
            />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
