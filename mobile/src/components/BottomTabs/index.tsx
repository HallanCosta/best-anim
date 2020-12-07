import React from 'react';
import { TouchableWithoutFeedbackProps } from 'react-native';

import { HomeButton, LoginButton } from './styles';

export interface IButtonProps extends TouchableWithoutFeedbackProps {
  focused: boolean
}

export const HomeTabButton: React.FC<IButtonProps> = ({
  focused,
  children,
  ...rest
}) => {
  return (
    <HomeButton focused={focused} {...rest}>
      {children}
    </HomeButton>
  );
} 

export const LoginTabButton: React.FC<IButtonProps> = ({
  focused,
  children,
  ...rest
}) => {
  return (
    <LoginButton focused={focused} {...rest}>
      {children}
    </LoginButton>
  );
} 