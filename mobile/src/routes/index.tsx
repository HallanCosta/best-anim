import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../pages/Home';

const AppStack = createStackNavigator();

export const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator 
        screenOptions={{ 
          headerShown: false,
        }}>
          <AppStack.Screen name="Home" component={Home} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
} 