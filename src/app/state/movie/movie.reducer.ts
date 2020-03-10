import { createReducer, on, createFeatureSelector, createSelector, Action } from '@ngrx/store';
import * as MovieActions from './movie.actions';
import { Movie } from '@app-common/model/movie.model';

export interface MovieState {
  movieList: Movie[];
  selectedMovie: Movie;
}

const initialState: MovieState = {
  movieList: [],
  selectedMovie: {} as Movie
};

const movieReducer = createReducer(
  initialState,
  on(MovieActions.getAllMoviesSuccess, (state, action) => ({
    ...state,
    movieList: action.payload
  })),
  on(MovieActions.getGetMovieByIdSuccess, (state, action) => ({
    ...state,
    selectedMovie: action.payload
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

export const allMovies = createSelector(allMoviesSelector, (movies: MovieState) => movies.movieList);
export const movieSelected = createSelector(allMoviesSelector, (movie: MovieState) => movie.selectedMovie);
