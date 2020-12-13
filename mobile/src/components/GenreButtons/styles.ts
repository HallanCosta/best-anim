import styled from 'styled-components/native';

import { TextProps, ButtonProps } from '.';

export const Button = styled.TouchableOpacity<ButtonProps>`
  width: auto;
  margin-right: 30px;
  
  border-bottom-color: ${({ focused }) => focused ? '#A9A2D2' : '#fff'};
  border-bottom-width: ${({ focused }) => focused ? '3px' : '0px'};
  border-style: ${({ focused }) => focused ? 'solid' : 'solid'};
`;

export const Text = styled.Text<TextProps>`
  color: ${({ focused }) => focused ? '#fff' : '#968E95'};
  font-family: Poppins_500Medium;
  font-size: 15px;

  text-align: center;
  padding: 0 0 15px;
`;