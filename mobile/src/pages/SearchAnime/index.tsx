import React, { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import backIcon from '../../assets/images/icon/back.png';
import searchIcon from '../../assets/images/icon/search.png';

import { TAnime } from '../../components/Anime';
import { AnimesGrid } from '../../components/AnimesGrid';

import { api } from '../../services/api';

import { 
  Container,
  Header,
  BackButton,
  BackButtonIcon,
  SearchButton,
  SearchIcon,
  AnimeInput,
  Main,
  Title,
  Search
} from './styles';

type Params = { 
  search: string;
}

type SearchAnimeResponse = {
  search: string;
  animesFinded: TAnime[];
}   

export const SearchAnime = () => {
  const { goBack } = useNavigation();

  const route = useRoute();
  const routeParams = route.params as Params;

  const [resultSearch, setResultSearch] = useState('');
  const [animes, setAnimes] = useState<TAnime[]>([]);
  const [animeSearch, setAnimeSearch] = useState('');
  const [inputVisible, setInputVisible] = useState(false);

  useEffect(() => {
    api.get<SearchAnimeResponse>(`/search/${routeParams.search}`).then(response => {
      const search = response.data.search.split(':');
      setResultSearch(search[1].trim());
      setAnimes(response.data.animesFinded);
    });
  }, []);

  function handleNavigateBack() {
    goBack();
  }

  function handleSearchAnime() {
    if (animeSearch != '') {
      alert('pesquisa');
      setAnimeSearch('');
    }

    setInputVisible(!inputVisible);
  }

  return (
    <Container>

      <Header>
        { !inputVisible &&
          <BackButton onPress={handleNavigateBack}>
            <BackButtonIcon source={backIcon} />
          </BackButton>
        }

        { inputVisible &&
          <AnimeInput 
            placeholder="Digite o nome do anime"
            value={animeSearch}
            onChangeText={setAnimeSearch}
          /> 
        }

        <SearchButton onPress={handleSearchAnime}>
          <SearchIcon source={searchIcon} />
        </SearchButton>
      </Header>

      <Main>

        <Title>
          1 Resultado(s) para:
          <Search> {resultSearch}</Search>
        </Title>
        
        <AnimesGrid data={animes}  />
      </Main>

    </Container>
  );
}