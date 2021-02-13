import React from 'react';
import { FlatGrid } from 'react-native-super-grid';

import { TAnime, Anime } from '../Anime';

interface AnimesGridProps {
  data: TAnime[];
  infinityScroll?():  Promise<void>;
}

export const AnimesGrid: React.FC<AnimesGridProps> = ({
  data,
  infinityScroll
}) => {
  return (
    <FlatGrid
      horizontal={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ marginLeft: 10 }}
      itemDimension={140}
      onEndReached={infinityScroll}
      onEndReachedThreshold={1.0}
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