import React, {FC, useLayoutEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  ListRenderItem,
  View,
} from 'react-native';
import {MealsOverviewScreenProps} from '../navigation/types/ScreenTypes';
import {CATEGORIES, MEALS} from '../data/dummy-data';
import IMeal from '../models/IMeal';
import MealItem from '../components/MealItem';
import ICategory from '../models/ICategory';

const MealsOverviewScreen: FC<MealsOverviewScreenProps> = ({
  route: {
    params: {categoryId},
  },
  navigation,
}): JSX.Element => {
  const displayedMeals = MEALS.filter(meal =>
    meal.categoryIds.includes(categoryId),
  );
  const categoryTitle = CATEGORIES.find(
    (category: ICategory) => category.id === categoryId,
  )?.title;

  const keyExtractorHandler = ({id}: IMeal): string => id;
  const renderMealItemHandler: ListRenderItem<IMeal> = ({
    item: MealItemProps,
  }): JSX.Element => <MealItem key={MealItemProps.id} {...MealItemProps} />;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryTitle, navigation]);

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.container}>
        <FlatList
          data={displayedMeals}
          renderItem={renderMealItemHandler}
          keyExtractor={keyExtractorHandler}
          showsVerticalScrollIndicator={false}
          alwaysBounceVertical={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
});
