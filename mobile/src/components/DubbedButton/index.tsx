import React from 'react';
import { TouchableWithoutFeedbackProps } from 'react-native';

import { DubbedContainer } from './styles';

export interface IDubbedButtonProps extends TouchableWithoutFeedbackProps {
  dubbedClicked: boolean;
}

export const DubbedButton: React.FC<IDubbedButtonProps> = ({
  dubbedClicked,
  children,
  ...rest
}) => {

  return(
    <DubbedContainer dubbedClicked={dubbedClicked} {...rest}>
      {children}
    </DubbedContainer>
  );
} 