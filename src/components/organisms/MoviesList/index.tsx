import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  ViewProps,
} from 'react-native';
import {ROUTES} from '../../../constants/routes';
import {MovieItem} from '../../molecules/MovieItem';
import styles from './styles';

interface Movie {
  id: number;
  title: string;
  overview: string;
}

interface MoviesListProps {
  movies: Movie[];
  style?: ViewProps;
  onEndReached: () => void;
  totalMovies: number;
}

const MoviesList: React.FC<MoviesListProps> = React.memo(
  ({movies, style, onEndReached, totalMovies}) => {
    const [list, setList] = useState(movies);
    const navigation = useNavigation();

    useEffect(() => {
      setList(movies);
    }, [movies]);

    const renderItem: ListRenderItem<Movie> = ({item}) => {
      const {title, overview, id} = item;
      return (
        <MovieItem
          onPress={() => {
            navigation.navigate(ROUTES.MovieDetails, {id});
          }}
          style={styles.item}
          {...{title, overview}}
        />
      );
    };

    return (
      <FlatList
        initialNumToRender={5}
        ListFooterComponent={() =>
          totalMovies === movies.length &&
          totalMovies !== 0 && <ActivityIndicator />
        }
        keyExtractor={(item, index) => index.toString()}
        data={list}
        {...{renderItem, style, onEndReached}}
      />
    );
  },
);

export {MoviesList};
