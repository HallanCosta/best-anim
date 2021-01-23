import React, { useState, useRef } from 'react';
import * as ScreenOrientation from 'expo-screen-orientation';
import { View, StyleSheet, Dimensions } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Video, VideoFullscreenUpdateEvent } from 'expo-av';

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
  AnimeEpisodeVideo,
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

export const WatchEpisode = () => {
  const route = useRoute();
  
  const routeParams = route.params as EpisodeDetails;

  const { goBack } = useNavigation();
  const { width } = Dimensions.get('window');

  const [orientationIsLandscape, setOrientationIsLandscape] = useState(false);
  
  const [shouldPlay, setShouldPlay] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  function handleNavigateBack() {
    goBack();
  }

  function handlePreviousEpisode() {
    alert('previous');
  }

  function handleNextEpisode() {
    alert('next');
  }

  function handleShouldPlay() {
    setShowVideo(true);
    setShouldPlay(true);

   
    alert('paused')
  }

  const videoRef = useRef<any>();

  const onFullscreenUpdate = async ({fullscreenUpdate}: VideoFullscreenUpdateEvent) => {
    switch (fullscreenUpdate) {
        case Video.FULLSCREEN_UPDATE_PLAYER_DID_PRESENT:
            await ScreenOrientation.unlockAsync() // only on Android required
            break;
        case Video.FULLSCREEN_UPDATE_PLAYER_WILL_DISMISS:
            await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT) // only on Android required
            break;
    }
  }

  return (
    <>
    
    { showVideo && 
      <AnimeEpisodeVideo>
        <Video
          ref={videoRef}
          source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          useNativeControls
          resizeMode="contain"
          shouldPlay={shouldPlay}
          isLooping={false}
          onFullscreenUpdate={onFullscreenUpdate}
          style={{
            width: '100%',
            height: '100%'
          }}
        /> 
      </AnimeEpisodeVideo>
    }

{ !showVideo && 
    <Container>

      <BackButton onPress={handleNavigateBack}>
        <BackButtonIcon source={backIcon} />
      </BackButton>

      <Main>
        
        
        
          <AnimeImageContent>
            <AnimeImage source={{ uri: 'https://animesonline.cc/wp-content/uploads/2019/07/u9t4dWGsKbROoZflb5pTikwVngQ-300x169.jpg' }} />
            
            <PlayCircleContent onPress={handleShouldPlay}>
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
    }
    </>
  )
}

// const styles = StyleSheet.create({
//   video: { 
//     width: 263, 
//     height: 225, 
//     borderRadius: 20,
//     // top: -120,
//   }
// })