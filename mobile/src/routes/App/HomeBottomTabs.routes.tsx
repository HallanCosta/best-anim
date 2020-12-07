import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createBottomTabNavigator  } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { Home } from '../../pages/Home';
import { Login } from '../../pages/Login';


export const HomeBottomTabs = () => {

  const { navigate } = useNavigation();

  const [isFocused, setFocused] = useState(true);

  const { Navigator, Screen } = createBottomTabNavigator();

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
      tabBar={() => (
        <View style={styles.container}>

          <TouchableOpacity 
            style={[ styles.buttonSelect, 
              isFocused 
              ? styles.selected 
              : styles.unSelected 
            ]}
            disabled={isFocused}
            onPress={handleNavigateToHome}
          >
            <Feather 
              style={styles.icon} 
              name="play" 
              size={24} 
              color="#A9A2D2" 
            />
          </TouchableOpacity>

          <TouchableOpacity 
            style={[ styles.buttonSelect,
              isFocused 
              ? styles.unSelected 
              : styles.selected 
            ]}
            disabled={!isFocused}
            onPress={handleNavigateToLogin}
          >
            <Feather 
              style={styles.icon} 
              name="user" 
              size={24} 
              color="#A9A2D2" 
            />
          </TouchableOpacity>
        </View>
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
    </Navigator>
  );
} 

const styles = StyleSheet.create({
  container: { 
    height: 60, 
    flexDirection: 'row',
    backgroundColor: '#3A2E46'
  },

  icon: {
    textAlign: 'center', 
    marginTop: 5
  },

  buttonSelect: {
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  selected: {
    borderTopWidth: 3,
    borderStyle: 'solid',
    borderTopColor: '#A9A2D2',
    marginTop: -3
  },

  unSelected: {
    borderTopWidth: 0,
    borderStyle: 'solid',
    borderTopColor: '#fff',
    marginTop: -3
  }
});