import {combineReducers} from 'redux';
import {movieReducer} from './movies/reducer';

export const reducers = combineReducers({moviesReducer: movieReducer});
