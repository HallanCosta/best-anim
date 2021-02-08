import React from 'react';
import { StyleSheet } from 'react-native';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';

import { colors} from '../../utils/shimmerColors';

import { 
  SkeletonContainer,
  Section,
  Main,
  AnimeImageContent,
  DescriptionContainer
} from './styles';

type SkeletonEpisodeDetailsProps = {
  visible: boolean;
}

export const SkeletonEpisodeDetails: React.FC<SkeletonEpisodeDetailsProps> = ({
  visible,
  children
}) => {
  return (
    <>
      { visible &&
        <SkeletonContainer>
          <Section>
            <ShimmerPlaceholder shimmerColors={colors} style={styles.back} />
          </Section>
          
          <Main>
            <AnimeImageContent>
              <ShimmerPlaceholder shimmerColors={colors} style={styles.animeImage} />
            </AnimeImageContent>

            <DescriptionContainer>
              <ShimmerPlaceholder shimmerColors={colors} style={styles.descriptionContent} />

              <ShimmerPlaceholder shimmerColors={colors} style={styles.descriptionContent} />
              
              <ShimmerPlaceholder shimmerColors={colors} style={styles.descriptionContent} />
            </DescriptionContainer>
          </Main>
        </SkeletonContainer>
      }

      { !visible && children }
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

  descriptionContent: {
    width: 263,
    height: 45,
    backgroundColor: '#7146BE',

    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',

    marginTop: 20
  }
});