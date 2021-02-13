import React from 'react';
import { FlatGrid } from 'react-native-super-grid';

import { TAnime, Anime } from '../Anime';

type AnimesGridProps = {
  data: TAnime[];
}

export const AnimesGrid: React.FC<AnimesGridProps> = ({
  data
}) => {
  return (
    <FlatGrid
      style={{ marginLeft: 10 }}
      horizontal={false}
      showsVerticalScrollIndicator={false}
      itemDimension={140}
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