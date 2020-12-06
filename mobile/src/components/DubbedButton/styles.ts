import styled from 'styled-components/native';

import { IDubbedButtonProps } from '.';

export const DubbedContainer = styled.TouchableOpacity<IDubbedButtonProps>`
  width: 30%;
  margin-left: 30px;

  border-bottom-color: ${ (props) => props.dubbedClicked ? '#A9A2D2' : 'transparent'};
  border-bottom-width: ${ (props) => props.dubbedClicked ? '3px' : '0px'};
  border-style: ${ (props) => props.dubbedClicked ? 'solid' : 'solid'};
`;

