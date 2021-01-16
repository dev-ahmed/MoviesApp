import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, MovieDetails} from '../components/';
import {ROUTES} from '../constants/routes';

type RootStackParamList = {
  Home: undefined;
  MovieDetails: undefined;
};

const RootStackNav = createStackNavigator<RootStackParamList>();

export const RootStack: React.FC = () => {
  return (
    <RootStackNav.Navigator initialRouteName="Home">
      <RootStackNav.Screen name={ROUTES.Home} component={Home} />
      <RootStackNav.Screen
        name={ROUTES.MovieDetails}
        component={MovieDetails}
      />
    </RootStackNav.Navigator>
  );
};
