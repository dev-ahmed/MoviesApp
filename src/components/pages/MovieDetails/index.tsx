import {useRoute} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {RootStateOrAny, useDispatch, useSelector} from 'react-redux';
import {useCallbackOne} from 'use-memo-one';
import {getMovieDetails} from '../../../store/movies/actions';
import styles from './styles';

const MovieDetails: React.FC = React.memo(() => {
  const dispatch = useDispatch();
  const route = useRoute();

  const initialFetch = useCallbackOne(() => {
    const {id} = route.params;
    dispatch(getMovieDetails(id));
  }, []);

  const {details} = useSelector((state: RootStateOrAny) => ({
    details: state.moviesReducer.details,
  }));

  useEffect(() => {
    initialFetch();
  }, [route.params, initialFetch]);

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{uri: 'https://via.placeholder.com/150'}}
      />
      {details && (
        <View style={styles.details}>
          <View style={styles.row}>
            <Text style={styles.title}>Original title:</Text>
            <Text style={styles.subTitle}> {details.original_title}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.title}>Popularity:</Text>
            <Text style={styles.subTitle}> {details.popularity}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.title}>Status:</Text>
            <Text style={styles.subTitle}> {details.status}</Text>
          </View>
          <Text style={styles.title}>Overview:</Text>
          <Text style={styles.marginTop10}> {details.overview}</Text>
        </View>
      )}
    </View>
  );
});

export {MovieDetails};
