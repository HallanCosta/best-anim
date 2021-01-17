import React, { useEffect, useState, useRef } from 'react';
import { Alert, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { FlatGrid } from 'react-native-super-grid';


import backIcon from '../../assets/images/icon/back.png';

import { GenreButtons, TGenre, TGenreButton } from '../../components/GenreButtons';
import { TAnime } from '../../components/Anime';

import { SkeletonAnimeDetails } from '../../skeletons/AnimeDetails';

import { api } from '../../services/api';

import { 
  Container,
  Header,
  Section,
  BackButton,
  BackButtonIcon,
  Main,
  AnimeImageContent,
  AnimeImage,
  AnimeDetailsContent,
  HeaderContainerAnimeDetails,
  DescriptionContainer,
  SectionContent,
  TitleContent,
  RatingContent,
  Rating,
  RatingValueBackground,
  RatingValue,
  Title,
  QuantityEpisodes,
  GenresText,
  Synopsis,
  EpisodesContainer,
  EpisodeContent,
  EpisodeContentInner,
  EpisodeText
} from './styles';

type Params = {
  idAnime: string;
}

type AnimeDetailsParams = {
  name: string;
  image: string;
  rating: string;
  genres: TGenre[]; 
  synopsis: string;
  titleListEpisodes: string;
}

type EpisodeDetails = {
  idEpisode: string;
  image: string;
  dateRelease: string;
}

type SeasonEpisodesAnime = {
  numberSeason: string;
  episodesAnime: EpisodeDetails[];
}

type PopularAnimes = {
  idAnime: string;
  image: string;
  name: string;
  date: string;
  rating: string;
}

type AnimeDetailsResponse = {
  animeDetails: AnimeDetailsParams;
  seasonsEpisodesAnime: SeasonEpisodesAnime[];
  animesRelated: TAnime[];
  popularAnimes: PopularAnimes;
}

type Episode = {
  idEpisode: string;
  image: string;
  dateRelease: string;
}

type AnimeInfo = {
  season: number;
  episodes: Episode[];
}

export const AnimeDetails = () => {

  const route = useRoute();
  
  const { goBack } = useNavigation();

  const routeParams = route.params as Params;
  
  const [episodesContainer, setEpisodesContainer] = useState(false);

  const [skeletonVisible, setSkeletonVisible] = useState(true);
  const [genres, setGenres] = useState<TGenreButton[]>([]);
  const [anime, setAnime] = useState<AnimeInfo[]>([]);

  const [details, setDetails] = useState({
    name: '',
    image: '',
    rating: '',
    synopsis: '',
    totalSeasons: 0,
    totalEpisodes: 0
  });

  useEffect(() => {
    // `/anime/${routeParams.idAnime}`
    // /anime/shingeki-no-kyojin
    api.get<AnimeDetailsResponse>(`/anime/${routeParams.idAnime}`)
      .then(response => {
        const genresSerialized = response.data.animeDetails.genres.map((genre, index) => {
          return {
            key: index,
            idGenre: genre.idGenre,
            name: genre.name,
            actived: false
          }
        });
        
        const totalSeasons = response.data.seasonsEpisodesAnime.length;
        let totalEpisodes = 0;

        let episodes = [];
        for (let i = 0; i < totalSeasons; i++) {
          totalEpisodes = totalEpisodes + response.data.seasonsEpisodesAnime[i].episodesAnime.length; 
        
          episodes.push({
            season: Number(response.data.seasonsEpisodesAnime[i].numberSeason),
            episodes: response.data.seasonsEpisodesAnime[i].episodesAnime
          });
          
        }
        console.log(episodes);/// ver se está trazendo todos os episodios
        // setAnime(episodes);

        setGenres(genresSerialized);
        setDetails({
          name: response.data.animeDetails.name,
          image: response.data.animeDetails.image,
          rating: response.data.animeDetails.rating,
          synopsis: response.data.animeDetails.synopsis,
          totalEpisodes,
          totalSeasons
        });

        setSkeletonVisible(false);
      })
      .catch(() => {
        Alert.alert('Error', 'Erro ao buscar anime!');
      });
  }, []);

  function handleNavigateBack() {
    goBack();
  }

  function handleToggleSynopsisToEpisodesContainer() {
    setEpisodesContainer(!episodesContainer);
  }

  return (
    <SkeletonAnimeDetails visible={skeletonVisible}>
      <Container>

        <Header>
          <BackButton onPress={handleNavigateBack}>
            <BackButtonIcon source={backIcon} />
          </BackButton>

          <Section 
            horizontal={true} 
            showsHorizontalScrollIndicator={false}
          >      
            <GenreButtons data={genres} press={() => alert('genre buttons top')} />  
          </Section>
        </Header>

        <Main
          horizontal={false}
          showsVerticalScrollIndicator={false}
        >
          <AnimeDetailsContent>
            <AnimeImageContent>
              <AnimeImage source={{ uri: details.image }} />
            </AnimeImageContent>

            <DescriptionContainer>
              <HeaderContainerAnimeDetails>
                
                <TitleContent>
                  <Title>{details.name}</Title>
                  <QuantityEpisodes>{details.totalEpisodes} Episódios contidos</QuantityEpisodes>
                  <QuantityEpisodes>{details.totalSeasons} Temporadas</QuantityEpisodes>
                </TitleContent>

                <RatingContent>
                  <Rating>Nota</Rating>
                  <RatingValueBackground>
                    <RatingValue>8.49</RatingValue>
                  </RatingValueBackground>
                </RatingContent>
              </HeaderContainerAnimeDetails>

              <GenresText>Genêro: {genres.map(genre => `${genre.name}, `)}</GenresText>
              
              <SectionContent>
                <GenreButtons 
                  activedColor="#A47EF8" 
                  data={[
                    { key: 0, idGenre: 'synopsis', name: 'Sinopse', actived: true },
                    { key: 1, idGenre: 'episodes', name: 'Episódios', actived: true }
                  ]} 
                  press={() => handleToggleSynopsisToEpisodesContainer()} 
                />
              </SectionContent>
              
              {!episodesContainer && 
                <Synopsis>{details.synopsis}</Synopsis>
              }

              {episodesContainer &&
                <EpisodesContainer>
                  
                  <EpisodeContent>
                    <EpisodeContentInner>
                      <EpisodeText>1</EpisodeText>
                    </EpisodeContentInner>
                  </EpisodeContent>

                  <EpisodeContent>
                    <EpisodeContentInner>
                      <EpisodeText>2</EpisodeText>
                    </EpisodeContentInner>
                  </EpisodeContent>

                  <EpisodeContent>
                    <EpisodeContentInner>
                      <EpisodeText>3</EpisodeText>
                    </EpisodeContentInner>
                  </EpisodeContent>

                  <EpisodeContent>
                    <EpisodeContentInner>
                      <EpisodeText>4</EpisodeText>
                    </EpisodeContentInner>
                  </EpisodeContent>

                  <EpisodeContent>
                    <EpisodeContentInner>
                      <EpisodeText>5</EpisodeText>
                    </EpisodeContentInner>
                  </EpisodeContent>

                  <EpisodeContent>
                    <EpisodeContentInner>
                      <EpisodeText>6</EpisodeText>
                    </EpisodeContentInner>
                  </EpisodeContent>

                  <EpisodeContent>
                    <EpisodeContentInner>
                      <EpisodeText>1</EpisodeText>
                    </EpisodeContentInner>
                  </EpisodeContent>

                  <EpisodeContent>
                    <EpisodeContentInner>
                      <EpisodeText>2</EpisodeText>
                    </EpisodeContentInner>
                  </EpisodeContent>

                  <EpisodeContent>
                    <EpisodeContentInner>
                      <EpisodeText>3</EpisodeText>
                    </EpisodeContentInner>
                  </EpisodeContent>

                  <EpisodeContent>
                    <EpisodeContentInner>
                      <EpisodeText>4</EpisodeText>
                    </EpisodeContentInner>
                  </EpisodeContent>

                  <EpisodeContent>
                    <EpisodeContentInner>
                      <EpisodeText>5</EpisodeText>
                    </EpisodeContentInner>
                  </EpisodeContent>

                  <EpisodeContent>
                    <EpisodeContentInner>
                      <EpisodeText>6</EpisodeText>
                    </EpisodeContentInner>
                  </EpisodeContent>

                  <EpisodeContent>
                    <EpisodeContentInner>
                      <EpisodeText>1</EpisodeText>
                    </EpisodeContentInner>
                  </EpisodeContent>

                  <EpisodeContent>
                    <EpisodeContentInner>
                      <EpisodeText>2</EpisodeText>
                    </EpisodeContentInner>
                  </EpisodeContent>

                  <EpisodeContent>
                    <EpisodeContentInner>
                      <EpisodeText>3</EpisodeText>
                    </EpisodeContentInner>
                  </EpisodeContent>

                  <EpisodeContent>
                    <EpisodeContentInner>
                      <EpisodeText>4</EpisodeText>
                    </EpisodeContentInner>
                  </EpisodeContent>

                  <EpisodeContent>
                    <EpisodeContentInner>
                      <EpisodeText>5</EpisodeText>
                    </EpisodeContentInner>
                  </EpisodeContent>

                  <EpisodeContent>
                    <EpisodeContentInner>
                      <EpisodeText>6</EpisodeText>
                    </EpisodeContentInner>
                  </EpisodeContent>

                  <EpisodeContent>
                    <EpisodeContentInner>
                      <EpisodeText>1</EpisodeText>
                    </EpisodeContentInner>
                  </EpisodeContent>

                  <EpisodeContent>
                    <EpisodeContentInner>
                      <EpisodeText>2</EpisodeText>
                    </EpisodeContentInner>
                  </EpisodeContent>

                  <EpisodeContent>
                    <EpisodeContentInner>
                      <EpisodeText>3</EpisodeText>
                    </EpisodeContentInner>
                  </EpisodeContent>

                  <EpisodeContent>
                    <EpisodeContentInner>
                      <EpisodeText>4</EpisodeText>
                    </EpisodeContentInner>
                  </EpisodeContent>

                  <EpisodeContent>
                    <EpisodeContentInner>
                      <EpisodeText>5</EpisodeText>
                    </EpisodeContentInner>
                  </EpisodeContent>

                  <EpisodeContent>
                    <EpisodeContentInner>
                      <EpisodeText>6</EpisodeText>
                    </EpisodeContentInner>
                  </EpisodeContent>

                  <EpisodeContent>
                    <EpisodeContentInner>
                      <EpisodeText>1</EpisodeText>
                    </EpisodeContentInner>
                  </EpisodeContent>

                  <EpisodeContent>
                    <EpisodeContentInner>
                      <EpisodeText>2</EpisodeText>
                    </EpisodeContentInner>
                  </EpisodeContent>

                  <EpisodeContent>
                    <EpisodeContentInner>
                      <EpisodeText>3</EpisodeText>
                    </EpisodeContentInner>
                  </EpisodeContent>

                  <EpisodeContent>
                    <EpisodeContentInner>
                      <EpisodeText>4</EpisodeText>
                    </EpisodeContentInner>
                  </EpisodeContent>

                  <EpisodeContent>
                    <EpisodeContentInner>
                      <EpisodeText>5</EpisodeText>
                    </EpisodeContentInner>
                  </EpisodeContent>

                  <EpisodeContent>
                    <EpisodeContentInner>
                      <EpisodeText>6</EpisodeText>
                    </EpisodeContentInner>
                  </EpisodeContent>

                  <EpisodeContent>
                    <EpisodeContentInner>
                      <EpisodeText>1</EpisodeText>
                    </EpisodeContentInner>
                  </EpisodeContent>

                  <EpisodeContent>
                    <EpisodeContentInner>
                      <EpisodeText>2</EpisodeText>
                    </EpisodeContentInner>
                  </EpisodeContent>

                  <EpisodeContent>
                    <EpisodeContentInner>
                      <EpisodeText>3</EpisodeText>
                    </EpisodeContentInner>
                  </EpisodeContent>

                  <EpisodeContent>
                    <EpisodeContentInner>
                      <EpisodeText>4</EpisodeText>
                    </EpisodeContentInner>
                  </EpisodeContent>

                  <EpisodeContent>
                    <EpisodeContentInner>
                      <EpisodeText>5</EpisodeText>
                    </EpisodeContentInner>
                  </EpisodeContent>

                  <EpisodeContent>
                    <EpisodeContentInner>
                      <EpisodeText>6</EpisodeText>
                    </EpisodeContentInner>
                  </EpisodeContent>

                  <EpisodeContent>
                    <EpisodeContentInner>
                      <EpisodeText>1</EpisodeText>
                    </EpisodeContentInner>
                  </EpisodeContent>

                  <EpisodeContent>
                    <EpisodeContentInner>
                      <EpisodeText>2</EpisodeText>
                    </EpisodeContentInner>
                  </EpisodeContent>

                  <EpisodeContent>
                    <EpisodeContentInner>
                      <EpisodeText>3</EpisodeText>
                    </EpisodeContentInner>
                  </EpisodeContent>

                  <EpisodeContent>
                    <EpisodeContentInner>
                      <EpisodeText>4</EpisodeText>
                    </EpisodeContentInner>
                  </EpisodeContent>

                  <EpisodeContent>
                    <EpisodeContentInner>
                      <EpisodeText>5</EpisodeText>
                    </EpisodeContentInner>
                  </EpisodeContent>

                  <EpisodeContent>
                    <EpisodeContentInner>
                      <EpisodeText>6</EpisodeText>
                    </EpisodeContentInner>
                  </EpisodeContent>

                  <EpisodeContent>
                    <EpisodeContentInner>
                      <EpisodeText>1</EpisodeText>
                    </EpisodeContentInner>
                  </EpisodeContent>

                  <EpisodeContent>
                    <EpisodeContentInner>
                      <EpisodeText>2</EpisodeText>
                    </EpisodeContentInner>
                  </EpisodeContent>

                  <EpisodeContent>
                    <EpisodeContentInner>
                      <EpisodeText>3</EpisodeText>
                    </EpisodeContentInner>
                  </EpisodeContent>

                  <EpisodeContent>
                    <EpisodeContentInner>
                      <EpisodeText>4</EpisodeText>
                    </EpisodeContentInner>
                  </EpisodeContent>

                  <EpisodeContent>
                    <EpisodeContentInner>
                      <EpisodeText>5</EpisodeText>
                    </EpisodeContentInner>
                  </EpisodeContent>

                  <EpisodeContent>
                    <EpisodeContentInner>
                      <EpisodeText>6</EpisodeText>
                    </EpisodeContentInner>
                  </EpisodeContent>

                  <EpisodeContent>
                    <EpisodeContentInner>
                      <EpisodeText>1</EpisodeText>
                    </EpisodeContentInner>
                  </EpisodeContent>

                  <EpisodeContent>
                    <EpisodeContentInner>
                      <EpisodeText>2</EpisodeText>
                    </EpisodeContentInner>
                  </EpisodeContent>

                  <EpisodeContent>
                    <EpisodeContentInner>
                      <EpisodeText>3</EpisodeText>
                    </EpisodeContentInner>
                  </EpisodeContent>

                  <EpisodeContent>
                    <EpisodeContentInner>
                      <EpisodeText>4</EpisodeText>
                    </EpisodeContentInner>
                  </EpisodeContent>

                  <EpisodeContent>
                    <EpisodeContentInner>
                      <EpisodeText>5</EpisodeText>
                    </EpisodeContentInner>
                  </EpisodeContent>

                  <EpisodeContent>
                    <EpisodeContentInner>
                      <EpisodeText>6</EpisodeText>
                    </EpisodeContentInner>
                  </EpisodeContent>

                </EpisodesContainer>
                // <FlatGrid
                //   showsVerticalScrollIndicator={false}
                //   style={{ height: '35%' }}
                //   horizontal={false}
                //   itemDimension={100}
                //   data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]}
                //   renderItem={({ item, index }) => (
                //     <EpisodeContent onPress={() => alert(index+1)}>
                //       <EpisodeText>{index+1}</EpisodeText>
                //     </EpisodeContent>
                //   )}
                // />
              }
            </DescriptionContainer>
          </AnimeDetailsContent>
          
        </Main>

      </Container>
    </SkeletonAnimeDetails>
  );
}