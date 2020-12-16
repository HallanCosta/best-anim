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

  /* margin-bottom: 10px; */
  /* flex: 1; */
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

export const EpisodeContent = styled.View`
  margin-right: 15px;
  margin-top: 15px;
`;

export const EpisodeThumbnail = styled.Image`
  width: 190px;
  height: 128px;
  border-radius: 8px;
`;

export const EpisodeName = styled.Text`
  font-size: 15px;
  font-family: Archivo_400Regular;
  margin-top: 5px;

  max-width: 132px;
  line-height: 20px;
  color: #fff;
`;

export const SubtitledText = styled.Text`
  position: absolute;
  font-size: 13px;
  color: #fff;

  font-family: Ubuntu_400Regular;
  background-color: #AF0000;
  border-top-left-radius: 8px;

  border-bottom-right-radius: 8px;
  width: 76px;
  height: 18px;

  text-align: center;
`;