import React, {FC} from 'react';
import {Text, SafeAreaView, StyleSheet} from 'react-native';
import {MealsOverviewScreenProps} from '../navigation/types/ScreenProps';
import {MEALS} from '../data/dummy-data';

const MealsOverviewScreen: FC<MealsOverviewScreenProps> = ({
  route: {
    params: {categoryId},
  },
}): JSX.Element => {
  const displayedMeals = MEALS.filter(meal =>
    meal.categoryIds.includes(categoryId),
  );

  console.log(displayedMeals);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Meals overview screen - {categoryId}</Text>
    </SafeAreaView>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
