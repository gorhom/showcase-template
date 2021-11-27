import React, { FC, ReactNode, useMemo, useRef } from 'react';
import { StatusBar, useColorScheme, View } from 'react-native';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ShowcaseTileList } from '../showcaseTileList';
import { TileDimensionsProvider } from '../../providers';
import { darkTheme, lightTheme } from '../../theme';
import type { ShowcaseAppProps } from './types';
import { ShowcaseExampleScreenType } from 'src/types';
import { styles } from './styles';

const Stack = createStackNavigator();

const ShowcaseAppComponent: FC<ShowcaseAppProps> = ({
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
      data.reduce<ShowcaseExampleScreenType[]>((result, item) => {
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
            {() => <ShowcaseTileList data={data} {...rest} />}
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

export const ShowcaseApp: FC<ShowcaseAppProps & { children?: ReactNode }> = ({
  children,
  ...props
}) => (
  <View style={styles.container}>
    <TileDimensionsProvider>
      <ShowcaseAppComponent {...props} />
    </TileDimensionsProvider>
    {children}
  </View>
);
