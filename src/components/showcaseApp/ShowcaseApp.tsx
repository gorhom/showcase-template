import React, { FC, ReactNode, useEffect, useMemo } from 'react';
import { useColorScheme, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ShowcaseTileList } from '../showcaseTileList';
import { TileDimensionsProvider } from '../../providers';
import { darkTheme, lightTheme } from '../../theme';
import type { ShowcaseAppProps } from './types';
import type { ShowcaseExampleScreenType } from '../../types';
import { styles } from './styles';

const Stack = createNativeStackNavigator();

const ShowcaseAppComponent: FC<ShowcaseAppProps> = ({
  initialScreen = 'showcase',
  data,
  ...rest
}) => {
  //#region hooks
  const colorScheme = useColorScheme();
  //#endregion

  //#region variables
  const theme = useMemo(
    () => (colorScheme === 'dark' ? darkTheme : lightTheme),
    [colorScheme]
  );
  const screens = useMemo(
    () =>
      data.reduce<ShowcaseExampleScreenType[]>((result, item) => {
        if ('name' in item) {
          result.push(item as ShowcaseExampleScreenType);
          return result
        }

        result.push(...item.data);
        return result;
      }, []),
    [data]
  );
  //#endregion

  //#region effects
  useEffect(() => {
    StatusBar.setBarStyle(
      colorScheme === 'dark' ? 'light-content' : 'dark-content',
      true
    );
  }, [colorScheme]);
  //#endregion
  return (
    <NavigationContainer theme={theme}>
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
              title: item.title ?? item.name,
              headerShown: true,
              ...item.screenOptions,
            }}
            initialParams={{
              name: item.name,
              slug: item.slug,
              title: item.title,
            }}
            getComponent={item.getScreen}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
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
