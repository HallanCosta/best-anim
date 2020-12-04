import React from 'react';
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

import konosubaImg from '../../assets/images/konosuba2.jpg';

type AnimesProps = {
  HeaderTitle: string;
}

export const Animes = () => {
  return (
    <AnimesContainer 
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 20 }}
    >
      <AnimeContent>
        <AnimeImg source={konosubaImg} />
        <AnimeName>KonoSuba! 2</AnimeName>

        <RatingContent>
          <RatingTitle>Nota</RatingTitle>
          <RatingValue>8,49</RatingValue>
        </RatingContent>
      </AnimeContent>

      <AnimeContent>
        <AnimeImg source={konosubaImg} />
        <AnimeName>KonoSuba! 2</AnimeName>

        <RatingContent>
          <RatingTitle>Nota</RatingTitle>
          <RatingValue>8,49</RatingValue>
        </RatingContent>
      </AnimeContent>

      <AnimeContent>
        <AnimeImg source={konosubaImg} />
        <AnimeName>KonoSuba! 2</AnimeName>

        <RatingContent>
          <RatingTitle>Nota</RatingTitle>
          <RatingValue>8,49</RatingValue>
        </RatingContent>
      </AnimeContent>

    </AnimesContainer>
  );
}













/*

import React from 'react';
import { View } from 'react-native';

import { 
  Section,
  HeaderSection,
  HeaderSectionTitle,
  More,
  AnimesContainer,
  Anime,
  AnimeImg,
  AnimeTitle,
  AnimeEpisode,
} from './styles';

import konosuba2Img from '../../assets/images/konosuba2.jpg';

type AnimesProps = {
  HeaderTitle: string;
}

export const Animes: React.FC<AnimesProps> = (props) => {
  return (
    <Section>
      <HeaderSection>
        <HeaderSectionTitle>{props.HeaderTitle}</HeaderSectionTitle>
        <More>MAIS</More>
      </HeaderSection>

      <AnimesContainer
        horizontal 
        showsHorizontalScrollIndicator={false}
      >

        <Anime>
          <AnimeImg source={konosuba2Img} /> 
          <AnimeTitle>KonoSuba! 2</AnimeTitle>
          <AnimeEpisode>Episódio 130</AnimeEpisode>
        </Anime>

        <Anime>
          <AnimeImg source={konosuba2Img} /> 
          <AnimeTitle>KonoSuba! 2</AnimeTitle>
          <AnimeEpisode>Episódio 130</AnimeEpisode>
        </Anime>

        <Anime>
          <AnimeImg source={konosuba2Img} /> 
          <AnimeTitle>KonoSuba! 2</AnimeTitle>
          <AnimeEpisode>Episódio 130</AnimeEpisode>
        </Anime>

        <Anime>
          <AnimeImg source={konosuba2Img} /> 
          <AnimeTitle>KonoSuba! 2</AnimeTitle>
          <AnimeEpisode>Episódio 130</AnimeEpisode>
        </Anime>

      </AnimesContainer>
    </Section>
  );
}
*/