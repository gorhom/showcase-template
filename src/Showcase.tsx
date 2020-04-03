import React from 'react';
import { FlatList, SafeAreaView, StatusBar, View } from 'react-native';

import ShowcaseHeader from './components/header';
import ShowcaseFooter from './components/footer';
import ShowcaseTile from './components/tile';
import { ExampleType, ThemeType } from './types';

import { createStyles } from './styles';

interface ShowcaseProps {
  name: string;
  description: string;
  version: string;
  data: ExampleType[];
  author: {
    username: string;
    url: string;
  };
  theme: ThemeType;
  handleOnPress: (slug: string) => void;
}

const Showcase = (props: ShowcaseProps) => {
  const {
    name,
    description,
    version,
    author,
    data,
    theme = 'dark',
    handleOnPress,
  } = props;

  // variables
  const styles = createStyles(theme);
  const statusBarStyle = theme === 'dark' ? 'light-content' : 'dark-content';

  // renders
  const renderHeader = () => {
    return (
      <ShowcaseHeader
        name={name}
        description={description}
        version={version}
        theme={theme}
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
    item: ExampleType;
    index: number;
  }) => {
    return (
      <ShowcaseTile
        key={`item-${item.slug}`}
        index={index}
        handleOnPress={handleOnPress}
        {...item}
        theme={theme}
        isLastItem={index === data.length - 1}
      />
    );
  };
  const renderSeparator = () => {
    return <View style={styles.separator} />;
  };
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle={statusBarStyle} />
      <FlatList
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        data={data}
        numColumns={2}
        stickyHeaderIndices={[0]}
        keyExtractor={(item) => item.slug}
        renderItem={renderItem}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
        ItemSeparatorComponent={renderSeparator}
      />
    </SafeAreaView>
  );
};

export default Showcase;
