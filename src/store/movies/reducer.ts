import {
  MovieActionTypes,
  MoviesState,
  MOVIES_DETAILS,
  SEARCH_MOVIES,
} from './types';

const initialState: MoviesState = {
  movies: [],
  page: 0,
  details: {},
  total_results: 0,
};

export const movieReducer = (
  state = initialState,
  action: MovieActionTypes,
): MoviesState => {
  switch (action.type as any) {
    case SEARCH_MOVIES:
      return {
        ...state,
        movies: [...state.movies, ...action.payload.data.results],
        page: action.payload.data.page,
        total_results: action.payload.data.total_results,
      };
    case MOVIES_DETAILS:
      return {
        ...state,
        details: action.payload.data,
      };
    default:
      return state;
  }
};
