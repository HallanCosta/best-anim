import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
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
import { TabRouter } from '@react-navigation/native';

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
  // const [isVisible, setVisible] = useState({
  //   animes: false,
  //   genres: false,
  //   animesGenre: false
  // });

  const [homeScreenVisible, setHomeScreenVisible] = useState(true);
  const [animesGenreScreenVisible, setAnimesGenreScreenVisible] = useState(false);

  const [genreButtonsVisible, setGenreButtonsVisible] = useState(false);
  const [animesVisible, setAnimesVisible] = useState(false);
  const [animesGenreVisible, setAnimesGenreVisible] = useState(false);


  const [genres, setGenres] = useState<TGenre[]>([]);
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

      setAnimesVisible(true);
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
      
      setGenreButtonsVisible(true);
    });
  }, []);

  // async function handleVisibility(visibilityName: string, visibilityValue: boolean) {

  //   for (const key in isVisible) {
  //     if (key == visibilityName) {
  //       setVisible({
  //         ...isVisible,
  //         [key]: visibilityValue
  //       });
  //     }
  //   }

  // }

  async function handleChangeHomeToAnimesGenre() {
    const idGenre = await AsyncStorage.getItem('idGenre');

    if (idGenre === '/') {
      setHomeScreenVisible(true);
      setAnimesGenreVisible(false);
      setAnimesGenreScreenVisible(false);

      return;
    }
  
    setHomeScreenVisible(false);
    setAnimesGenreScreenVisible(true);

    const response = await api.get<AnimeGenreResponse>(`genres/${idGenre}`);
    
    setAnimesGenre({
      title: response.data.title,
      listAnimesGenre: response.data.listAnimesGenre,
      totalPage: response.data.totalPage
    });

    setAnimesGenreVisible(true);
  }
  
  return (
    <Container>
      <HomeHeader />

      <ShimmerPlaceholder
        visible={genreButtonsVisible}
        style={
          genreButtonsVisible
          ? {}
          : { borderRadius: 4, width: '100%', marginLeft: 20 }
        }
      >
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
      </ShimmerPlaceholder>

      {homeScreenVisible && 
        <HomeContainer>
          <Main
            horizontal={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={ 
              animesVisible
              ? {}
              : { flex: 1 }
            }
          >
            <TitleContent>
              <Title>ÚLTIMOS LANÇAMENTOS</Title>
              <Title>MAIS</Title>
            </TitleContent>

            <ShimmerPlaceholder
              visible={animesVisible}
              style={
                animesVisible
                ? {}
                : styled.AnimesShimmerEffect
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

            <ShimmerPlaceholder
              visible={animesVisible}
              style={
                animesVisible
                ? {}
                : styled.EpisodesShimmerEffect
              }
            >
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
            </ShimmerPlaceholder>

            <TitleContent>
              <Title>TOP ANIMES</Title>
              <Title>MAIS</Title>
            </TitleContent>


            <ShimmerPlaceholder
              visible={animesVisible}
              style={
                animesVisible
                ? {}
                : styled.AnimesShimmerEffect
              }
            >
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
            </ShimmerPlaceholder>

          </Main>
        </HomeContainer>
      }

      { animesGenreScreenVisible && 
        <AnimesGenreContainer>
          <ShimmerPlaceholder
            visible={animesGenreVisible}
            style={
              animesGenreVisible
              ? {}
              : { marginLeft: 20, borderRadius: 8 }
            }
          >
            <Title style={{ marginLeft: 20 }}>{animesGenre.title.toUpperCase()}</Title>
          </ShimmerPlaceholder>

          <ShimmerPlaceholder
            visible={animesGenreVisible}
            style={
              animesGenreVisible
              ? {}
              : styled.AnimesGenreShimmerEffect
            }
          >
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
          </ShimmerPlaceholder>
        </AnimesGenreContainer>
      }

    </Container>
  );
}

const styled = StyleSheet.create({
  AnimesShimmerEffect: { 
    marginTop: 15,
    marginLeft: 20, 
    width: '100%', 

    height: '40%',
    borderRadius: 8
  },

  EpisodesShimmerEffect: { 
    marginTop: 15,
    marginLeft: 20, 
    width: '100%', 

    height: '22%',
    borderRadius: 8
  },

  AnimesGenreShimmerEffect: {
    marginTop: 15,
    marginLeft: 20, 
    width: '90%', 

    height: '100%',
    borderRadius: 8
  }
});