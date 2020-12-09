import React from 'react';
import { View, Text } from 'react-native';

import styled from 'styled-components/native';

export const Login = () => {
  return (
    <Container>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Login</Text>
      </View>
    </Container>
  );
}

const Container = styled.View`
  padding-top: 10px;
`;