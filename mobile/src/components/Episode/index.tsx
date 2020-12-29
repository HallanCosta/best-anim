import React from 'react';

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

type EpisodeProps = {
  name: string;
  thumbnail: string;
  subtitled: string;
}

export const Episode: React.FC<EpisodeProps> = ({
  name,
  thumbnail,
  subtitled
}) => {
  return (
    <EpisodeContent> 
      <EpisodeThumbnail source={{ uri: thumbnail}} />
      <EpisodeName numberOfLines={2} ellipsizeMode="middle">{name}</EpisodeName>
      
      { subtitled && 
        <SubtitledText>{subtitled}</SubtitledText>
      }
    </EpisodeContent>
  );
} 