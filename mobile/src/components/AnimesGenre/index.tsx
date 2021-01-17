import React from 'react';
import { FlatGrid } from 'react-native-super-grid';

import { TAnime, Anime, SkeletonAnime } from '../../components/Anime';

import { AnimesGenreContainer } from './styles';

type AniemsGenreProps = {
  data: TAnime[];
}

export const AnimesGenre: React.FC<AniemsGenreProps> = ({
  data
}) => {
  return (
    <FlatGrid
      horizontal={false}
      contentContainerStyle={{ paddingHorizontal: 10 }}
      showsVerticalScrollIndicator={false}
      itemDimension={130}
      data={data}
      renderItem={({ item, index }) => (
        <Anime 
          key={index} 
          idAnime={item.idAnime}
          name={item.name} 
          image={item.image} 
          rating={item.rating} 
        />
      )}
    />
  );
}