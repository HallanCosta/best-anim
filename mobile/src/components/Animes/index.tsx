import React from 'react';

import { 
  AnimesContainer,
  AnimeContent,
  AnimeImg,
  AnimeName,
  RatingContent,
  RatingTitle,
  RatingValue
} from './styles';

export type Anime = {
  idAnime: string;
  name: string;
  image: string;
  rating: string;
} 

type AnimesProps = {
  animes: Anime[];
}

export const Animes: React.FC<AnimesProps> = ({
  animes,
}) => {
  return (
    <AnimesContainer 
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 20 }}
    >
      {animes.map((anime, index) => (
        <AnimeContent key={index}>
          <AnimeImg source={{ uri: anime.image }} />
          <AnimeName numberOfLines={2} >{anime.name}</AnimeName>

          <RatingContent>
            <RatingTitle>Nota</RatingTitle>
            <RatingValue>{anime.rating}</RatingValue>
          </RatingContent>
        </AnimeContent>
      ))}
    </AnimesContainer>
  );
}