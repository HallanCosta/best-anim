import React, { useRef } from 'react';
import * as ScreenOrientation from 'expo-screen-orientation';
import { Video, VideoFullscreenUpdateEvent } from 'expo-av';
import { useNavigation } from '@react-navigation/native';

import backIcon from '../../assets/images/icon/back.png';

import { 
  Container,
  BackButton,
  BackButtonIcon,
  EpisodeVideo
} from './styles';

export const PlayEpisode = () => {
  const { goBack } = useNavigation();

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

  function handleNavigateGoBack() {
    goBack();
  }

  return (
    <Container>
      <BackButton onPress={handleNavigateGoBack}>
        <BackButtonIcon source={backIcon} />
      </BackButton>

      <EpisodeVideo>
        <Video
          ref={videoRef}
          source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          useNativeControls
          resizeMode="contain"
          shouldPlay={true}
          isLooping={false}
          onFullscreenUpdate={onFullscreenUpdate}
          style={{
            width: '100%',
            height: 200,
          }}
        /> 
      </EpisodeVideo>
    </Container>
  );
}