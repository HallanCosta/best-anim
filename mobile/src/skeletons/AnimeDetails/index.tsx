import React from 'react';
import { StyleSheet } from 'react-native';

import ShimmerPlaceholder from 'react-native-shimmer-placeholder';

import { SkeletonGenreButtons } from '../../components/GenreButtons';

import { colors } from '../../utils/shimmerColors';

import { 
  SkeletonContainer, 
  Section,
  Main,
  AnimeDetailsContent,
  AnimeImageContent,
  DescriptionContainer,
  HeaderContainerAnimeDetails,
  TitleContent,
  RatingContent,
  SectionContent
} from './styles';

type SkeletonAnimeDetailsProps = {
  visible: boolean;
}

export const SkeletonAnimeDetails: React.FC<SkeletonAnimeDetailsProps> = ({
  visible,
  children
}) => {
  return (
    <>
      {visible &&
        <SkeletonContainer>

          <Section>
            <ShimmerPlaceholder shimmerColors={colors} style={styles.back} />
            <SkeletonGenreButtons />
          </Section>

          <Main>
          
            <AnimeDetailsContent>
              <AnimeImageContent>
                <ShimmerPlaceholder shimmerColors={colors} style={styles.animeImage} />
              </AnimeImageContent>

              <DescriptionContainer>
                <HeaderContainerAnimeDetails>
                  <TitleContent>
                    <ShimmerPlaceholder shimmerColors={colors} style={styles.title} />
                    <ShimmerPlaceholder shimmerColors={colors} style={styles.quantityEpisodes} />
                    <ShimmerPlaceholder shimmerColors={colors} style={styles.quantityEpisodes} />
                  </TitleContent>

                  <RatingContent>
                    <ShimmerPlaceholder shimmerColors={colors} style={styles.rating} />
                  </RatingContent>

                </HeaderContainerAnimeDetails>
                
                <ShimmerPlaceholder shimmerColors={colors} style={styles.genres} />

                <SectionContent>
                  <ShimmerPlaceholder shimmerColors={colors} style={styles.sectionButton} />
                  <ShimmerPlaceholder shimmerColors={colors} style={styles.sectionButton} />
                </SectionContent>

                <ShimmerPlaceholder shimmerColors={colors} style={styles.synopsis} />

              </DescriptionContainer>

            </AnimeDetailsContent>
          </Main>      
        </SkeletonContainer>
      }

      {!visible && children}
    </>
  );
}

const styles = StyleSheet.create({
  back: {
    width: 60,
    borderRadius: 5,
    marginRight: 35
  },

  animeImage: {
    width: 273,
    height: 235,
    borderRadius: 20,
    top: -120,
    position: 'absolute',
    borderStyle: 'solid',
    borderColor: '#A47EF8',
    borderWidth: 2
  },

  title: {
    width: 200,
    height: 50,
    borderRadius: 12
  },
  
  quantityEpisodes: {
    width: 150,
    height: 20,
    borderRadius: 12,
    marginTop: 8
  },

  rating: {
    width: 50,
    height: 50,
    borderRadius: 50
  },

  genres: {
    width: 200,
    height: 60,
    borderRadius: 12,
    marginTop: 20
  },

  sectionButton: {
    width: 60,
    height: 20,
    borderRadius: 12,
    marginTop: 20,
    marginRight: 25
  },

  synopsis: {
    width: 270,
    height: 170,
    borderRadius: 20,
    marginTop: 20
  }
});