import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #513669;
  padding-top: 32px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  padding: 0 24px 0;
`;


export const Title = styled.Text`
  color: #FFF;
  font-size: 15px;
  font-family: Gudea_700Bold;
`;

export const Main = styled.View`
  
`;

export const NavigationBar = styled.View`
  margin: 30px 0 0;
  flex-direction: row;
  padding-left: 24px;
  margin-bottom: 30px;
`;

export const Series = styled.Text`
  color: #FFF;
  margin-right: 30px;
  font-family: Roboto_400Regular;
  width: 30%;
  text-align: center;

  border-radius: 2px;

  border-bottom-width: 3px;
  border-bottom-color: #BA9EE8;
  padding-bottom: 15px;
`;

export const Movies = styled.Text`
  color: #796290;
  /* font-family: Trykker_400Regular; */
  font-family: Roboto_400Regular;
  width: 30%;
  text-align: center;

  border-radius: 2px;

  /* border-bottom-width: 3px;
  border-bottom-color: #BA9EE8; 
  padding-bottom: 15px; */
`;

export const AnimesSections = styled.ScrollView`
  height: 65%;
`;

// export const Section = styled.View`
//   margin: 0 0 30px;
// `;

// export const HeaderSection = styled.View`
//   flex-direction: row;
//   padding: 0 24px 0;
//   justify-content: space-between;
// `;

// export const HeaderTitle = styled.Text`
//   color: #8E7EA2;
//   font-size: 14px;
//   font-family: Roboto_700Bold;
// `;

// export const More = styled.Text`
//   color: #8E7EA2;
//   font-size: 12px;
//   font-family: Roboto_400Regular;
// `;

// export const AnimesContainer = styled.ScrollView`
//   flex-direction: row;
//   padding-left: 24px;
// `;

// export const Anime = styled.View`
//   margin-right: 18px;
// `;

// export const AnimeImg = styled.Image`
//   width: 130px;
//   height: 170px;
//   border-radius: 8px;
//   margin: 15px 0 0;
// `;

// export const AnimeTitle = styled.Text`
//   color: #B9A9CE;
//   margin: 10px 0 0;
//   font-family: Ubuntu_700Bold;
// `;


// export const AnimeEpisode = styled.Text`
//   color: #6B5A7E;
//   font-family: Ubuntu_400Regular;
// `;

export const Footer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #3B2E4A;
  width: 100%;
  /* border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px; */
  
`;

export const Play = styled.View`
  /* padding: 0 5px 0; */
  flex: 1;
  width: 50%;
  height: 100%;
  align-items: center;
  justify-content: center;

  /* UX purple boder */
  border-top-width: 3px;
  border-top-color: #BA9EE8;
`;

export const User = styled.View`
  width: 50%;
  height: 100%;
  align-items: center;
  justify-content: center;

  /* UX purple boder */
  /* border-top-width: 3px;
  border-top-color: #BA9EE8; */
`;