import React, { useEffect, useState } from 'react';
import { TouchableWithoutFeedbackProps } from 'react-native';

import { api } from '../../services/api';

import { Button, Text } from './styles';

export type TextProps = {
  focused: boolean;
}

export type ButtonProps = {
  focused: boolean;
}

type GenreResponse = {
  idGenre: string;
  name: string;
}

type Genre = {
  key: number;
  idGenre: string;
  name: string;
  actived: boolean;
}

export const GenreButtons = () => {
  
  const [genres, setGenres] = useState<Genre[]>([]);
  const [buttonFocused, setButtonFocused] = useState(0);

  useEffect(() => {
    api.get<GenreResponse[]>('/genres').then(response => {
      
      const genresSerialized = response.data.map((genre, index) => {
        return {
          key: index + 1,
          idGenre: genre.idGenre,
          name: genre.name,
          actived: false
        }
      });

      setGenres([{
        key: 0,
        idGenre: '/',
        name: 'Home',
        actived: true
      }, ...genresSerialized]);

    });
  }, []);

  function selectGenre(genreSelected: number) {

    genres.find(genre => {
      if (genre.key == genreSelected) {
        genre.actived = true;

        setButtonFocused(genre.key);
        
        handleNavigateToGenre();
      }
    });

    // return genres[genreSelected].key;
  }

  function handleNavigateToGenre() {  
    // navigate('Genre', { idGenre });
  }

  
  return (
    <>
      {genres.map((genre, currentGenre) => (
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