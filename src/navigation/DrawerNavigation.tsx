import React from 'react';
import {
  createDrawerNavigator,
  DrawerNavigationOptions,
} from '@react-navigation/drawer';
import {Screen} from './types/Screens';
import CategoriesScreen from '../screens/CategoriesScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import {DrawerParamList} from './types/DrawerParamList';
import {ScreenTitles} from './types/ScreenTitles';
import {navigationStyle} from './styles/navigationStyle';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator<DrawerParamList>();

const DrawerNavigation = (): JSX.Element => {
  const defaultScreenOptions: DrawerNavigationOptions = {
    headerStyle: navigationStyle.headerStyle,
    headerTintColor: '#fff',
    headerTitleStyle: navigationStyle.headerTitleStyle,
    headerTitleAlign: 'center',
    sceneContainerStyle: navigationStyle.contentStyle,
    drawerContentStyle: navigationStyle.contentStyle,
    drawerInactiveTintColor: '#fff',
    drawerActiveTintColor: '#351401',
    drawerActiveBackgroundColor: '#e4baa1',
  };
  return (
    <Drawer.Navigator screenOptions={defaultScreenOptions}>
      <Drawer.Screen
        name={Screen.Categories}
        component={CategoriesScreen}
        options={{
          title: ScreenTitles.Categories,
          drawerIcon: ({color, size}) => (
            <Icon name={'list'} size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name={Screen.Favorite}
        component={FavoriteScreen}
        options={{
          title: ScreenTitles.Favorite,
          drawerIcon: ({color, size}) => (
            <Icon name={'star'} size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
