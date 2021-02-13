import styled from 'styled-components/native';

export const EpisodeContent = styled.TouchableOpacity`
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