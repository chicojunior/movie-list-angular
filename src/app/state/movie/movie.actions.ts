import { createAction, props } from '@ngrx/store';

import { Movie } from '@app-common/model/movie.model';

export enum MovieActionTypes {
  GetAllMovies = '[Movie] GetAllMovies',
  GetAllMoviesSuccess = '[Movie] GetAllMovies Success',
  GetAllMoviesFailure = '[Movie] GetAllMovies Failure',
  GetMovieById = '[Movie] GetMovieById',
  GetMovieByIdSuccess = '[Movie] GetMovieById Success',
  GetMovieByIdFailure = '[Movie] GetMovieById Failure',
  SearchMovies = '[Movie] SearchMovies',
  SearchMoviesSuccess = '[Movie] SearchMovies Success',
  SearchMoviesFailure = '[Movie] SearchMovies Failure'
}

export const getAllMovies = createAction(MovieActionTypes.GetAllMovies);
export const getAllMoviesSuccess = createAction(MovieActionTypes.GetAllMoviesSuccess, props<{ payload: Movie[] }>());
export const getAllMoviesFailure = createAction(MovieActionTypes.GetAllMoviesFailure, props<{ error: any }>());

export const getGetMovieById = createAction(MovieActionTypes.GetMovieById, props<{ payload: number }>());
export const getGetMovieByIdSuccess = createAction(MovieActionTypes.GetMovieByIdSuccess, props<{ payload: Movie }>());
export const getGetMovieByIdFailure = createAction(MovieActionTypes.GetMovieByIdFailure, props<{ error: any }>());

export const searchMovies = createAction(MovieActionTypes.SearchMovies, props<{ query: string }>());
export const searchMoviesSuccess = createAction(MovieActionTypes.SearchMoviesSuccess, props<{ payload: Movie[] }>());
export const searchMoviesFailure = createAction(MovieActionTypes.SearchMoviesFailure, props<{ error: any }>());
