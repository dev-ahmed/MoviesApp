import React from 'react';
import {View} from 'react-native';
import {Input} from '../../atoms/Input';
import styles from './styles';

interface SearchProps {
  keyword: string;
  onChangeText: (text: string) => void;
}

export const SearchBar: React.FC<SearchProps> = React.memo(
  ({keyword, onChangeText}) => {
    return (
      <View style={styles.container}>
        <Input
          style={styles.text}
          value={keyword}
          placeholder="Search Movie"
          {...{onChangeText}}
        />
      </View>
    );
  },
);
