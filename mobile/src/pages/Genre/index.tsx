import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { HomeHeader } from '../../components/HomeHeader';
import { Anime } from '../../components/Animes';
import { ButtonTab } from '../../components/SectionButtons';

import { api } from '../../services/api';

import { 
  Container,

  Section,

  Main,
  Title,

  AnimesContainer,
  AnimeContent,
  AnimeImg,
  AnimeName,
  RatingContent,
  RatingTitle,
  RatingValue,
} from './styles';

import konosubaImg from '../../assets/images/konosuba2.jpg';

type DubbedResponse = {
  title: string;
  listAnimesGenre: Anime[];
}

type GenreResponse = {
  idGenre: string;
  name: string;
}

type Genre = {
  id: number;
  name: string;
  actived: boolean;
}

export const Genre = () => {
  const { navigate } = useNavigation();

  const { params } = useRoute();

  // PEGAR OS PARAMS E USAR PARA FAZE REQUEST  \/

  const [animesDubbed, setAnimesDubbed] = useState<Anime[]>([]);
 
  const [genres, setGenres] = useState<GenreResponse[]>([]);
  const [buttonFocused, setButtonFocused] = useState<Genre>({
    id: 0,
    name: '',
    actived: false
  });
  const [currentSection, setCurrentSection] = useState<Genre[]>([{
    id: 0,
    name: '',
    actived: false
  }]);

  useEffect(() => {
    api.get<DubbedResponse>(`/genres/dublado`).then(response => {
      // setAnimesDubbed(response.data.listAnimesGenre);
      console.log(response.data)
    });
  }, []);


  useEffect(() => {
    api.get<GenreResponse[]>('/genres').then(response => {
      setGenres([{
        idGenre: '/',
        name: 'Home',
      }, ...response.data]);

      const genresSerialized = response.data.map((genre, index) => {
        return {
          id: index+1,
          name: genre.name,
          actived: false
        }
      });

      setCurrentSection([{
        id: 0,
        name: 'Home',
        actived: true
      }, ...genresSerialized]);
    })
  }, []);

  function handleSelectSection(id: number, idGenre: string) {
    currentSection.find(element => {
      if (element.id == id) {
        element.actived = true;
      }
    });

    setButtonFocused(currentSection[id]);

    navigate('Genre', {
      idGenre
    });
  }
  
  return (
    <Container>
      <HomeHeader />

      <Section
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ height: 60, paddingBottom: 20 }}
      >
        {genres.map((genre, index) => {
          return (
            <ButtonTab 
              key={index} 
              title={genre.name} 
              focused={buttonFocused.id == index ? true : false} 
              disabled={buttonFocused.id == index ? true : false}
              onPress={() => handleSelectSection(index, genre.idGenre)}
            />
          );
        })}

      </Section>

    </Container>
  );
}