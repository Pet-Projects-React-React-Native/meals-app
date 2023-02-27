import {Screen} from './Screens';

export type StackParamList = {
  [Screen.Categories]: undefined;
  [Screen.MealsOverview]: {
    categoryId: string;
  };
};
