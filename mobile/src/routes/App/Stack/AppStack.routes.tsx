import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeTabRoutes } from '../Tabs/Home';
import { AnimeDetails } from '../../../pages/AnimeDetails';

export const AppRoutes: React.FC = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <NavigationContainer>
      <Navigator 
        screenOptions={{ 
          headerShown: false,
        }}>
          <Screen 
            name="HomeTabRoutes" 
            component={HomeTabRoutes}
          />
          <Screen 
            name="AnimeDetails"
            component={AnimeDetails}
          />
        </Navigator>
    </NavigationContainer>
  );
}