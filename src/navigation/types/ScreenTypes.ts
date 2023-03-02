import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamList} from './StackParamList';
import {Screen} from './Screens';
import {StackNavigationProp} from '@react-navigation/stack';

export type CategoriesScreenProps = NativeStackScreenProps<
  StackParamList,
  Screen.Categories
>;

export type MealsOverviewScreenProps = NativeStackScreenProps<
  StackParamList,
  Screen.MealsOverview
>;

export type MealDetailsScreenProps = NativeStackScreenProps<
  StackParamList,
  Screen.MealDetails
>;

export type screenDetailsNavigationType = StackNavigationProp<
  StackParamList,
  Screen.MealDetails
>;
