import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';

import { colors } from '../../utils/shimmerColors';

import { 
  AnimeContent,
  AnimeImg,
  AnimeName,
  RatingContent,
  RatingTitle,
  RatingValueContent,
  RatingValue
} from './styles';

export type TAnime = {
  idAnime: string;
  name: string;
  image: string;
  rating: string;
}

export const Anime: React.FC<TAnime> = ({
  idAnime,
  image,
  name,
  rating
}) => {

  const { navigate } = useNavigation();

  function handleNavigateToAnimeDetails() {
    navigate('AnimeDetails', { idAnime });
  }

  return (
    <AnimeContent onPress={handleNavigateToAnimeDetails}>
      <AnimeImg source={{ uri: image }} />
      <AnimeName numberOfLines={1}>{name}</AnimeName>

      <RatingContent>
        <RatingTitle>Nota</RatingTitle>
        <RatingValueContent>
          <RatingValue>
            {rating == '' ? '0.0' : rating}
          </RatingValue>
        </RatingValueContent>
      </RatingContent>
    </AnimeContent>
  );
}

export const SkeletonAnime = () => {
  return (
    <View style={skeletonStyled.AnimeContent}>
      <ShimmerPlaceholder shimmerColors={colors} visible={false} style={skeletonStyled.AnimeImg} />
      <ShimmerPlaceholder shimmerColors={colors} visible={false} style={skeletonStyled.AnimeName} />
      <ShimmerPlaceholder shimmerColors={colors} visible={false} style={skeletonStyled.Rating} />
    </View>
  );
}

const skeletonStyled = StyleSheet.create({
  AnimeContent: {
    marginRight: 15,
    marginTop: 15
  },

  AnimeImg: {
    width: 132,
    height: 170,
    borderRadius: 8
  },

  AnimeName: {
    marginTop: 5,
    borderRadius: 8,
    maxWidth: 132,
    height: 12
  },

  Rating: {
    marginBottom: 5,
    borderRadius: 8,
    marginTop: 3,

    maxWidth: 132,
    height: 15
  }
});