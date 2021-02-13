import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { 
  EpisodeContent,
  EpisodeName,
  EpisodeThumbnail,
  SubtitledText
} from './styles';

export type TEpisode = {
  name: string;
  thumbnail: string;
  subtitled: string;
  idEpisode: string;
}

export const Episode: React.FC<TEpisode> = ({
  name,
  thumbnail: image,
  subtitled,
  idEpisode
}) => {

  const { navigate } = useNavigation();
  
  function handleNavigateToEpisodeDetails() {
    navigate('EpisodeDetails', { 
      idEpisode,
      image
     });
  }

  return (
    <EpisodeContent onPress={handleNavigateToEpisodeDetails}> 
      <EpisodeThumbnail source={{ uri: image }} />
      <EpisodeName numberOfLines={2} ellipsizeMode="middle">{name}</EpisodeName>
      
      { subtitled && 
        <SubtitledText>{subtitled}</SubtitledText>
      }
    </EpisodeContent>
  );
} 