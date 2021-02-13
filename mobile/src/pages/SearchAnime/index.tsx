import React, { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import backIcon from '../../assets/images/icon/back.png';
import searchIcon from '../../assets/images/icon/search.png';

import { TAnime } from '../../components/Anime';
import { AnimesGrid } from '../../components/AnimesGrid';

import { SkeletonSearchAnime } from '../../skeletons/SearchAnime';

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
  totalPage: string;
}   

export const SearchAnime = () => {
  const { goBack } = useNavigation();

  const route = useRoute();
  const routeParams = route.params as Params;

  const [skeletonVisible, setSkeletonVisible] = useState(true);
  const [inputVisible, setInputVisible] = useState(false);

  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [animes, setAnimes] = useState<TAnime[]>([]);
  const [animeSearch, setAnimeSearch] = useState('');
  const [resultSearch, setResultSearch] = useState('');

  useEffect(() => {
    loadAnimes();
  }, [skeletonVisible]);

  async function loadAnimes() {
    if (total > 0 && animes.length == total) {
      return;
    }
    
    if (loading) {
      return;
    }

    setLoading(true);

    const response = await api.get<SearchAnimeResponse>(`/search/${animeSearch || routeParams.search}/page/${page}`)

    const search = response.data.search.split(':');
    setResultSearch(search[1].trim());
    setAnimes([
      ...animes,
      ...response.data.animesFinded
    ]);
    setPage(page + 1);
    setTotal( 
      Number(response.data.totalPage) == 1
      ? response.data.animesFinded.length
      : Number(response.data.totalPage) * 20
    ); // 20 é o total de animes que a api fornece em uma pagina 

    setSkeletonVisible(false);
    setLoading(false);
  }

  function handleNavigateBack() {
    goBack();
  }

  function handleSearchAnime() {
    if (animeSearch != '') {
      setSkeletonVisible(true);
    }

    setInputVisible(!inputVisible);
  }

  return (
    <SkeletonSearchAnime visible={skeletonVisible}>
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
          
          <AnimesGrid data={animes} infinityScroll={loadAnimes} />
        </Main>

      </Container>
    </SkeletonSearchAnime>
  );
}