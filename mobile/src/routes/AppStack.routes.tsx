import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeTabRoutes } from './HomeTabs.routes';
import { AnimeDetails } from '../pages/AnimeDetails';
import { AnimesGenre } from '../pages/AnimesGenre';
import { EpisodeDetails } from '../pages/EpisodeDetails';
import { PlayEpisode } from '../pages/PlayEpisode';
import { SearchAnime } from '../pages/SearchAnime';

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
            name="AnimesGenre"
            component={AnimesGenre}
          />
          <Screen
            name="EpisodeDetails"
            component={EpisodeDetails}
          />
          <Screen
            name="PlayEpisode"
            component={PlayEpisode}
          />
          <Screen 
            name="SearchAnime"
            component={SearchAnime}
          />
        </Navigator>
    </NavigationContainer>
  );
}