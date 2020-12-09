import styled from 'styled-components/native';

export const Container = styled.View`
  padding-top: 10px;
  background-color: #473759;
  height: 100%;
`;

export const Section = styled.View`
  padding: 0 20px 0;
  margin-top: 20px;
  
  flex-direction: row;
`;

export const DubbedButton = styled.TouchableOpacity`
  width: 30%;
  margin-left: 15px;
`;

export const DubbedText = styled.Text`
  color: #968E95;
  font-family: Poppins_500Medium;
  font-size: 15px;

  text-align: center;
`;

export const AnimesButton = styled.TouchableOpacity`
  width: 30%;

  border-bottom-color: #A9A2D2;
  border-bottom-width: 3px;
  border-style: solid;
`;

export const AnimesText = styled.Text`
  color: #fff;
  font-family: Poppins_500Medium;
  font-size: 15px;

  text-align: center;
  padding: 0 0 15px;
`;

export const Main = styled.View`
  flex: 1;
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