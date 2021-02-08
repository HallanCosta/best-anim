import React, { useRef, useState, useEffect } from 'react';
import { BackHandler } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as ScreenOrientation from 'expo-screen-orientation';
import { WebView } from 'react-native-webview';

import { 
  Container,
  FullScreenButton,
  FullScreenText
} from './styles';

type Params = {
  urlEpisode: string;
}

export const PlayEpisode = () => {
  const route = useRoute();

  const routeParams = route.params as Params;

  const { goBack } = useNavigation();

  const [isFullScreen, setFullScreen] = useState(false);

  BackHandler.addEventListener('hardwareBackPress', () => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    goBack();
    return true;
  });

  function handleFullScreen() {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    setFullScreen(true);
  }

  return (
    <Container>
      <WebView
        style={{ borderRadius: 50 }}
        source={{ uri: routeParams.urlEpisode }}
      />

      { !isFullScreen && 
        <FullScreenButton onPress={handleFullScreen}>
          <FullScreenText>Tela Cheia</FullScreenText>
        </FullScreenButton>
      }
    </Container>
  );
}