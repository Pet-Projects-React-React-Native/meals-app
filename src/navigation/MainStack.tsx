import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {MainStackParamList} from './types/MainStackParamList';
import MealsOverviewScreen from '../screens/MealsOverviewScreen';
import {Screen} from './types/Screens';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import DrawerNavigation from './DrawerNavigation';
import {ScreenTitles} from './types/ScreenTitles';
import {navigationStyle} from './styles/navigationStyle';

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainStack = (): JSX.Element => {
  const defaultScreenOptions: NativeStackNavigationOptions = {
    headerStyle: navigationStyle.headerStyle,
    headerTintColor: '#fff',
    contentStyle: navigationStyle.contentStyle,
    headerTitleStyle: navigationStyle.headerTitleStyle,
    headerTitleAlign: 'center',
  };

  return (
    <Stack.Navigator
      initialRouteName={Screen.Drawer}
      screenOptions={defaultScreenOptions}>
      <Stack.Screen
        name={Screen.Drawer}
        component={DrawerNavigation}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={Screen.MealsOverview}
        component={MealsOverviewScreen}
        options={{
          title: ScreenTitles.MealsOverview,
        }}
      />
      <Stack.Screen
        name={Screen.MealDetails}
        component={MealDetailsScreen}
        options={{
          title: ScreenTitles.MealDetails,
        }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
