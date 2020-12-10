import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import { Home } from '../../../pages/Home';
import { HomeBottomTabs } from '../Tabs/Home';

export const AppRoutes: React.FC = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <NavigationContainer>
      <Navigator 
        screenOptions={{ 
          headerShown: false,
        }}>
          <Screen 
            name="HomeBottomTabs" 
            component={HomeBottomTabs}
          />
        </Navigator>
    </NavigationContainer>
  );
}