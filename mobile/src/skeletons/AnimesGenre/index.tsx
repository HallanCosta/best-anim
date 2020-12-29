import React from 'react';
import { StyleSheet } from 'react-native';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import { FlatGrid } from 'react-native-super-grid';

import { SkeletonAnime } from '../../components/Anime';

import { colors } from '../../utils/shimmerColors';

import { SkeletonAnimesGenreContainer } from './styles';

type SkeletonAnimesGenreProps = {
  visible: boolean;
}

export const SkeletonAnimesGenre: React.FC<SkeletonAnimesGenreProps> = ({
  visible,
  children
}) => {

  function createData() {
    const array = [];
    
    for (let i = 0; i < 9; i++) {
      array.push(i);
    }
    
    return array;
  }

  return (
    <>
      { visible && 
        <SkeletonAnimesGenreContainer>
          <ShimmerPlaceholder shimmerColors={colors} style={styled.title} />

          <FlatGrid
            horizontal={false}
            contentContainerStyle={{ paddingHorizontal: 10 }}
            showsVerticalScrollIndicator={false}
            itemDimension={130}
            data={createData()}
            renderItem={ ({ item, index }) => <SkeletonAnime /> }
          />
        </SkeletonAnimesGenreContainer> 
      }

      { !visible && children }

    </>
  );
}

const styled = StyleSheet.create({
  title: {
    width: 80,
    borderRadius: 8,
    marginLeft: 20
  }
});