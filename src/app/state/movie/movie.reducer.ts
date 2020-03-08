import { createReducer, on, createFeatureSelector, createSelector, Action } from '@ngrx/store';
import * as MovieActions from './movie.actions';
import { Movie } from '@app-common/model/movie.model';

export interface MovieState {
  movieList: Movie[];
}

const initialState: MovieState = {
  movieList: []
};

const movieReducer = createReducer(
  initialState,
  on(MovieActions.getAllMoviesSuccess, (state, action) => ({
    ...state,
    movieList: action.payload
  })),
  on(MovieActions.searchMoviesSuccess, (state, action) => ({
    ...state,
    movieList: action.payload
  }))
);

export function reducer(state: MovieState | undefined, action: Action) {
  return movieReducer(state, action);
}

export const allMoviesSelector = createFeatureSelector('movies');
export const moviesSelector = createSelector(allMoviesSelector, (movies: MovieState) => movies.movieList);
