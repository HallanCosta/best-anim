import React from 'react';
import { View, Text, Image } from 'react-native';
import { Feather, FontAwesome } from '@expo/vector-icons';

import { 
  Container,
  Header,
  Title,
  Main,
  AnimesSections,
  NavigationBar,
  Series,
  Movies,
  
  Footer,
  Play,
  User
} from './styles';

import { Animes } from '../../components/Animes';

export const Home: React.FC = () => {
  
  return (
    <Container>
      <Header>
        <FontAwesome 
          style={{ marginLeft: 0 }}
          name="sliders" 
          size={24} 
          color="#FFF" 
          
        />

        <Title>PROCURE ANIMES</Title>

        <Feather 
          style={{ marginRight: 0 }}
          name="search" 
          size={20}  
          color="#FFF" 
        />
      </Header>

      <NavigationBar>
        <Series>Series</Series>
        <Movies>Movies</Movies>
      </NavigationBar>

      <AnimesSections
        showsVerticalScrollIndicator={false}
      >
        
        <Animes HeaderTitle="POPULARES" />
        <Animes HeaderTitle="ÚLTIMOS LANÇAMENTOS"/>
        <Animes HeaderTitle="LISTA DE ANIMES" />
        
      </AnimesSections>

      <Footer>
        <Play>
          <Feather name="play" size={20} color="#8F7FAC" />
        </Play>
        <User>
          <Feather name="user" size={20} color="#8F7FAC" />
        </User>
      </Footer>

    </Container>
  );
} 