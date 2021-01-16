import React from 'react';
import {Text, TouchableOpacity, ViewStyle} from 'react-native';
import styles from './styles';

interface MovieItemProps {
  title: string;
  overview: string;
  style?: ViewStyle;
  onPress?: () => void;
}

const MovieItem: React.FC<MovieItemProps> = React.memo(
  ({title, overview, style, onPress}) => {
    return (
      <TouchableOpacity {...{onPress}} style={[styles.container, style]}>
        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>
        <Text numberOfLines={2} style={styles.overview}>
          {overview}
        </Text>
      </TouchableOpacity>
    );
  },
);

export {MovieItem};
