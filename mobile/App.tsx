import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AppLoading } from 'expo';

import { Routes } from './src/routes';

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