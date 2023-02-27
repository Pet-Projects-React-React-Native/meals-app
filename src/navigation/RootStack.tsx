import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackParamList} from './types/StackParamList';
import CategoriesScreen from '../screens/CategoriesScreen';
import MealsOverviewScreen from '../screens/MealsOverviewScreen';
import {Screen} from './types/Screens';

const Stack = createNativeStackNavigator<StackParamList>();

const RootStack = (): JSX.Element => {
  return (
    <Stack.Navigator initialRouteName={Screen.Categories}>
      <Stack.Screen name={Screen.Categories} component={CategoriesScreen} />
      <Stack.Screen
        name={Screen.MealsOverview}
        component={MealsOverviewScreen}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
