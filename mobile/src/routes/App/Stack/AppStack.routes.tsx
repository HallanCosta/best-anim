import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import { Home } from '../../../pages/Home';
import { HomeRoutes } from '../Tabs/Home';
// import { HomeMaterialTabs } from '../Tabs/Home/MaterialTopTab.routes';

export const AppRoutes: React.FC = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <NavigationContainer>
      <Navigator 
        screenOptions={{ 
          headerShown: false,
        }}>
          <Screen 
            name="HomeRoutes" 
            component={HomeRoutes}
          />
        </Navigator>
    </NavigationContainer>
  );
}