import React from 'react';
import {Platform, StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackParamList} from './types/StackParamList';
import CategoriesScreen from '../screens/CategoriesScreen';
import MealsOverviewScreen from '../screens/MealsOverviewScreen';
import {Screen} from './types/Screens';
import MealDetailsScreen from '../screens/MealDetailsScreen';

const Stack = createNativeStackNavigator<StackParamList>();

const RootStack = (): JSX.Element => {
  const defaultScreenOptions = {
    headerStyle: styles.headerStyle,
    headerTintColor: '#fff',
    contentStyle: styles.contentStyle,
    headerTitleStyle: styles.headerTitleStyle,
  };

  return (
    <Stack.Navigator
      initialRouteName={Screen.Categories}
      screenOptions={defaultScreenOptions}>
      <Stack.Screen
        name={Screen.Categories}
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
        }}
      />
      <Stack.Screen
        name={Screen.MealsOverview}
        component={MealsOverviewScreen}
      />
      <Stack.Screen
        name={Screen.MealDetails}
        component={MealDetailsScreen}
        options={{
          title: 'Meal Details',
        }}
      />
    </Stack.Navigator>
  );
};

export default RootStack;

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#351401',
    elevation: 0,
    shadowOpacity: 0,
  },
  headerTintColor: {
    color: '#fff',
  },
  contentStyle: {
    backgroundColor: '#3f2f25',
  },
  headerTitleStyle: {
    fontSize: 20,
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
