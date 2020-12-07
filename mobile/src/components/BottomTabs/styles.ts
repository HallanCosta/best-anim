import styled from 'styled-components/native';

import { IButtonProps } from '.';

const Button = styled.TouchableOpacity<IButtonProps>`
  width: 50%;
  height: 100%;
  justify-content: center;
  align-items: center;

  border-top-color: ${ (props) => props.focused ? '#A9A2D2' : 'transparent'};
  border-top-width: ${ (props) => props.focused ? '3px' : '0px'};
  border-style: ${ (props) => props.focused ? 'solid' : 'solid'};
`;

export const HomeButton = styled(Button)``;

export const LoginButton = styled(Button)``;
