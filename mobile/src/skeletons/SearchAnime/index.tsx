import React from 'react';
import { StyleSheet } from 'react-native';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import { FlatGrid } from 'react-native-super-grid';

import { colors } from '../../utils/shimmerColors'; 

import { SkeletonAnime } from '../../components/Anime';

import { 
  Container,
  Header,
  Main
} from './styles';

type SkeletonSearchAnimeProps = {
  visible: boolean;
}

export const SkeletonSearchAnime: React.FC<SkeletonSearchAnimeProps> = ({
  visible,
  children
}) => {

  function createAnimeData(count: number) {
    const animes = [];

    for (let i = 0; i < count; i++) {
      animes.push(i);
    }

    return animes;
  }

  return (
    <>
      { visible && 
        <Container>
          <Header>
            <ShimmerPlaceholder style={styles.back} shimmerColors={colors} />

            <ShimmerPlaceholder style={styles.search} shimmerColors={colors}  />
          </Header>

          <Main>
            <ShimmerPlaceholder style={styles.title} shimmerColors={colors}  />

            <FlatGrid
              style={{ marginLeft: 10 }}
              horizontal={false}
              showsVerticalScrollIndicator={false}
              itemDimension={140}
              data={createAnimeData(10)}
              renderItem={() => (
                <SkeletonAnime />
              )}
            />
          </Main>
        </Container>
      }

      { !visible && children }
    </>
  );
}

const styles = StyleSheet.create({
  back: {
    width: 60,
    borderRadius: 5
  },

  search: {
    width: 35,
    height: 30,
    borderRadius: 12
  },

  title: {
    width: '100%',
    height: 20,
    borderRadius: 12
  }
});