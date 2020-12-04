import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Routes } from './src/routes';
import { AppLoading } from 'expo';

// import { useFonts, Gudea_700Bold } from '@expo-google-fonts/gudea';
// import { Trykker_400Regular } from '@expo-google-fonts/trykker';

import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Archivo_400Regular } from '@expo-google-fonts/archivo';
import { Ubuntu_400Regular, Ubuntu_700Bold } from '@expo-google-fonts/ubuntu';
import { Poppins_400Regular, Poppins_500Medium } from '@expo-google-fonts/poppins';

export default function App() {
  const [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Ubuntu_400Regular,
    Ubuntu_700Bold,
    Poppins_400Regular,
    Poppins_500Medium
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