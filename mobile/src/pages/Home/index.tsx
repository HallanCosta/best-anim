import React, { useEffect, useState } from 'react';
import { Text, Image, TouchableOpacity, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import slidersIcon from '../../assets/images/icon/sliders.png';
import searchIcon from '../../assets/images/icon/search.png';
import logoImg from '../../assets/images/logo.png';

import { HomeHeader } from '../../components/HomeHeader';
import { Animes, Anime } from '../../components/Animes';
import { GenreButtons } from '../../components/GenreButtons';

import { api } from '../../services/api';

import { 
  Container,

  Section,

  Main,
  TitleContent,
  Title,

  EpisodesContainer,
  EpisodeContent,
  EpisodeName,
  EpisodeThumbnail,
  SubtitledText,
} from './styles';

type Episode = {
  name: string;
  thumbnail: string;
  subtitled: string;
  idEpisode: string;
}

type HomeResponse = {
  sectionAnimesRecents: Anime[];
  sectionLatestEpisodes: Episode[];
  sectionAnimesList: Anime[];
}

export const Home = () => {
  // const { navigate } = useNavigation();

  const [animesRecents, setAnimesRecents] = useState<Anime[]>([]);
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [animesList, setAnimesList] = useState<Anime[]>([]);

  useEffect(() => {
    api.get<HomeResponse>('/').then(response => {
      setAnimesRecents(response.data.sectionAnimesRecents);
      setEpisodes(response.data.sectionLatestEpisodes);
      setAnimesList(response.data.sectionAnimesList);
    });
  }, []);

  return (
    <Container>
      <HomeHeader />

      <Section
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ height: 60, paddingBottom: 20 }}
      >
        <GenreButtons />
      </Section>

      <Main
        showsHorizontalScrollIndicator={false}
      >
        <TitleContent>
          <Title>ÚLTIMOS LANÇAMENTOS</Title>
          <Title>MAIS</Title>
        </TitleContent>

        <Animes animes={animesRecents} />

        <TitleContent>
          <Title>ÚLTIMOS EPISÓDIOS</Title>
          <Title>MAIS</Title>
        </TitleContent>

        <EpisodesContainer
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 20 }}
        >
          {episodes.map((episode, index) => (
            <EpisodeContent key={index}> 
              <EpisodeThumbnail source={{ uri: episode.thumbnail }} />
              <EpisodeName numberOfLines={2} ellipsizeMode="middle">{episode.name}</EpisodeName>
              
              { episode.subtitled && 
                <SubtitledText>{episode.subtitled}</SubtitledText>
              }
            </EpisodeContent>
          ))}
        </EpisodesContainer>



        <TitleContent>
          <Title>TOP ANIMES</Title>
          <Title>MAIS</Title>
        </TitleContent>

        <Animes animes={animesList} />
        
      </Main>

    </Container>
  );
} 