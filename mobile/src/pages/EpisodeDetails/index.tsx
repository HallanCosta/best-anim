import React, { useEffect, useState, useRef } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Modalize } from 'react-native-modalize';

import backIcon from '../../assets/images/icon/back.png';
import nextEnabledIcon from '../../assets/images/icon/nextEnabled.png';
import nextDisabledIcon from '../../assets/images/icon/nextDisabled.png';
import playCircleIcon from '../../assets/images/icon/play-circle.png';

import { api } from '../../services/api';

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
  EpisodePaginationText,

  OptionsText,
  ModalizeItemInner,
  EpisodeDubbed,
  EpisodeSubtitled,
  ModalButtonText
} from './styles';

type Params = {
  idEpisode: string;
  image: string;
  dateRelease: string;
}

type Video = {
  dubbed: string;
  subtitled: string;
}

type EpisodeDetailsResponse = {
  idVideo: Video;
}

export const EpisodeDetails = () => {
  const route = useRoute();
  
  const routeParams = route.params as Params;

  const { navigate, goBack } = useNavigation();

  const [urlEpisode, setUrlEpisode] = useState<Video>({
    dubbed: '',
    subtitled: ''
  });

  const modalizeRef = useRef<Modalize>(null);
  const onOpen = () => {
    modalizeRef.current?.open();
  };

  useEffect(() => {
    api.get<EpisodeDetailsResponse>(`episode/${routeParams.idEpisode}`)
    .then(response => {
      const { dubbed, subtitled } = response.data.idVideo;

      setUrlEpisode({
        dubbed,
        subtitled
      })
    });
  }, [])

  function handleNavigateBack() {
    goBack();
  }

  function handlePreviousEpisode() {
    alert('previous');
  }

  function handleNextEpisode() {
    alert('next');
  }

  function handlePlayEpisodeDubbed() {
    navigate('PlayEpisode', { 
      urlEpisode: urlEpisode.dubbed 
    });
  }
  
  function handlePlayEpisodeSubtitled() {
    navigate('PlayEpisode', { 
      urlEpisode: urlEpisode.subtitled 
    });
  }

  return (
    <>
      <Container>
        <BackButton onPress={handleNavigateBack}>
          <BackButtonIcon source={backIcon} />
        </BackButton>

        <Main>
          <AnimeImageContent>
            <AnimeImage source={{ uri: routeParams.image }} />
            
            <PlayCircleContent onPress={onOpen}>
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
    
      <Modalize ref={modalizeRef} snapPoint={150}>
        <OptionsText>Escolha uma opção: </OptionsText>
        
        <ModalizeItemInner>
          <EpisodeDubbed onPress={handlePlayEpisodeDubbed}>
            <ModalButtonText>Dublado</ModalButtonText>
          </EpisodeDubbed>

          <EpisodeSubtitled onPress={handlePlayEpisodeSubtitled}>
            <ModalButtonText>Legendado</ModalButtonText>
          </EpisodeSubtitled>
        </ModalizeItemInner>
      </Modalize>
    </>
  )
}