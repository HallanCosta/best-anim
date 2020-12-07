import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../../../pages/Home';
import { HomeBottomTabs } from '../Tabs/Home';

const { Navigator, Screen } = createStackNavigator();

export const AppRoutes: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator 
        screenOptions={{ 
          headerShown: false,
        }}>
          <Screen name="HomeBottomTabs" component={HomeBottomTabs} />
          {/* <Screen name="HomeAnimesTabs" component={HomeAnimesTabs} /> */}
        </Navigator>
    </NavigationContainer>
  );
} 