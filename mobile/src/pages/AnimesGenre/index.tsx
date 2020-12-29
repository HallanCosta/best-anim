import React from 'react';
import { FlatGrid } from 'react-native-super-grid';

import { TAnime, Anime } from '../../components/Anime';
import { GenreButtons } from '../../components/GenreButtons';

import { 
  Container,
  Section,
  AnimesGenreContainer,
  Title
} from './styles'

type AniemsGenreProps = {
  title: string;
  animesGenre: TAnime[];
}

export const AnimesGenre: React.FC<AniemsGenreProps> = ({
  title,
  animesGenre
}) => {
  return (
    <Container>

      <Section
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <GenreButtons data={genres} />
      </Section>
    
      
    </Container>
  );
}

// export const SkeletonAnimesGenre = () => {
//   return (

//   );
// }