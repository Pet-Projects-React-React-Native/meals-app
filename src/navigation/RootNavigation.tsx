import React from 'react';
import RootStack from './RootStack';
import {NavigationContainer} from '@react-navigation/native';

const RootNavigation = (): JSX.Element => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};

export default RootNavigation;
