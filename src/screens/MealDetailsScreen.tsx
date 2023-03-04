import React, {FC, useLayoutEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Platform,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {MealDetailsScreenProps} from '../navigation/types/ScreenTypes';
import FastImage from 'react-native-fast-image';
import MealsDetails from '../components/MealDetail/MealsDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import IconButton from '../components/Buttons/IconButton';
import {useFavoriteMealsSlice} from '../redux/slices/FavoriteMealsSlice';
import {useAppDispatch} from '../hooks/redux/useAppDispatch';
import {useAppSelector} from '../hooks/redux/useAppSelector';

const MealDetailsScreen: FC<MealDetailsScreenProps> = ({
  navigation,
  route: {
    params: {
      id,
      imageUrl,
      ingredients,
      steps,
      title,
      complexity,
      affordability,
      duration,
    },
  },
}): JSX.Element => {
  const {favoriteIds} = useAppSelector(state => state.favoriteMealsSlice);
  const {addFavorite, removeFavorite} = useFavoriteMealsSlice.actions;
  const dispatch = useAppDispatch();
  const isFavorite = favoriteIds.includes(id);

  const addFavoriteHandler = () => dispatch(addFavorite(id));
  const removeFavoriteHandler = () => dispatch(removeFavorite(id));

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          name={isFavorite ? 'star' : 'star-outline'}
          size={24}
          color={'#fff'}
          onPress={isFavorite ? removeFavoriteHandler : addFavoriteHandler}
        />
      ),
    });
  });

  return (
    <SafeAreaView style={styles.screenContainer}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <FastImage
          style={styles.image}
          source={{
            uri: imageUrl,
          }}
        />
        <Text style={styles.title}>{title}</Text>
        <MealsDetails
          complexity={complexity}
          affordability={affordability}
          duration={duration}
          textStyle={styles.mealsDetailsText}
        />
        <View style={styles.listOuterContainer}>
          <View style={styles.listsContainer}>
            <Subtitle title={'Ingredient'} />
            <List listData={ingredients} />

            <Subtitle title={'Steps'} />
            <List listData={steps} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 10,
  },
  image: {
    width: '100%',
    height: 300,
  },
  title: {
    margin: 8,
    fontSize: 24,
    textAlign: 'center',
    color: '#fff',
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
  mealsDetailsText: {
    color: '#fff',
  },
  listsContainer: {
    maxWidth: '80%',
  },
  listOuterContainer: {
    alignItems: 'center',
  },
});
