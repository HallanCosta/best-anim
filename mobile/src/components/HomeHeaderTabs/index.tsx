import React from 'react';
import { ViewProps } from 'react-native';

import slidersIcon from '../../assets/images/icon/sliders.png';
import searchIcon from '../../assets/images/icon/search.png';
import logoImg from '../../assets/images/logo.png';

import {
  Header,
  DrawerButton,
  SlidersIcon,
  LogoImg,
  SearchButton,
  SearchIcon
} from './styles';

export const HomeHeaderTabs = () => {

  return (
    <Header>
      <DrawerButton>
        <SlidersIcon source={slidersIcon} />
      </DrawerButton>

      <LogoImg source={logoImg} />

      <SearchButton>
        <SearchIcon source={searchIcon} />
      </SearchButton>
    </Header>
  );
}