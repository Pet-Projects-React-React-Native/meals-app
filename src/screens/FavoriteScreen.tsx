import React, {FC} from 'react';
import {Platform, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {FavoriteScreenProps} from '../navigation/types/ScreenTypes';
import {MEALS} from '../data/dummy-data';
import {useAppSelector} from '../hooks/redux/useAppSelector';
import MealsList from '../components/MealsList/MealsList';

const FavoriteScreen: FC<FavoriteScreenProps> = (): JSX.Element => {
  const {favoriteIds} = useAppSelector(state => state.favoriteMealsSlice);
  const favoriteMeals = MEALS.filter(meal => favoriteIds.includes(meal.id));

  return (
    <SafeAreaView style={styles.screenContainer}>
      {favoriteMeals.length === 0 ? (
        <View style={styles.container}>
          <Text style={styles.text}>You have no favorites meals yet.</Text>
        </View>
      ) : (
        <MealsList data={favoriteMeals} />
      )}
    </SafeAreaView>
  );
};

export default FavoriteScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 18,
    ...Platform.select({
      android: {
        fontFamily: 'Laila-Bold',
      },
      ios: {
        fontFamily: 'Laila-Bold',
        fontWeight: '700',
      },
    }),
  },
});
