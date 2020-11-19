import styled from 'styled-components/native';

export const Section = styled.View`
  margin: 0 0 30px;
`;

export const HeaderSection = styled.View`
  flex-direction: row;
  padding-right: 24px;
  justify-content: space-between;
`;

export const HeaderSectionTitle = styled.Text`
  color: #8E7EA2;
  font-size: 14px;
  font-family: Roboto_700Bold;
`;

export const More = styled.Text`
  color: #8E7EA2;
  font-size: 12px;
  font-family: Roboto_400Regular;
`;

export const AnimesContainer = styled.ScrollView`
  flex-direction: row;
`;

export const Anime = styled.View`
  margin-right: 18px;
`;

export const AnimeImg = styled.Image`
  width: 130px;
  height: 170px;
  border-radius: 8px;
  margin: 15px 0 0;
`;

export const AnimeTitle = styled.Text`
  color: #B9A9CE;
  margin: 10px 0 0;
  font-family: Ubuntu_700Bold;
`;


export const AnimeEpisode = styled.Text`
  color: #6B5A7E;
  font-family: Ubuntu_400Regular;
`;