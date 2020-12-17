import React, { useEffect, useState } from 'react';
import { FlatGrid } from 'react-native-super-grid';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';

import { HomeHeader } from '../../components/HomeHeader';
import { Anime, TAnime } from '../../components/Anime';
import { GenreButtons, TGenre } from '../../components/GenreButtons';

import { api } from '../../services/api';

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
  EpisodeContent,
  EpisodeName,
  EpisodeThumbnail,
  SubtitledText
} from './styles';

type Episode = {
  name: string;
  thumbnail: string;
  subtitled: string;
  idEpisode: string;
}

type HomeResponse = {
  sectionAnimesRecents: TAnime[];
  sectionLatestEpisodes: Episode[];
  sectionAnimesList: TAnime[];
}

type GenresResponse = {
  idGenre: string;
  name: string;
}

type AnimeGenreResponse = {
  title: string,
  listAnimesGenre: TAnime[],
  totalPage: string
}

export const Home = () => {
  const [genres, setGenres] = useState<TGenre[]>([]);

  const [isVisible, setVisible] = useState({
    anime: false
  });

  const [genreVisible, setGenreVisible] = useState(false);

  // Animes Screen Navigate
  const [homeVisible, setHomeVisible] = useState(true);
  const [animeGenreVisible, setAnimeGenreVisible] = useState(false);

  const [animesRecents, setAnimesRecents] = useState<TAnime[]>([]);
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [animesList, setAnimesList] = useState<TAnime[]>([]);

  const [animesGenre, setAnimesGenre] = useState<AnimeGenreResponse>({
    title: '',
    listAnimesGenre: [],
    totalPage: ''
  });

  useEffect(() => {
    api.get<HomeResponse>('/').then(response => {
      setAnimesRecents(response.data.sectionAnimesRecents);
      setEpisodes(response.data.sectionLatestEpisodes);
      setAnimesList(response.data.sectionAnimesList);

      setVisible({
        anime: true
      })
    });
  }, []);

  useEffect(() => {
    api.get<GenresResponse[]>('/genres').then(response => {
      
      const genresSerialized = response.data.map((genre, index) => {
        return {
          key: index + 1,
          idGenre: genre.idGenre,
          name: genre.name,
          actived: false
        }
      });

      setGenres([{
        key: 0,
        idGenre: '/',
        name: 'Home',
        actived: false
      }, ...genresSerialized]);

      setGenreVisible(true);
    });
  }, []);

  async function handleSearchAnimePerGenre() {
    
    //COLOCAR SHIMMER EFFECT PQ N SEI QUANDO TA CARREGANDO POHA NENHUMA...
    //COLOCAR TODOS OS ANIME BUSCADO PELO GENÊRO EM CACHE

    const idGenre = await AsyncStorage.getItem('idGenre');

    if (idGenre === '/') {
      setHomeVisible(true);
      setAnimeGenreVisible(false);

      return;
    }
  
    const response = await api.get<AnimeGenreResponse>(`genres/${idGenre}`);

    setAnimesGenre({
      title: response.data.title,
      listAnimesGenre: response.data.listAnimesGenre,
      totalPage: response.data.totalPage
    });

    setHomeVisible(false);
    setAnimeGenreVisible(true);
  }
  
  return (
    <Container>
      <HomeHeader />

      <ShimmerPlaceholder
        visible={genreVisible}
        style={
          genreVisible
          ? {}
          : { borderRadius: 4, width: '100%', marginLeft: 20 }
        }
      >
        <Section
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ height: 60, paddingBottom: 20 }}
        >
          <GenreButtons data={genres} pressable={handleSearchAnimePerGenre} />
        </Section>
      </ShimmerPlaceholder>

      {homeVisible && 
        <HomeContainer>
          <Main
            horizontal={false}
            showsVerticalScrollIndicator={false}
          >
            <TitleContent>
              <Title>ÚLTIMOS LANÇAMENTOS</Title>
              <Title>MAIS</Title>
            </TitleContent>


            <ShimmerPlaceholder
              visible={isVisible.anime}
              style={
                isVisible.anime
                ? {}
                : { width: '100%', height: '80%' }
              }
            >

            <AnimesContainer 
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 20 }}
              >
              {animesRecents.map((anime, index) => (
                <Anime 
                key={index} 
                name={anime.name} 
                  image={anime.image} 
                  rating={anime.rating} 
                />
              ))}
            </AnimesContainer>

            </ShimmerPlaceholder>

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

            <AnimesContainer 
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 20 }}
            >
              {animesList.map((anime, index) => (
                <Anime 
                  key={index} 
                  name={anime.name} 
                  image={anime.image} 
                  rating={anime.rating} 
                />
              ))}
            </AnimesContainer>
          </Main>
        </HomeContainer>
      }


      {animeGenreVisible && 
        <AnimesGenreContainer>
          <Title style={{ marginLeft: 20 }}>{animesGenre.title.toUpperCase()}</Title>

          <FlatGrid
            horizontal={false}
            contentContainerStyle={{ paddingHorizontal: 10 }}
            showsVerticalScrollIndicator={false}
            itemDimension={130}
            data={animesGenre.listAnimesGenre}
            renderItem={({ item, index }) => (
              <Anime 
                key={index} 
                name={item.name} 
                image={item.image} 
                rating={item.rating} 
              />
            )}
          />
        </AnimesGenreContainer>
      }

    </Container>
  );
} 