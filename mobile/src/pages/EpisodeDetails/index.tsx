import React from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';

import backIcon from '../../assets/images/icon/back.png';
import nextEnabledIcon from '../../assets/images/icon/nextEnabled.png';
import nextDisabledIcon from '../../assets/images/icon/nextDisabled.png';
import playCircleIcon from '../../assets/images/icon/play-circle.png';

import { 
  Container,
  BackButton,
  BackButtonIcon,
  Main,
  AnimeImageContent,
  AnimeImage,
  PlayCircleContent,
  PlayCircle,
  DescriptionContainer,
  DescriptionContent,
  DescriptionText,
  Pagination,
  Button,
  PreviousEpisodeIcon,
  NextEpisodeIcon,
  EpisodePaginationText
} from './styles';

type EpisodeDetails = {
  idEpisode: string;
  image: string;
  dateRelease: string;
}

export const EpisodeDetails = () => {
  const route = useRoute();
  
  const routeParams = route.params as EpisodeDetails;

  const { navigate, goBack } = useNavigation();

  function handleNavigateBack() {
    goBack();
  }

  function handlePreviousEpisode() {
    alert('previous');
  }

  function handleNextEpisode() {
    alert('next');
  }

  function handleNavigatePlayEpisode() {
    navigate('PlayEpisode');
  }

  return (
    <Container>

      <BackButton onPress={handleNavigateBack}>
        <BackButtonIcon source={backIcon} />
      </BackButton>

      <Main>
        <AnimeImageContent>
          <AnimeImage source={{ uri: 'https://animesonline.cc/wp-content/uploads/2019/07/u9t4dWGsKbROoZflb5pTikwVngQ-300x169.jpg' }} />
          
          <PlayCircleContent onPress={handleNavigatePlayEpisode}>
            <PlayCircle source={playCircleIcon} />
          </PlayCircleContent>
        </AnimeImageContent>
        
        <DescriptionContainer>
          <DescriptionContent>
            <DescriptionText>1º Temporada</DescriptionText>
          </DescriptionContent>

          <DescriptionContent>
            <DescriptionText>Episódio 1</DescriptionText>
          </DescriptionContent>

          <DescriptionContent>
            <DescriptionText>Publicado: Jan. 27, 2018</DescriptionText>
          </DescriptionContent>
        </DescriptionContainer>

        <Pagination>
          <Button onPress={handlePreviousEpisode}>
            <EpisodePaginationText enabled={false}>Anterior</EpisodePaginationText>
            <PreviousEpisodeIcon source={nextDisabledIcon} />
          </Button>

          <Button onPress={handleNextEpisode}>
            <EpisodePaginationText enabled={true}>Próximo</EpisodePaginationText>
            <NextEpisodeIcon source={nextEnabledIcon} />
          </Button>
        </Pagination>
      </Main>

    </Container>
  )
}