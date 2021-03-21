import React, { FC, useCallback, useMemo } from 'react';
import { FlatList, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Header } from '../header';
import { Footer } from '../footer';
import { TileGroup } from '../tileGroup';
import { useStyles } from './styles';
import type { ExampleSectionType, ExampleType } from '../../types';
import type { TileListProps } from './types';

export const TileList: FC<TileListProps> = ({
  name,
  description,
  version,
  author,
  data: _data,
}) => {
  //#region hooks
  const { navigate } = useNavigation();
  const safeInsets = useSafeAreaInsets();
  //#endregion

  //#region variables
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
  //#endregion

  //#region styles
  const styles = useStyles(safeInsets.bottom);
  //#endregion

  //#region callbacks
  const handleOnPress = useCallback((slug: string) => {
    requestAnimationFrame(() => {
      navigate(slug);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //#endregion

  //#region renders
  const renderHeader = () => {
    return <Header name={name} description={description} version={version} />;
  };
  const renderFooter = () => {
    return <Footer {...author} />;
  };
  const renderItem = ({
    item,
    index,
  }: {
    item: ExampleSectionType;
    index: number;
  }) => {
    return (
      <TileGroup
        key={`group-#${index}-${item.title}`}
        onPress={handleOnPress}
        {...item}
      />
    );
  };
  const renderSeparator = () => {
    return <View style={styles.separator} />;
  };

  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      data={data}
      stickyHeaderIndices={[0]}
      keyExtractor={item => item.title}
      renderItem={renderItem}
      ListHeaderComponent={renderHeader}
      ListFooterComponent={renderFooter}
      ItemSeparatorComponent={renderSeparator}
    />
  );
  //#endregion
};
