import React from 'react';
import {
  NavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import {RootStack} from './root-navigation';

const navigationRef = React.createRef<NavigationContainerRef>();

export const AppContainer = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack />
    </NavigationContainer>
  );
};
