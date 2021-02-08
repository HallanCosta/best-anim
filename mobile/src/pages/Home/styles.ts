import styled from 'styled-components/native';

export const Container = styled.View`
  padding-top: 10px;
  background-color: #473759;
  height: 100%;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #473759;

  padding: 0 20px 0;
  padding-top: 30px;

  width: 100%;
  height: 90px;
`;

export const DrawerButton = styled.TouchableOpacity``;

export const SlidersIcon = styled.Image`
  width: 30px;
  height: 25px;
`;

export const LogoImg = styled.Image`
  width: 163px;
  height: 40px;
`;

export const SearchButton = styled.TouchableOpacity``;

export const SearchIcon = styled.Image`
  width: 30px;
  height: 25px;
`;

export const AnimeInput = styled.TextInput`
  width: 85%;
  height: 32px;
  background: #fff;
  border-radius: 12px;

  color: #605B5B;
  font-size: 14px;
  font-family: Archivo_600SemiBold;

  padding-left: 10px;
`;

export const Section = styled.ScrollView`
  padding: 0 20px 0;
  margin-top: 20px;
  flex-direction: row;
`;

export const HomeContainer = styled.View`
  height: 72%;
`;

export const AnimesGenreContainer = styled.View`
  height: 72%;
`;

export const Main = styled.ScrollView`
  /* flex: 1; */
`;

export const TitleContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 0 20px 0;
`;

export const Title = styled.Text`
  font-size: 15px;
  font-family: Ubuntu_700Bold;
  color: #968E95;

  margin-top: 15px;
`;

export const AnimesContainer = styled.ScrollView`
  flex-direction: row;
  padding-bottom: 10px;
  /* margin-bottom: 10px; */
`;

export const EpisodesContainer = styled.ScrollView`
  flex-direction: row;
  padding-bottom: 10px;
`;