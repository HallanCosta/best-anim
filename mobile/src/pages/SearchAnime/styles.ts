import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #473759;
  height: 100%;
  padding: 10px 20px 0;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #473759;

  /* padding: 30px 20px 0; */
  padding-top: 20px;

  width: 100%;
  height: 90px;
`;

export const BackButton = styled.TouchableOpacity`
  margin-top: 5px;
`;

export const BackButtonIcon = styled.Image``;

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

export const Main = styled.View`
  height: 85%;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-family: Ubuntu_700Bold;
  width: 100%;

  text-align: center;
  color: #968E95;
  margin-bottom: 10px;
`;

export const Search = styled(Title)`
  color: #fff;
`;