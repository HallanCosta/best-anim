import React, { useEffect, useState } from 'react';
import { Alert, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import backIcon from '../../assets/images/icon/back.png';
import mahouImage from '../../assets/images/mahou.png';

import { GenreButtons, TGenre, TGenreButton } from '../../components/GenreButtons';
import { TAnime } from '../../components/Anime';

import { api } from '../../services/api';

import { 
  Container,
  Header,
  Section,
  BackButton,
  BackButtonIcon,
  Main,
  FrontImageBackgroundContent,
  FrontImageBackground,
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
  DescriptionContent,
  Synopsis
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

export const AnimeDetails = () => {
  const route = useRoute();
  
  const { goBack } = useNavigation();

  const routeParams = route.params as Params;
  
  const [genres, setGenres] = useState<TGenreButton[]>([]);
  
  const [details, setDetails] = useState({
    name: '',
    image: '',
    rating: '',
    synopsis: '',
    totalSeasons: 0,
    totalEpisodes: 0
  });

  useEffect(() => {
    api.get<AnimeDetailsResponse>(`/anime/shingeki-no-kyojin`)
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

        for (let i = 0; i < totalSeasons; i++) {
          console.log(response.data.seasonsEpisodesAnime[i].episodesAnime.length);
          totalEpisodes = totalEpisodes + response.data.seasonsEpisodesAnime[i].episodesAnime.length; 
        } 
        
        console.log('Total de Temporadas: ', totalSeasons);
        console.log('Total de Episódios:', totalEpisodes);

        setGenres(genresSerialized);
        setDetails({
          name: response.data.animeDetails.name,
          image: response.data.animeDetails.image,
          rating: response.data.animeDetails.rating,
          synopsis: response.data.animeDetails.synopsis,
          totalEpisodes,
          totalSeasons
        });

      })
      .catch(() => {
        Alert.alert('Error', 'Erro ao buscar anime!');
      });
  }, []);

  function handleNavigateBack() {
    goBack();
  }

  function handleChangeHomeToAnimesGenre() {

  }

  return (
    <Container>
      
      <Header>
        <BackButton onPress={handleNavigateBack}>
          <BackButtonIcon source={backIcon} />
        </BackButton>

        <Section 
          horizontal={true} 
          showsHorizontalScrollIndicator={false}
        >      
          <GenreButtons data={genres} press={handleChangeHomeToAnimesGenre} />  
        </Section>
      </Header>

      <Main>
        

        <AnimeDetailsContent>
          <FrontImageBackgroundContent>
            <FrontImageBackground source={mahouImage} />
          </FrontImageBackgroundContent>

        <DescriptionContainer>
          <HeaderContainerAnimeDetails>
            
            <TitleContent>
              <Title>Mahou Shoujo Site</Title>
              <QuantityEpisodes>12 Episódios contidos</QuantityEpisodes>
              <QuantityEpisodes>3 Temporadas</QuantityEpisodes>
            </TitleContent>

            <RatingContent>
              <Rating>Nota</Rating>
              <RatingValueBackground>
                <RatingValue>8.49</RatingValue>
              </RatingValueBackground>
            </RatingContent>
          </HeaderContainerAnimeDetails>

          <GenresText>Genêro: Drama, Sobrenatural, Horror</GenresText>
          
          <SectionContent>
            <GenreButtons 
              activedColor="#A47EF8" 
              data={[
                { key: 0, idGenre: 'sinopse', name: 'Sinopse', actived: true },
                { key: 1, idGenre: 'episodios', name: 'Episódios', actived: true }
              ]} 
              press={() => alert('sinopse buttons')} 
            />
          </SectionContent>
          
          <DescriptionContent>
            <Synopsis>
              Mahou Shoujo Site Todos os Episodios Online, Assistir Mahou Shoujo Site Anime Completo, Assistir Mahou Shoujo Site Online. A história gira em torno de um site... 
            </Synopsis>
            
          </DescriptionContent>

        </DescriptionContainer>
       
        </AnimeDetailsContent>
      </Main>

    </Container>
  );
}