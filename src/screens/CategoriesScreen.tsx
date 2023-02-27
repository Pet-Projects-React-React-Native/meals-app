import React from 'react';
import {
  View,
  FlatList,
  ListRenderItem,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import ICategory from '../models/ICategory';
import CategoryItem from '../components/CategoryItem';

const CategoriesScreen = (): JSX.Element => {
  const keyExtractorHandler = (item: ICategory): string => item.id;
  const renderCategoryItem: ListRenderItem<ICategory> = ({
    item: {title, id, color},
  }): JSX.Element => (
    <CategoryItem key={id} id={id} title={title} color={color} />
  );

  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={keyExtractorHandler}
        renderItem={renderCategoryItem}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
