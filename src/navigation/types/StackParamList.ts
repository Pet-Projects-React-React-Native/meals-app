import {Screen} from './Screens';
import IMeal from '../../models/IMeal';

export type StackParamList = {
  [Screen.Categories]: undefined;
  [Screen.MealsOverview]: {
    readonly categoryId: string;
  };
  [Screen.MealDetails]: Pick<
    IMeal,
    | 'imageUrl'
    | 'steps'
    | 'title'
    | 'affordability'
    | 'duration'
    | 'complexity'
    | 'ingredients'
  >;
};
