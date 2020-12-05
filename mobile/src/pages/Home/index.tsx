import React, { useEffect, useState } from 'react';
import { Text, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

import slidersIcon from '../../assets/images/icon/sliders.png';
import searchIcon from '../../assets/images/icon/search.png';

import logoImg from '../../assets/images/logo.png';

import { api } from '../../services/api';

import { 
  Container,
  Header,
  Section,
  Series,
  Movies,
  Main,
  TitleContent,
  Title,

  AnimesContainer,
  AnimeContent,
  AnimeImg,
  AnimeName,
  RatingContent,
  RatingTitle,
  RatingValue,

  EpisodesContainer,
  EpisodeContent,
  EpisodeName,
  EpisodeThumbnail,
  Subtitled,

  Footer,
  PlayIconContent,
  UserIconContent
} from './styles';


type Anime = {
  idAnime: string;
  name: string;
  image: string;
  rating: string;
}

type Episode = {
  name: string;
  thumbnail: string;
  subtitled: string;
  idEpisode: string;
}

type ApiEpisodesHomeResponse = {
  sectionAnimesRecents: Anime[];
  sectionLatestEpisodes: Episode[];
  sectionAnimesList: Anime[];
}

export const Home = () => {

  const [animesRecents, setAnimesRecents] = useState<Anime[]>([]);
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [animesList, setAnimesList] = useState<Anime[]>([]);
  
  useEffect(() => {
    api.get<ApiEpisodesHomeResponse>('/').then(response => {
      setAnimesRecents(response.data.sectionAnimesRecents);
      setEpisodes(response.data.sectionLatestEpisodes);
      setAnimesList(response.data.sectionAnimesList);
    });
  }, []);

  

  return (
    <Container>
      <Header>
        <Image source={slidersIcon} />
        <Image source={logoImg} />
        <Image source={searchIcon} />
      </Header>

      <Section>
        <Series>Series</Series>
        <Movies>Filmes</Movies>
      </Section>

      <Main
        showsHorizontalScrollIndicator={false}
      >
        <TitleContent>
          <Title>ÚLTIMOS LANÇAMENTOS</Title>
          <Title>MAIS</Title>
        </TitleContent>

        <AnimesContainer 
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 20 }}
        >
          {animesRecents.map((anime, index) => (
            <AnimeContent key={index}>
              <AnimeImg source={{ uri: anime.image }} />
              <AnimeName numberOfLines={2} >{anime.name}</AnimeName>

              <RatingContent>
                <RatingTitle>Nota</RatingTitle>
                <RatingValue>{anime.rating}</RatingValue>
              </RatingContent>
            </AnimeContent>
          ))}
        </AnimesContainer>



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
                <Subtitled>{episode.subtitled}</Subtitled>
              }
            </EpisodeContent>
          ))}
        </EpisodesContainer>



        <TitleContent>
          <Title>TOP ANIMES</Title>
          <Title>MAIS</Title>
        </TitleContent>

        <AnimesContainer 
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 20 }}
        >
          {animesList.map((anime, index) => (
            <AnimeContent key={index}>
              <AnimeImg source={{ uri: anime.image }} />
              <AnimeName numberOfLines={2} >{anime.name}</AnimeName>

              <RatingContent>
                <RatingTitle>Nota</RatingTitle>
                <RatingValue>{anime.rating}</RatingValue>
              </RatingContent>
            </AnimeContent>
          ))}
        </AnimesContainer>
      </Main>

      
      <Footer>
        <PlayIconContent>
          <Feather 
            name="play" 
            color="#A9A2D2" 
            size={24} 
          />
        </PlayIconContent>
        <UserIconContent>
          <Feather 
            name="user" 
            color="#A9A2D2" 
            size={24} 
          />
        </UserIconContent>
      </Footer>
      
    </Container>
  );
} 