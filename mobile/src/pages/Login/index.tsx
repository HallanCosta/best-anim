import React from 'react';
import { View, Text } from 'react-native';

import styled from 'styled-components/native';

export const Login = () => {
  return (
    <Container>
      {/* <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Em Breve</Text>
      </View> */}

      <Bottom>
        <BottomItem>
          <BottomItemInner>
            <BottomItemText>1</BottomItemText>
          </BottomItemInner>
        </BottomItem>

        <BottomItem>
          <BottomItemInner>
            <BottomItemText>2</BottomItemText>
          </BottomItemInner>
        </BottomItem>

        <BottomItem>
          <BottomItemInner>
            <BottomItemText>3</BottomItemText>
          </BottomItemInner>
        </BottomItem>

        <BottomItem>
          <BottomItemInner>
            <BottomItemText>4</BottomItemText>
          </BottomItemInner>
        </BottomItem>
      </Bottom>

    </Container>
  );
}

const Container = styled.View`
  padding-top: 60px;
`;

const Bottom = styled.View`
  height: 100%;
  flex-direction: row;
  flex-wrap: wrap;

  background: #fff;
  justify-content: center;
  align-items: center;
`;

const BottomItem = styled.View`
  width: 100px;
  height: 90px;
  margin-left: 15px;
  margin-top: 5px;
`;

const BottomItemInner = styled.View`
  flex: 1;
  background: #A47EF8;
  border-radius: 12px;

  justify-content: center;
  align-items: center;
`;

const BottomItemText = styled.Text`
  font-family: Poppins_400Regular;
  font-size: 30px;
  color: #fff;
`;