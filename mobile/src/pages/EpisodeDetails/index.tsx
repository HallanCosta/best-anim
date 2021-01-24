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

export const EpisodeDetails = () => {
  const route = useRoute();
  
  const routeParams = route.params as Params;

  const { navigate, goBack } = useNavigation();

  const [urlDubbed, setUrlDubbed] = useState('');
  const [urlSubtitled, setUrlSubtitled] = useState('');

  const modalizeRef = useRef<Modalize>(null);
  const onOpen = () => {
    modalizeRef.current?.open();
  };

  useEffect(() => {
    api.get(`episode/${routeParams.idEpisode}`)
    .then(response => {
      // console.log(response.data);
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

  function handleNavigatePlayEpisode() {
    navigate('PlayEpisode');
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
    
      <Modalize ref={modalizeRef}>
        <OptionsText>Escolha uma opção: </OptionsText>
        
        <ModalizeItemInner>
          <EpisodeDubbed>
            <ModalButtonText>Dublado</ModalButtonText>
          </EpisodeDubbed>

          <EpisodeSubtitled>
            <ModalButtonText>Legendado</ModalButtonText>
          </EpisodeSubtitled>
        </ModalizeItemInner>
      </Modalize>
    </>
  )
}