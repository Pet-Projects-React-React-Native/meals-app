import React, {FC, useLayoutEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {MealsOverviewScreenProps} from '../navigation/types/ScreenTypes';
import {CATEGORIES, MEALS} from '../data/dummy-data';
import ICategory from '../models/ICategory';
import MealsList from '../components/MealsList/MealsList';

const MealsOverviewScreen: FC<MealsOverviewScreenProps> = ({
  route: {
    params: {categoryId},
  },
  navigation,
}): JSX.Element => {
  const categoryTitle = CATEGORIES.find(
    (category: ICategory) => category.id === categoryId,
  )?.title;

  const displayedMeals = MEALS.filter(meal =>
    meal.categoryIds.includes(categoryId),
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryTitle, navigation]);

  return (
    <SafeAreaView style={styles.screenContainer}>
      <MealsList data={displayedMeals} />
    </SafeAreaView>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
});
