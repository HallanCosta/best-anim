import React from 'react';
import { StyleSheet } from 'react-native';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';

import { SkeletonAnime } from '../../components/Anime';
import { SkeletonGenreButtons } from '../../components/GenreButtons';

import { colors } from '../../utils/shimmerColors';

import {
  Container,
  Section,
  Main,
  TitleContent,
  AnimesContainer
} from './styles';

type SkeletonHomeProps = {
  visible: boolean;
}

export const SkeletonHome: React.FC<SkeletonHomeProps> = ({
  visible,
  children
}) => {
  return (
    <>
      { visible && 
        <Container>
          <Section>
            <SkeletonGenreButtons />
          </Section>

          <Main>
            <TitleContent>
              <ShimmerPlaceholder shimmerColors={colors} style={styled.title} />
              <ShimmerPlaceholder shimmerColors={colors} style={styled.more} />
            </TitleContent>

            <AnimesContainer>
              <SkeletonAnime />
              <SkeletonAnime />
              <SkeletonAnime />
              <SkeletonAnime />
            </AnimesContainer>

            <TitleContent>
              <ShimmerPlaceholder shimmerColors={colors} style={styled.title} />
              <ShimmerPlaceholder shimmerColors={colors} style={styled.more} />
            </TitleContent>

            <AnimesContainer>
              <SkeletonAnime />
              <SkeletonAnime />
              <SkeletonAnime />
              <SkeletonAnime />
            </AnimesContainer>

            <TitleContent>
              <ShimmerPlaceholder shimmerColors={colors} style={styled.title} />
              <ShimmerPlaceholder shimmerColors={colors} style={styled.more} />
            </TitleContent>

            <AnimesContainer>
              <SkeletonAnime />
              <SkeletonAnime />
              <SkeletonAnime />
              <SkeletonAnime />
            </AnimesContainer>
          </Main>
        </Container>
      }
      
      { !visible && children }
    </>
  );
}

const styled = StyleSheet.create({
  title: {
    borderRadius: 5,
    marginTop: 15
  },

  more: {
    width: 60,
    borderRadius: 5,
    marginTop: 15
  }
});