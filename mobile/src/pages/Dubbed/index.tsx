import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { HomeHeaderTabs } from '../../components/HomeHeaderTabs';

import { 
  Container,

  Section,
  DubbedButton,
  DubbedText,
  AnimesButton,
  AnimesText,

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

type DubbedResponse = {

}

export const Dubbed = () => {
  const { navigate } = useNavigation();

  const [animesDubbed, setAnimesDubbed] = useState();

  // useEffect(() => {
  //   api.get<DubbedResponse>('/genres/dublado').then(response => {
  //     setAnimesRecents(response.data.sectionAnimesRecents);
  //     setEpisodes(response.data.sectionLatestEpisodes);
  //     setAnimesList(response.data.sectionAnimesList);
  //   });
  // }, []);

  function handleToNavigateAnimesSubtitled() {
    navigate('Home');
  }
  
  return (
    <Container>
      <HomeHeaderTabs />

      <Section>
        <AnimesButton onPress={handleToNavigateAnimesSubtitled}>
          <AnimesText>Animes</AnimesText>
        </AnimesButton>

        <DubbedButton onPress={() => alert('Dubbed')}>
          <DubbedText>Dublado</DubbedText>
        </DubbedButton>

        <Main>
          <Title>ANIMES DUBLADOS</Title>

          {/* <AnimesContainer 
            horizontal={true}
            showsHorizontalScrollIndicator={false}
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
      </Section>

    </Container>
  );
}