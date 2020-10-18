import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Routes } from './src/routes';
import { AppLoading } from 'expo';

import { useFonts, Gudea_700Bold } from '@expo-google-fonts/gudea';
import { Trykker_400Regular } from '@expo-google-fonts/trykker';
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Ubuntu_400Regular, Ubuntu_700Bold } from '@expo-google-fonts/ubuntu';


export default function App() {
  const [fontsLoaded] = useFonts({
    Gudea_700Bold,
    Trykker_400Regular,
    Roboto_400Regular,
    Roboto_700Bold,
    Ubuntu_400Regular,
    Ubuntu_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar  backgroundColor="transparent" translucent />
      <Routes />
    </>
  );
}