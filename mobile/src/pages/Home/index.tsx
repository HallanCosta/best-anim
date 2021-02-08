import React, { useEffect, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Feather } from '@expo/vector-icons';

import slidersIcon from '../../assets/images/icon/sliders.png';
import searchIcon from '../../assets/images/icon/search.png';
import logoImg from '../../assets/images/logo.png';

import { HomeHeader } from '../../components/HomeHeader';
import { Anime, TAnime } from '../../components/Anime';
import { GenreButtons, TGenreButton } from '../../components/GenreButtons';
import { Episode, TEpisode } from '../../components/Episode';
import { AnimesGenre } from '../../components/AnimesGenre';

import { SkeletonHome } from '../../skeletons/Home';
import { SkeletonAnimesGenre } from '../../skeletons/AnimesGenre';

import { api } from '../../services/api';

import { 
  Container,
  Header,
  DrawerButton,
  SlidersIcon,
  LogoImg,
  SearchButton,
  SearchIcon,
  AnimeInput,
  Section,
  HomeContainer,
  Main,
  TitleContent,
  Title,
  AnimesContainer,
  AnimesGenreContainer,
  EpisodesContainer
} from './styles';

type HomeResponse = {
  sectionAnimesRecents: TAnime[];
  sectionLatestEpisodes: TEpisode[];
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

type AnimesHomeStorage = {
  animesRecents: TAnime[];
  episodes: TEpisode[];
  animesList: TAnime[];
}

export const Home = () => {

  const [anime, setAnime] = useState('');
  const [inputVisible, setInputVisible] = useState(false);

  const [skeletonHomeVisible, setSkeletonHomeVisible] = useState(true);
  const [skeletonGenreVisible, setSkeletonGenreVisible] = useState(true);
  const [skeletonAnimesGenreVisible, setSkeletonAnimesGenreVisible] = useState(true);
  
  const [animesGenreContainerVisible, setAnimesGenreContainerVisible] = useState(false);
  const [homeContainerVisible, setHomeContainerVisible] = useState(true);

  const [genres, setGenres] = useState<TGenreButton[]>([]);
  const [animesRecents, setAnimesRecents] = useState<TAnime[]>([]);
  const [episodes, setEpisodes] = useState<TEpisode[]>([]);
  const [animesList, setAnimesList] = useState<TAnime[]>([]);

  const [animesGenre, setAnimesGenre] = useState<AnimeGenreResponse>({
    title: '',
    listAnimesGenre: [],
    totalPage: ''
  });

  useEffect(() => {
    // const animesInStorage = getAnimesInStorage();

    api.get<HomeResponse>('/').then(response => {
      setAnimesRecents(response.data.sectionAnimesRecents);
      setEpisodes(response.data.sectionLatestEpisodes);
      setAnimesList(response.data.sectionAnimesList);

      const animesHome = JSON.stringify({
        sectionAnimesRecents: animesRecents,
        sectionLatestEpisodes: episodes,
        sectionAnimesList: animesList
      });

      AsyncStorage.setItem('Animes#Home', animesHome);

      setSkeletonHomeVisible(false);
    })
  }, []);

  useEffect(() => {
    // const genresInStorage = getGenresInStorage();

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

      const genresConvert = JSON.stringify(genres);
      
      AsyncStorage.setItem('Genres#Home', genresConvert);
    });

  }, []);

  async function handleChangeHomeToAnimesGenre() {
    const idGenre = await AsyncStorage.getItem('idGenre');

    if (idGenre === '/') {
      setSkeletonGenreVisible(false);
      setAnimesGenreContainerVisible(false);

      setHomeContainerVisible(true);
      return;
    }
  
    setHomeContainerVisible(false);
    setSkeletonAnimesGenreVisible(true);
    setAnimesGenreContainerVisible(true);

    const response = await api.get<AnimeGenreResponse>(`genres/${idGenre}`);
    
    setAnimesGenre({
      title: response.data.title,
      listAnimesGenre: response.data.listAnimesGenre,
      totalPage: response.data.totalPage
    });

    setSkeletonAnimesGenreVisible(false);
  }

  function handleSearchAnime() {
    if (anime != '') {
      alert('outra pagina');
      setAnime('');
    }

    setInputVisible(!inputVisible);
  }
 
  return (
    <Container>

      <Header>
        { !inputVisible &&
          <>
            <DrawerButton>
              <SlidersIcon source={slidersIcon} />
            </DrawerButton>

            <LogoImg source={logoImg} />
          </>
        }

        { inputVisible && 
          <AnimeInput 
            placeholder="Digite o nome do anime"
            value={anime}
            onChangeText={setAnime}
          />
        }

        <SearchButton onPress={handleSearchAnime}>
          <SearchIcon source={searchIcon} />
        </SearchButton>
      </Header>

      <SkeletonHome visible={skeletonHomeVisible}>
        <Section
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        >
          <GenreButtons 
            data={genres} 
            press={() => handleChangeHomeToAnimesGenre()} 
          />
        </Section>
        
        { homeContainerVisible && 
          <HomeContainer>
            <Main
              horizontal={false}
              showsVerticalScrollIndicator={false}
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
                  <Anime 
                    key={index}
                    idAnime={anime.idAnime}
                    name={anime.name} 
                    image={anime.image} 
                    rating={anime.rating} 
                  />
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
                  <Episode 
                    key={index} 
                    name={episode.name} 
                    thumbnail={episode.thumbnail} 
                    subtitled={episode.subtitled} 
                  />
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
                    idAnime={anime.idAnime}
                    name={anime.name} 
                    image={anime.image} 
                    rating={anime.rating} 
                  />
                ))}
              </AnimesContainer>

            </Main>
          </HomeContainer>
        }
      </SkeletonHome>

      { animesGenreContainerVisible && 
        <SkeletonAnimesGenre visible={skeletonAnimesGenreVisible} >
          <AnimesGenreContainer>
            <Title style={{ marginLeft: 20 }}>{animesGenre.title.toUpperCase()}</Title>

            <AnimesGenre data={animesGenre.listAnimesGenre} />
          </AnimesGenreContainer>  
        </SkeletonAnimesGenre>
      }

    </Container>
  );
}