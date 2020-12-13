import React, { useState } from 'react';
import { createBottomTabNavigator  } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';

import { Home } from '../../../../pages/Home';
import { Login } from '../../../../pages/Login';
import { Genre } from '../../../../pages/Genre';

import { HomeTabButton, LoginTabButton } from '../../../../components/BottomTabs';

export const HomeMaterialTabs = () => {

  const { navigate } = useNavigation();

  const { Navigator, Screen } = createMaterialTopTabNavigator();

  const [isFocused, setFocused] = useState(true);

  function handleNavigateToHome() {
    if (!isFocused) {
      setFocused(!isFocused);
    }
   
    navigate('Home');
  }

  function handleNavigateToLogin() {
    if (isFocused) {
      setFocused(!isFocused);
    }
    
    navigate('Login');
  }

  return (
    <Navigator
      tabBarPosition="bottom"
      tabBar={() => (
        <Container>
          <HomeTabButton 
            style={{ top: -3, marginTop: 0 }} 
            focused={isFocused} 
            onPress={handleNavigateToHome}
          >
            <Feather 
              style={{ textAlign: 'center', marginTop: 5 }}
              name="play" 
              size={24} 
              color="#A9A2D2" 
            />
          </HomeTabButton>

          <LoginTabButton 
            style={{ top: -3, marginTop: 0 }} 
            focused={!isFocused} 
            onPress={handleNavigateToLogin}
          >
            <Feather 
              style={{ textAlign: 'center', marginTop: 5 }}
              name="user" 
              size={24} 
              color="#A9A2D2" 
            />
          </LoginTabButton>
        </Container>
      )}
    >
      <Screen 
        name="Home" 
        component={Home}
      />
      <Screen 
        name="Login" 
        component={Login}
      />
      <Screen 
        name="Genre" 
        component={Genre}
      />
    </Navigator>
  );
}

const Container = styled.View`
  height: 60px;
  flex-direction: row;
  background-color:#3A2E46;
`;