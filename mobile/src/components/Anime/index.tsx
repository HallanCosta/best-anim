import React from 'react';

import { 
  AnimeContent,
  AnimeImg,
  AnimeName,
  RatingContent,
  RatingTitle,
  RatingValueContent,
  RatingValue
} from './styles';

export type TAnime = {
  idAnime: string;
  name: string;
  image: string;
  rating: string;
}

type AnimeProps = {
  image: string;
  name: string;
  rating: string;
}

export const Anime: React.FC<AnimeProps> = ({
  image,
  name,
  rating
}) => {
  return (
    <AnimeContent>
      <AnimeImg source={{ uri: image }} />
      <AnimeName numberOfLines={1}>{name}</AnimeName>

      <RatingContent>
        <RatingTitle>Nota</RatingTitle>
        <RatingValueContent>
          <RatingValue>
            {rating == '' ? '0.0' : rating}
          </RatingValue>
        </RatingValueContent>
      </RatingContent>
    </AnimeContent>
  );
}