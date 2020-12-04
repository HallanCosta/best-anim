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
  margin-top: 40px;
  
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
