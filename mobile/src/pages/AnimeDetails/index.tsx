import React, { useEffect } from 'react';
import { Alert, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';

import { 
  Container
} from './styles';
import { api } from '../../services/api';

type Params = {
  idAnime: string;
}

export const AnimeDetails = () => {

  const route = useRoute();

  const routeParams = route.params as Params;

  useEffect(() => {
    api.get(`https://api-animesonline-cc.herokuapp.com/anime/${routeParams.idAnime}`)
      .then(response => {
        
      })
      .catch(() => {
        Alert.alert('Error', 'Erro ao buscar anime!');
      });
   }, []);
  
  return (
    <Container>
      <Text>Testando</Text>
    </Container>
  );
}