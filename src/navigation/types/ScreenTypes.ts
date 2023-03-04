import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainStackParamList} from './MainStackParamList';
import {Screen} from './Screens';
import {StackNavigationProp} from '@react-navigation/stack';
import {DrawerParamList} from './DrawerParamList';

export type CategoriesScreenProps = NativeStackScreenProps<
  DrawerParamList,
  Screen.Categories
>;

export type FavoriteScreenProps = NativeStackScreenProps<
  DrawerParamList,
  Screen.Favorite
>;

export type MealsOverviewScreenProps = NativeStackScreenProps<
  MainStackParamList,
  Screen.MealsOverview
>;

export type MealDetailsScreenProps = NativeStackScreenProps<
  MainStackParamList,
  Screen.MealDetails
>;

export type screenDetailsNavigationType = StackNavigationProp<
  MainStackParamList,
  Screen.MealDetails
>;
