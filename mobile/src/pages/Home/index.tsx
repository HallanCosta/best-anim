import React, { useEffect, useState } from 'react';
import { Text, Image, TouchableOpacity, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import slidersIcon from '../../assets/images/icon/sliders.png';
import searchIcon from '../../assets/images/icon/search.png';

import logoImg from '../../assets/images/logo.png';

// import { DubbedButton } from '../../components/DubbedButton';


import { HomeHeader } from '../../components/HomeHeader';
import { Animes, Anime } from '../../components/Animes';
import { ButtonTab } from '../../components/SectionButtons';

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

type GenreResponse = {
  idGenre: string;
  name: string;
}

type Genre = {
  id: number;
  name: string;
  actived: boolean;
}

type GenreDubbedReponse = {
  title: string;
  listAnimesGenre: Anime[];
  totalPage: string;
}

type AnimesDubbed = {
  animes: Anime[],
  totalPage: string;
}

export const Home = () => {

  const { navigate } = useNavigation();

  const [animesRecents, setAnimesRecents] = useState<Anime[]>([]);
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [animesList, setAnimesList] = useState<Anime[]>([]);
  const [genres, setGenres] = useState<GenreResponse[]>([]);

  const [buttonFocused, setButtonFocused] = useState<Genre>({
    id: 0,
    name: '',
    actived: false
  });

  const [currentSection, setCurrentSection] = useState<Genre[]>([{
    id: 0,
    name: '',
    actived: false
  }]);

  const [animesDubbed, setAnimesDubbed] = useState<AnimesDubbed>({
    animes: [],
    totalPage: ''
  });
  
  useEffect(() => {
    api.get<HomeResponse>('/').then(response => {
      setAnimesRecents(response.data.sectionAnimesRecents);
      setEpisodes(response.data.sectionLatestEpisodes);
      setAnimesList(response.data.sectionAnimesList);
    });
  }, []);

  useEffect(() => {
    api.get<GenreResponse[]>('/genres').then(response => {
      setGenres(response.data);

      const currentGenre = response.data.map((genre, index) => {
        return {
          id: index+1,
          name: genre.name,
          actived: false
        }
      });

      setCurrentSection([{
        id: 0,
        name: 'Todos',
        actived: true
      }, ...currentGenre]);
    });
  }, []);

  function getAnimesDubbed() {
    api.get<GenreDubbedReponse>('genres/dublado').then(response => {
      const animes = response.data.listAnimesGenre;
      const totalPage = response.data.totalPage;

      setAnimesDubbed({
        animes,
        totalPage
      });
    });
  }

  function handleNavigateToAnimesDubbed() {
    navigate('Dubbed');
  }

  function handleSelectSection(id: number) {
    currentSection.find(element => {
      if (element.id == id) {
        element.actived = true;
      }
    });

    setButtonFocused(currentSection[id]);
    console.log(currentSection[id]);
  }
  
  return (
    <Container>
      <HomeHeader />

      <Section
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ height: 60, paddingBottom: 20 }}
      >
        {currentSection.map((genre, index) => {
          return (
            <ButtonTab 
              key={index} 
              title={genre.name} 
              focused={buttonFocused.id == index ? true : false} 
              disabled={buttonFocused.id == index ? true : false}
              onPress={() => handleSelectSection(index)}
            />
          );
        })}

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