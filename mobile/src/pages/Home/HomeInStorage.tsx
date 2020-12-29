import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { 
  Container,
  Section,
  HomeContainer,
  Main,
  TitleContent,
  Title,
  AnimesContainer,
  AnimesGenreContainer,
  EpisodesContainer,
} from './styles';

import { HomeHeader } from '../../components/HomeHeader'; 
import { TGenre, GenreButtons } from '../../components/GenreButtons';
import { TAnime } from '../../components/Anime';
import { TEpisode } from '../../components/Episode';

const HomeInStorage = () => {

  const [genres, setGenres] = useState<TGenre[]>([]);
  const [animesRecents, setAnimesRecents] = useState<TAnime[]>([]);
  const [episodes, setEpisodes] = useState<TEpisode[]>([]);
  const [animesList, setAnimesList] = useState<TAnime[]>([]);

  useEffect(() => {
    (async function() {
      const animes = await AsyncStorage.getItem('Animes#Home');
    })()
  }, []);

  return (
    <Container>
      <HomeHeader />

      <Section
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ height: 60, paddingBottom: 20 }}
      >
        <GenreButtons 
          data={genres} 
          pressable={() => {
            handleChangeHomeToAnimesGenre();
            setAnimesGenreVisible(false);
          }} 
        />
      </Section>
    </Container>
  );
}