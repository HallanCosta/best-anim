import styled from 'styled-components/native';

export const Container = styled.View`
  padding-top: 42px;
  background-color: #473759;
  height: 100%;
`;


export const Header = styled.View`
  /* background-color: #000; */
  padding: 0 20px 0;
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
`;

export const Section = styled.View`
  padding: 0 20px 0;
  margin-top: 30px;
  
  flex-direction: row;
`;

export const Series = styled.Text`
  color: #fff;
  font-family: Poppins_500Medium;
  font-size: 15px;

  width: 30%;
  text-align: center;
  padding: 0 0 15px;

  border-bottom-color: #A9A2D2;
  border-bottom-width: 3px;
  border-style: solid;
`;

export const Movies = styled.Text`
  color: #968E95;
  font-family: Poppins_500Medium;
  font-size: 15px;
  /* margin-left: 40px; */
  width: 30%;
  text-align: center;

  /* border-bottom-color: #A9A2D2;
  border-bottom-width: 3px;
  border-style: solid; */
`;

export const Main = styled.ScrollView`
  flex: 1;
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

  margin-top: 20px;
`;

export const AnimesContainer = styled.ScrollView`
  flex-direction: row;
  padding-bottom: 10px;
  /* margin-bottom: 10px; */
`;

export const AnimeContent = styled.View`
  margin-right: 15px;
  margin-top: 15px;
`;

export const AnimeImg = styled.Image`
  width: 132px;
  height: 170px;
  border-radius: 8px;
`;

export const AnimeName = styled.Text`
  font-size: 15px;
  font-family: Archivo_400Regular;
  margin-top: 5px;

  max-width: 132px;
  line-height: 20px;
  color: #fff;
`;

export const RatingContent = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const RatingTitle = styled.Text`
  font-size: 15px;
  font-family: Archivo_400Regular;

  color: #fff;
`;

export const RatingValue = styled.Text`
  font-size: 15px;
  font-family: Archivo_400Regular;
  margin-left: 10px;

  width: 40px;
  height: 25px;
  color: #fff;

  border: 2px solid #A47EF8;
  border-radius: 12px;
  text-align: center;
  
  top: 3px;
  background-color: #A47EF8;
`;


export const EpisodesContainer = styled(AnimesContainer)``;

export const EpisodeContent = styled(AnimeContent)`
  /* border: 3px solid red; */
`;

export const EpisodeThumbnail = styled.Image`
  width: 190px;
  height: 128px;
  border-radius: 8px;
`;

export const EpisodeName = styled(AnimeName)`
  max-width: 190px;
`;

export const Subtitled = styled.Text`
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





export const Footer = styled.View`
  background-color: #3A2E46;
  height: 50px;
  flex-direction: row;
`;

export const PlayIconContent = styled.View`
  width:  50%;
  height: 100%;

  border-top-color: #A9A2D2;
  border-top-width: 3px;
  border-style: solid;

  justify-content: space-around;
  align-items: center;
`;


export const UserIconContent = styled.View`
  width:  50%;
  height: 100%;

  /* border-top-color: #A9A2D2;
  border-top-width: 3px;
  border-style: solid; */

  justify-content: space-around;
  align-items: center;
`;
