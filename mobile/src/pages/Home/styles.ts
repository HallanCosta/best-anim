import styled from 'styled-components/native';

export const Container = styled.View`
  padding-top: 10px;
  background-color: #473759;
  height: 100%;
`;

export const Section = styled.ScrollView`
  padding: 0 20px 0;
  margin-top: 20px;
  flex-direction: row;
`;

export const HomeContainer = styled.View`
  height: 80%;
`;

export const AnimesGenreContainer = styled.View`
  height: 80%;
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