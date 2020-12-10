import React from 'react';
import { TouchableWithoutFeedbackProps } from 'react-native';

import { Button, Text } from './styles';

export interface HomeSectionProps extends TouchableWithoutFeedbackProps {
  title: string;
  focused: boolean;
}

export type TextProps = {
  focused: boolean;
}

export type ButtonProps = {
  focused: boolean;
}

export const ButtonTab: React.FC<HomeSectionProps> = ({
  title,
  focused,
  ...rest
}) => {
  return (
    <Button focused={focused} {...rest}>
      <Text focused={focused}>{title}</Text>
    </Button>
  );
}