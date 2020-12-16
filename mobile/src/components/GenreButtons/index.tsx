import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Button, Text } from './styles';

export type TextProps = {
  focused: boolean;
}

export type ButtonProps = {
  focused: boolean;
}

export type TGenre = {
  key: number;
  idGenre: string;
  name: string;
  actived: boolean;
}

interface GenreButtonsProps {
  data: TGenre[];
  pressable: () => void;
}

export const GenreButtons: React.FC<GenreButtonsProps> = ({
  data,
  pressable
}) => {
  const [buttonFocused, setButtonFocused] = useState(0);

  async function selectGenre(genreSelected: number) {
    
    data.find(genre => {
      if (genre.key == genreSelected) {
        genre.actived = true;
        
        setButtonFocused(genre.key);
      }
    });

    await AsyncStorage.setItem('idGenre', data[genreSelected].idGenre);
    
    pressable();
  }

  return (
    <>
      {data.map((genre, currentGenre) => (
        <Button 
          key={currentGenre} 
          disabled={buttonFocused == currentGenre} 
          focused={buttonFocused == currentGenre} 
          onPress={() => selectGenre(currentGenre)}
        >
          <Text focused={buttonFocused == currentGenre}>{genre.name}</Text>
        </Button>
      ))}
    </>
  );
}