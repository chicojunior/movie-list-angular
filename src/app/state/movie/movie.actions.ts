import { createAction, props } from '@ngrx/store';

import { Movie } from '@app-common/model/movie.model';

export enum CourseActionTypes {
  GetAllMovies = '[Course] GetAllMovies',
  GetAllMoviesSuccess = '[Course] GetAllMovies Success',
  GetAllMoviesFailure = '[Course] GetAllMovies Failure',
  SearchMovies = '[Course] SearchMovies',
  SearchMoviesSuccess = '[Course] SearchMovies Success',
  SearchMoviesFailure = '[Course] SearchMovies Failure'
}

export const getAllMovies = createAction(CourseActionTypes.GetAllMovies);
export const getAllMoviesSuccess = createAction(CourseActionTypes.GetAllMoviesSuccess, props<{ payload: Movie[] }>());
export const getAllMoviesFailure = createAction(CourseActionTypes.GetAllMoviesFailure, props<{ error: any }>());

export const searchMovies = createAction(CourseActionTypes.SearchMovies, props<{ query: string }>());
export const searchMoviesSuccess = createAction(CourseActionTypes.SearchMoviesSuccess, props<{ payload: Movie[] }>());
export const searchMoviesFailure = createAction(CourseActionTypes.SearchMoviesFailure, props<{ error: any }>());
