import {Screen} from './Screens';
import IMeal from '../../models/IMeal';

export type MainStackParamList = {
  [Screen.Drawer]: undefined;
  [Screen.MealsOverview]: {
    readonly categoryId: string;
  };
  [Screen.MealDetails]: Pick<
    IMeal,
    | 'id'
    | 'imageUrl'
    | 'steps'
    | 'title'
    | 'affordability'
    | 'duration'
    | 'complexity'
    | 'ingredients'
  >;
};
