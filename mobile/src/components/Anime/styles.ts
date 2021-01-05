import styled from 'styled-components/native';

export const AnimeContent = styled.TouchableOpacity`
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
  padding-bottom: 5px;
`;

export const RatingTitle = styled.Text`
  font-size: 15px;
  font-family: Archivo_400Regular;

  color: #fff;
`;

export const RatingValueContent = styled.View`
  border: 2px solid #A47EF8;
  border-radius: 12px;
  background-color: #A47EF8;

  width: 35px;
  height: 25px;
  justify-content: center;
  align-items: center;

  left: 10px;
  top: 3px;
`;

export const RatingValue = styled.Text`
  font-size: 15px;
  font-family: Archivo_400Regular;
  text-align: center;

  color: #fff;
  margin-left: -3px;
`;