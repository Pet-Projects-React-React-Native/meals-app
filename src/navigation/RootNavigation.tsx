import React from 'react';
import MainStack from './MainStack';
import {NavigationContainer} from '@react-navigation/native';

const RootNavigation = (): JSX.Element => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default RootNavigation;
