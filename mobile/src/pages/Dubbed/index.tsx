import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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

export const Dubbed = () => {
  const { navigate } = useNavigation();

  const [animesDubbed, setAnimesDubbed] = useState<Anime[]>([]);
  const [animesEcchi, setAnimesEcchi] = useState<Anime[]>([]);

  useEffect(() => {
    api.get<DubbedResponse>('/genres/dublado').then(response => {
      setAnimesDubbed(response.data.listAnimesGenre);
    });

    api.get<DubbedResponse>('/genres/ecchi').then(response => {
      setAnimesEcchi(response.data.listAnimesGenre);
    });
  }, []);

  function handleNavigateToAnimesSubtitled() {
    navigate('Home');
  }
  
  return (
    <Container>
      <HomeHeader />

      <Section>
        <ButtonTab title="Animes" focused={false} disabled={false} onPress={handleNavigateToAnimesSubtitled} />
        <ButtonTab title="Dublados" focused={true} disabled={true} />
      </Section>

      <Main>
     
        <Title>ANIMES DUBLADOS</Title>

        <AnimesContainer
          horizontal={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 20 }}
        >
          <AnimeContent>
            <AnimeImg source={konosubaImg} />
            <AnimeName numberOfLines={2} >konosuba</AnimeName>

            <RatingContent>
              <RatingTitle>Nota</RatingTitle>
              <RatingValue>12</RatingValue>
            </RatingContent>
          </AnimeContent>
        </AnimesContainer>

        {/* <AnimesContainer 
          horizontal={false}
          // showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 20 }}
        >
          {animesDubbed.map((anime, index) => (
            <AnimeContent key={index}>
              <AnimeImg source={{ uri: anime.image }} />
              <AnimeName numberOfLines={2} >{anime.name}</AnimeName>

              <RatingContent>
                <RatingTitle>Nota</RatingTitle>
                <RatingValue>{anime.rating}</RatingValue>
              </RatingContent>
            </AnimeContent>
          ))}
        </AnimesContainer> */}

      </Main>
      

    </Container>
  );
}