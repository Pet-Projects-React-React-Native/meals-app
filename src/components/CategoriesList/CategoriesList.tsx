import React, {FC} from 'react';
import {CATEGORIES} from '../../data/dummy-data';
import {FlatList, ListRenderItem, StyleSheet, View} from 'react-native';
import ICategory from '../../models/ICategory';
import {Screen} from '../../navigation/types/Screens';
import CategoryItem from './CategoryItem';
import {useNavigation} from '@react-navigation/native';
import {screenCategoriesNavigationType} from '../../navigation/types/ScreenTypes';

const CategoriesList: FC = (): JSX.Element => {
  const navigation = useNavigation<screenCategoriesNavigationType>();
  const keyExtractorHandler = (item: ICategory): string => item.id;
  const renderCategoryItem: ListRenderItem<ICategory> = ({
    item: {title, id, color},
  }): JSX.Element => {
    const pressHandler = (): void => {
      navigation.navigate(Screen.MealsOverview, {
        categoryId: id,
      });
    };

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
    <View style={styles.container}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={keyExtractorHandler}
        renderItem={renderCategoryItem}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default CategoriesList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
