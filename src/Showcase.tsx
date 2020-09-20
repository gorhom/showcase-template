import React, { useMemo } from 'react';
import { FlatList, Insets, StatusBar, View } from 'react-native';

import ShowcaseHeader from './components/header';
import ShowcaseFooter from './components/footer';
import ShowcaseGroup from './components/group';

import { ExampleSectionType, ExampleType, ThemeType } from './types';
import { createStyles } from './styles';

interface ShowcaseProps {
  name: string;
  description: string;
  version: string;
  data: Array<ExampleSectionType | ExampleType>;
  author: {
    username: string;
    url: string;
  };
  theme?: ThemeType;
  safeInsets?: Insets;
  handleOnPress: (slug: string) => void;
}

export const isSectioned = (data: any): data is ExampleSectionType =>
  data.title !== undefined;

const Showcase = (props: ShowcaseProps) => {
  const {
    name,
    description,
    version,
    author,
    data: _data,
    theme = 'dark',
    safeInsets,
    handleOnPress,
  } = props;

  // variables
  const styles = useMemo(() => createStyles(theme, safeInsets), [
    theme,
    safeInsets,
  ]);
  const statusBarStyle = useMemo(
    () => (theme === 'dark' ? 'light-content' : 'dark-content'),
    [theme]
  );
  const data: Array<ExampleSectionType> = useMemo(() => {
    // @ts-ignore
    if (_data.length > 0 && _data[0].title === undefined) {
      return [
        {
          title: '',
          data: _data as Array<ExampleType>,
        },
      ];
    } else {
      return _data as Array<ExampleSectionType>;
    }
  }, [_data]);

  // renders
  const renderHeader = () => {
    return (
      <ShowcaseHeader
        name={name}
        description={description}
        version={version}
        theme={theme}
        safeInsets={safeInsets}
      />
    );
  };
  const renderFooter = () => {
    return <ShowcaseFooter {...author} theme={theme} />;
  };
  const renderItem = ({
    item,
    index,
  }: {
    item: ExampleSectionType;
    index: number;
  }) => {
    return (
      <ShowcaseGroup
        key={`group-#${index}-${item.title}`}
        theme={theme}
        handleOnPress={handleOnPress}
        {...item}
      />
    );
  };
  const renderSeparator = () => {
    return <View style={styles.separator} />;
  };

  return (
    <>
      <StatusBar barStyle={statusBarStyle} />
      <FlatList
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        data={data}
        stickyHeaderIndices={[0]}
        keyExtractor={(item) => item.title}
        renderItem={renderItem}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
        ItemSeparatorComponent={renderSeparator}
      />
    </>
  );
};

export default Showcase;
