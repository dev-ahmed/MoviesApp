import {endpoints} from '../../constants';
import {get} from '../../utils/api';
import {MOVIES_DETAILS, SEARCH_MOVIES} from './types';

export const searchMovies = (query: string, page?: number) => async (
  dispatch: any,
) => {
  const payload = await get(endpoints.SEARCH, {params: {query, page}});
  console.log('====================================');
  console.log(payload);
  console.log('====================================');
  await dispatch({
    type: SEARCH_MOVIES,
    payload,
  });
};

export const getMovieDetails = (id: number) => async (dispatch: any) => {
  const payload = await get(`${endpoints.DETAILS}/${id}`);
  await dispatch({
    type: MOVIES_DETAILS,
    payload,
  });
};
