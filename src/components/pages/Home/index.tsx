import React, {useState} from 'react';
import {View} from 'react-native';
import {RootStateOrAny, useDispatch, useSelector} from 'react-redux';
import {searchMovies} from '../../../store/movies/actions';
import {SearchBar} from '../../organisms';
import {MoviesList} from '../../organisms/MoviesList';
import styles from './styles';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState('');

  const {movies, page, totalMovies} = useSelector((state: RootStateOrAny) => ({
    movies: state.moviesReducer.movies,
    page: state.moviesReducer.page,
    totalMovies: state.moviesReducer.total_results,
  }));

  const onChangeText = (text: string) => {
    setKeyword(text);
    dispatch(searchMovies(text));
  };

  const onEndReached = () => {
    dispatch(searchMovies(keyword, page + 1));
  };

  return (
    <View style={styles.container}>
      <SearchBar {...{keyword, onChangeText}} />
      <MoviesList
        {...{
          movies,
          style: styles.moviesListContainer,
          onEndReached,
          totalMovies,
        }}
      />
    </View>
  );
};

export {Home};
