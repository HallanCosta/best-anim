import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import { 
  AnimesContainer,
  AnimeContent,
  AnimeImg,
  AnimeName,
  RatingContent,
  RatingTitle,
  RatingValue
} from './styles';

import { api } from '../../services/api';

type Anime = {
  idAnime: string;
  name: string;
  image: string;
  rating: string;
}

type ApiAnimesHomeResponse = {
  sectionAnimesRecents: Anime[];
  sectionAnimesList: Anime[];
}

type AnimesProps = {
  section: 'sectionAnimesRecents' | 'sectionAnimesList';
}

export const AnimesHome = (props: AnimesProps) => {

  const [animes, setAnimes] = useState<Anime[]>([]);

  useEffect(() => {
    api.get<ApiAnimesHomeResponse>('/')
      .then(response => {
        const animes = response.data[props.section] as Anime[];

        setAnimes(animes);
      });
  }, []);

  return (
    <AnimesContainer 
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 20 }}
    >
      {animes.map((anime: Anime) => (
        <AnimeContent key={anime.idAnime}>
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