import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeTabRoutes } from '../Tabs/Home';
import { AnimeDetails } from '../../../pages/AnimeDetails';
import { EpisodeDetails } from '../../../pages/EpisodeDetails';
import { PlayEpisode } from '../../../pages/PlayEpisode';

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
          <Screen
            name="EpisodeDetails"
            component={EpisodeDetails}
          />
          <Screen
            name="PlayEpisode"
            component={PlayEpisode}
          />
        </Navigator>
    </NavigationContainer>
  );
}