import {AxiosResponse} from 'axios';

export const SEARCH_MOVIES = 'SEARCH_MOVIES';
export const MOVIES_DETAILS = 'MOVIES_DETAILS';

export interface SearchMovieAction {
  type: typeof SEARCH_MOVIES;
  payload: AxiosResponse;
}

export interface MoviesState {
  movies: AxiosResponse | [];
  details: AxiosResponse | {};
  page: number;
  total_results: number;
}

export interface MovieDetailsAction {
  type: typeof MOVIES_DETAILS;
  payload: AxiosResponse;
}

export type MovieActionTypes = SearchMovieAction;
