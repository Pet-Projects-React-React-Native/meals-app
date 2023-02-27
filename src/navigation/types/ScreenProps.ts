import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamList} from './StackParamList';
import {Screen} from './Screens';

export type CategoriesScreenProps = NativeStackScreenProps<
  StackParamList,
  Screen.Categories
>;

export type MealsOverviewScreenProps = NativeStackScreenProps<
  StackParamList,
  Screen.MealsOverview
>;
