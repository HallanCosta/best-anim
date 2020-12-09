import React, { useEffect, useState } from 'react';
import { Text, Image, TouchableOpacity} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import slidersIcon from '../../assets/images/icon/sliders.png';
import searchIcon from '../../assets/images/icon/search.png';

import logoImg from '../../assets/images/logo.png';

// import { DubbedButton } from '../../components/DubbedButton';


import { HomeHeaderTabs } from '../../components/HomeHeaderTabs';
import { Animes, Anime } from '../../components/Animes';

import { api } from '../../services/api';

import { 
  Container,

  Section,
  DubbedButton,
  DubbedText,
  AnimesButton,
  AnimesText,

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

  function handleToNavigateAnimesDubbed() {
    navigate('Dubbed');
  }
  
  return (
    <Container>
      {/* <Header>
        <Image source={slidersIcon} />
        <Image source={logoImg} />
        <Image source={searchIcon} />
      </Header> */}

      <HomeHeaderTabs />

      <Section>
        <AnimesButton onPress={() => alert('Animes')}>
          <AnimesText>Animes</AnimesText>
        </AnimesButton>

        <DubbedButton onPress={handleToNavigateAnimesDubbed}>
          <DubbedText>Dublado</DubbedText>
        </DubbedButton>
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