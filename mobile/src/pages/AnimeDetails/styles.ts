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
  margin-top: 5px;
`;

export const BackButtonIcon = styled.Image``;

export const Main = styled.ScrollView`
  margin-top: 25px;
`;

export const AnimeDetailsContent = styled.View`
  background: #fff;
  border-radius: 20px;
  padding: 20px;
  
  margin: 100px 0 30px;
  /* height: auto; */
`;

export const AnimeImageContent = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const AnimeImage = styled.Image`
  top: -120px;
  position: absolute;
  border-radius: 20px;
  
  width: 273px;
  height: 235px;
`;

export const DescriptionContainer = styled.View`
  margin-top: 140px;
  width: 100%;
`;

export const HeaderContainerAnimeDetails = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const TitleContent = styled.View`
  flex-direction: column;
  max-width: 200px
`;

export const Title = styled.Text`
  font-size: 18px;
  font-family: Ubuntu_500Medium;
`;

export const QuantityEpisodes = styled.Text`
  color: gray;
  font-size: 14px;
  margin-top: 8px;
  font-family: Poppins_500Medium;
`;

export const RatingContent = styled.View``;

export const Rating = styled.Text`
  font-size: 16px;
  font-family: Poppins_500Medium;
`;

export const RatingValueBackground = styled.View`
  background: #A47EF8;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
`;

export const RatingValue = styled.Text`
  font-size: 15px;
  font-family: Poppins_400Regular;
  color: #fff; 
  top: 2px;
`;

export const GenresText = styled.Text`
  /* color: #A9A9A9; */
  color: gray;
  font-size: 14px;
  max-width: 250px;
  margin-top: 10px;
  font-family: Poppins_500Medium;
`;

export const SectionContent = styled.View`
  flex-direction: row;
  margin: 20px 0 10px;
`;

export const Synopsis = styled.Text`
  margin-top: 10px;
  color: #4c4c4c;
  font-size: 16px;
  font-family: Poppins_400Regular;
`;

export const EpisodesContainer = styled.View``;

export const EpisodesContainerInner = styled.View`
  flex: 1;
  flex-direction: column;
  width: 100%;
`;

export const EpisodeSeasonContent = styled.View`
  margin-top: 15px;
  background: #AF0000;
  
  margin-bottom: 10px;
  padding: 10px 20px 10px;
  border-radius: 12px;
`;

export const EpisodeSeason = styled.Text`
  font-size: 20px;
  color: #fff;
  font-family: Ubuntu_500Medium;
`;

export const EpisodesSeasonContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

/* Ativado #6C46AE */
/* Desativado #A47EF8 */
export const EpisodeContent = styled.TouchableOpacity`
  width: 70px;
  height: 70px;
  border-radius: 12px;

  margin: 10px 10px 0;
`;

export const EpisodeContentInner = styled.View`
  flex: 1;
  background: #A47EF8;
  border-radius: 12px;

  justify-content: center;
  align-items: center;
`;

export const EpisodeText = styled.Text`
  font-family: Poppins_400Regular;
  font-size: 30px;
  color: #fff;
`;