import React from 'react';
import {TextInput, TextStyle} from 'react-native';

interface InputProps {
  value: string;
  placeholder?: string;
  onChangeText?: (text: string) => void;
  style?: TextStyle;
}

const Input: React.FC<InputProps> = React.memo(
  ({value, placeholder, onChangeText, style}) => {
    return <TextInput {...{value, placeholder, onChangeText, style}} />;
  },
);

export {Input};
