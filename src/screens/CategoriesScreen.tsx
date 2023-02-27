import React, {FC} from 'react';
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
import {CategoriesScreenProps} from '../navigation/types/ScreenProps';
import {Screen} from '../navigation/types/Screens';

const CategoriesScreen: FC<CategoriesScreenProps> = ({
  navigation,
}): JSX.Element => {
  const keyExtractorHandler = (item: ICategory): string => item.id;
  const renderCategoryItem: ListRenderItem<ICategory> = ({
    item: {title, id, color},
  }): JSX.Element => {
    const pressHandler = () =>
      navigation.navigate(Screen.MealsOverview, {
        categoryId: id,
      });

    return (
      <CategoryItem
        key={id}
        id={id}
        title={title}
        color={color}
        onPress={pressHandler}
      />
    );
  };

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
