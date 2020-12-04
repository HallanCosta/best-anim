import React from 'react';
import { Text, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

import slidersIcon from '../../assets/images/icon/sliders.png';
import searchIcon from '../../assets/images/icon/search.png';

import logoImg from '../../assets/images/logo.png';

import { Animes } from '../../components/Animes';

import { 
  Container,
  Header,
  Section,
  Series,
  Movies,
  Main,
  TitleContent,
  Title,
  
  Footer,
  PlayIconContent,
  UserIconContent
} from './styles';


export const Home = () => {

  return (
    <Container>
      <Header>
        <Image source={slidersIcon} />
        <Image source={logoImg} />
        <Image source={searchIcon} />
      </Header>

      <Section>
        <Series>Series</Series>
        <Movies>Filmes</Movies>
      </Section>

      <Main
        showsHorizontalScrollIndicator={false}
      >
        <TitleContent>
          <Title>ULTIMOS LANÇAMENTOS</Title>
          <Title>MAIS</Title>
        </TitleContent>

        <Animes />
       

        <TitleContent>
          <Title>TOP ANIMES</Title>
          <Title>MAIS</Title>
        </TitleContent>

        <Animes />
      </Main>

      
      <Footer>
        <PlayIconContent>
          <Feather 
            name="play" 
            color="#A9A2D2" 
            size={24} 
          />
        </PlayIconContent>
        <UserIconContent>
          <Feather 
            name="user" 
            color="#A9A2D2" 
            size={24} 
          />
        </UserIconContent>
      </Footer>
      
    </Container>
  );
} 