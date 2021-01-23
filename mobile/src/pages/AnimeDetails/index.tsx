import React, { useEffect, useState, useRef } from 'react';
import { Alert, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

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
  EpisodesContainerInner,
  EpisodesSeasonContainer,
  EpisodeContent,
  EpisodeSeasonContent,
  EpisodeSeason,
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

type AnimeEpisodes = {
  season: number;
  episodes: EpisodeDetails[];
}

export const AnimeDetails = () => {

  const route = useRoute();
  const routeParams = route.params as Params;
  
  const { goBack, navigate } = useNavigation();
  
  const [episodesContainer, setEpisodesContainer] = useState(false);

  const [skeletonVisible, setSkeletonVisible] = useState(true);
  const [genres, setGenres] = useState<TGenreButton[]>([]);
  const [anime, setAnime] = useState<AnimeEpisodes[]>([]);

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
        
        setGenres(genresSerialized);
        
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
        
        setAnime(episodes);
        
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
        Alert.alert('Error', 'Erro ao buscar o anime!');
      });
  }, []);

  function handleNavigateBack() {
    goBack();
  }

  function handleToggleSynopsisToEpisodesContainer() {
    setEpisodesContainer(!episodesContainer);
  }

  function handleWatchEpisode(episode: EpisodeDetails) {
    navigate('EpisodeDetails', episode);
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
                  {anime.map((seasons, index) => (
                    <EpisodesContainerInner key={index}>
                      
                      <EpisodeSeasonContent>
                        <EpisodeSeason>{`${seasons.season}º Temporada`}</EpisodeSeason>
                      </EpisodeSeasonContent>
                      
                      <EpisodesSeasonContainer>  
                        {seasons.episodes.map((episode, index) => (
                          <EpisodeContent key={index} onPress={() => handleWatchEpisode(episode)}>
                            <EpisodeContentInner>
                              <EpisodeText>{index + 1}</EpisodeText>
                            </EpisodeContentInner>
                          </EpisodeContent>
                        ))}
                      </EpisodesSeasonContainer>
                      
                    </EpisodesContainerInner>
                  ))}
                </EpisodesContainer>
              }

            </DescriptionContainer>
          </AnimeDetailsContent>
          
        </Main>

      </Container>
    </SkeletonAnimeDetails>
  );
}