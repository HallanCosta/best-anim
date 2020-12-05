import styled from 'styled-components/native';

export const AnimesContainer = styled.ScrollView`
  flex-direction: row;
  padding-bottom: 10px;
  /* margin-bottom: 10px; */
`;

export const AnimeContent = styled.View`
  margin-right: 15px;
`;

export const AnimeImg = styled.Image`
  width: 132px;
  height: 170px;
  border-radius: 8px;
  
  margin-top: 15px;
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
