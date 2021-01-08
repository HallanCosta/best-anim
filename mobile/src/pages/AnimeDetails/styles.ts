import styled from 'styled-components/native';

export const Container = styled.View`
  background: #473759;
  padding: 54px 24px 0;
  height: 100%;
`;

export const Header = styled.View`
  flex-direction: row;
`;

export const Section = styled.ScrollView`
  flex-direction: row;
`;

export const BackButton = styled.TouchableOpacity`
  margin-right: 35px;
`;

export const BackButtonIcon = styled.Image``;

export const Main = styled.ScrollView`
  margin: 42px 0 0;
`;

export const AnimeDetailsContent = styled.View`
  background: #fff;
  border-radius: 20px;
  padding: 20px 40px 30px;
  margin-top: 100px;
`;

export const FrontImageBackgroundContent = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const FrontImageBackground = styled.Image`
  top: -120px;
  position: absolute;
  border-radius: 20px;
  width: 319px;
  height: 285px;
`;

export const HeaderContainerAnimeDetails = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const DescriptionContainer = styled.View`
  margin-top: 200px;
`;

export const TitleContent = styled.View`
  flex-direction: column;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-family: Ubuntu_500Medium;
`;

export const QuantityEpisodes = styled.Text`
  color: #A9A9A9;
  font-size: 16px;
  line-height: 30px;
`;

export const RatingContent = styled.View``;

export const Rating = styled.Text`
  font-size: 18px;
  font-family: Poppins_400Regular;
`;

export const RatingValueBackground = styled.View`
  background: #A47EF8;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
`;

export const RatingValue = styled.Text`
  font-size: 16px;
  font-family: Poppins_400Regular;
  color: #fff; 
  top: 2px;
`;

export const GenresText = styled.Text`
  color: #A9A9A9;
  font-size: 16px;
  max-width: 250px;
  margin-top: 20px;
`;

export const SectionContent = styled.View`
  flex-direction: row;
  margin-top: 20px;
  /* justify-content: center; */
  /* align-items: center; */
`;

export const DescriptionContent = styled.Text`
  margin-top: 20px;
`;

export const Synopsis = styled.Text`
  color: #4c4c4c;
  font-size: 16px;
  font-family: Poppins_400Regular;
`;