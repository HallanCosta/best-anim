import styled from 'styled-components/native';

type EpisodePaginationTextProps = {
  enabled: boolean;
}

export const Container = styled.View`
  background: #473759;
  padding: 54px 24px 0;
  height: 100%;
`;

export const BackButton = styled.TouchableOpacity`
  margin-right: 35px;
  margin-top: 5px;
`;

export const BackButtonIcon = styled.Image``;

export const Main = styled.View`
  background: #fff;
  border-radius: 20px;
  padding-bottom: 30px;

  margin: 150px 0 30px;
`;

export const AnimeImageContent = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const AnimeImage = styled.Image`
  top: -120px;
  border-radius: 20px;
  position: absolute;
  
  width: 263px;
  height: 225px;
`;

// Ver porque esta com muito espaçamento em baixo
export const AnimeEpisodeVideo = styled.View`
  width: 100%;
  height: 100%;

  /* justify-content: center; */
  /* align-items: center; */
  /* transform: rotate(90deg); */
  /* top: -120px; */
`;

export const PlayCircleContent = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 60px;

  height: 60px;
  top: -30px
`;

export const PlayCircle = styled.Image`
  width: 60px;
  height: 60px;
  /* position: absolute; */
`;

export const DescriptionContainer = styled.View`
  /* margin-top: 120px; */
  margin-top: 50px;
  justify-content: center;
  align-items: center;
`;

export const DescriptionContent = styled.View`
  width: 263px;
  height: 45px;
  background: #7146BE;

  border-radius: 12px;
  justify-content: center;
  align-items: center;

  margin-top: 20px;
`;

export const DescriptionText = styled.Text`
  font-family: Ubuntu_500Medium;
  font-size: 20px;
  color: #fff;
`;

export const Pagination = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: 40px;
  padding: 0 30px 0;
`;

export const Button = styled.TouchableOpacity``;

export const NextEpisodeIcon = styled.Image`
  width: 90px;
  height: 25px;
`;

export const PreviousEpisodeIcon = styled.Image`
  transform: rotate(180deg);
  width: 90px;
  height: 25px;
`;

export const EpisodePaginationText = styled.Text<EpisodePaginationTextProps>`
  font-size: 15px;
  font-family: Archivo_400Regular;
  left: 18px;
  top: 8px;
`;