import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';

import { colors } from '../../utils/shimmerColors';

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
  press: () => void;
}

export const GenreButtons: React.FC<GenreButtonsProps> = ({
  data,
  press
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
    
    press();
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

export const SkeletonGenreButtons = () => {
  return (
    <>
      <ShimmerPlaceholder shimmerColors={colors} style={styled.genreButtons} />
      <ShimmerPlaceholder shimmerColors={colors} style={styled.genreButtons} />
      <ShimmerPlaceholder shimmerColors={colors} style={styled.genreButtons} />
      <ShimmerPlaceholder shimmerColors={colors} style={styled.genreButtons} />
      <ShimmerPlaceholder shimmerColors={colors} style={styled.genreButtons} />
      <ShimmerPlaceholder shimmerColors={colors} style={styled.genreButtons} />
      <ShimmerPlaceholder shimmerColors={colors} style={styled.genreButtons} />
    </>
  );
}

const styled = StyleSheet.create({
  genreButtons: {
    width: 45,
    marginRight: 30,
    borderRadius: 8
  }
});